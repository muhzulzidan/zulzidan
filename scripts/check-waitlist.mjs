import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { validateApplication, BUSINESS_TYPES } from "../src/lib/waitlist-validation.mjs";
import { acceptRequest, migrateWaitlist, saveApplication, updateApplicationReview } from "../src/lib/waitlist-store.mjs";

const input = {name:"Example Applicant",email:"OWNER@example.test",business:"Example Services",businessType:BUSINESS_TYPES[0],country:"United States",website:"example.test",goal:"Help potential clients understand my consulting services and book a call.",referral:"A webinar",source:"/free-website/",referrer:"https://example.test/article",attribution:{utm_source:"test",utm_campaign:"free-website"},consent:true};
const application = validateApplication(input);
assert.equal(application.email,"owner@example.test");
assert.equal(application.website,"https://example.test/");
assert.throws(() => validateApplication({...input,consent:false}));
assert.throws(() => validateApplication({...input,email:"invalid"}));
assert.throws(() => validateApplication({...input,goal:"Too short"}));
assert.throws(() => validateApplication({...input,website:"https://user:password@example.test"}));
assert.throws(() => validateApplication({...input,businessType:"Unknown"}));
assert.throws(() => validateApplication({...input,website:"javascript:alert(1)"}));
console.log("Application validation passed.");

if (!process.env.LEADS_DATABASE_URL) throw new Error("LEADS_DATABASE_URL is required for the isolated integration check.");
const admin = neon(process.env.LEADS_DATABASE_URL);
const schema = `waitlist_test_${randomUUID().replaceAll("-","")}`;
// Neon HTTP does not apply connection-string search_path options. Each test
// operation explicitly selects its schema inside the same transaction instead.
const scoped = query => ({ query, then(resolve,reject) {
  return admin.transaction([admin.query(`SET LOCAL search_path TO ${schema}`),query]).then(results => results[1]).then(resolve,reject);
} });
const sql = (strings,...values) => scoped(admin(strings,...values));
sql.transaction = queries => admin.transaction([admin.query(`SET LOCAL search_path TO ${schema}`),...queries.map(q => q.query)]).then(results => results.slice(1));
try {
  await admin.query(`CREATE SCHEMA ${schema}`);
  assert.equal((await sql`SELECT current_schema() AS name`)[0].name,schema,"Test must use its disposable schema, never production tables.");
  await sql`CREATE TABLE leads (id TEXT PRIMARY KEY,data TEXT NOT NULL,created_at TEXT NOT NULL,updated_at TEXT NOT NULL,archived INTEGER NOT NULL DEFAULT 0,rowid BIGINT GENERATED ALWAYS AS IDENTITY)`;
  await sql`CREATE TABLE events (id TEXT PRIMARY KEY,lead_id TEXT NOT NULL REFERENCES leads(id),kind TEXT NOT NULL,detail TEXT NOT NULL,created_at TEXT NOT NULL)`;
  await sql`CREATE TABLE team_users (id TEXT PRIMARY KEY,username TEXT NOT NULL,enabled BOOLEAN NOT NULL)`;
  await sql`INSERT INTO team_users VALUES ('owner','zulzidan',TRUE)`;
  await migrateWaitlist(sql); await migrateWaitlist(sql);
  await saveApplication(application,sql);
  const [first] = await sql`SELECT * FROM website_waitlist`;
  assert.equal(first.email,"owner@example.test");
  assert.equal(first.status,"new");
  assert.equal(first.attribution.utm_source,"test");
  const [newLead] = await sql`SELECT * FROM leads WHERE id=${first.lead_id}`;
  assert.equal(JSON.parse(newLead.data).relationship_type,"pro_bono");
  assert.equal(JSON.parse(newLead.data).assigned_to,"owner");
  assert.equal((await sql`SELECT * FROM events`).length,1);
  await Promise.all([saveApplication(application,sql),saveApplication(application,sql)]);
  assert.equal((await sql`SELECT * FROM website_waitlist`).length,1);
  assert.equal((await sql`SELECT * FROM leads`).length,1);
  assert.equal((await sql`SELECT * FROM events`).length,1);
  // A retry still succeeds after someone edits the linked tracker identity.
  await sql`UPDATE leads SET data='{"company":"Renamed","email":"changed@example.test"}' WHERE id=${first.lead_id}`;
  await saveApplication(application,sql);
  assert.equal((await sql`SELECT * FROM leads`).length,1);
  // Inbound applications must not overwrite existing prospect data or its state.
  const preserved=JSON.stringify({company:"Existing Company",email:"existing@example.test",status:"opted_out",relationship_type:"prospect",notes:"Keep my history"});
  await sql`INSERT INTO leads (id,data,created_at,updated_at,archived) VALUES ('existing',${preserved},'2026-01-01','2026-01-02',1)`;
  await saveApplication({...application,email:"existing@example.test",business:"A new business name"},sql);
  const [existing] = await sql`SELECT * FROM leads WHERE id='existing'`;
  assert.equal(existing.data,preserved); assert.equal(existing.updated_at,"2026-01-02"); assert.equal(existing.archived,1);
  assert.equal((await sql`SELECT lead_id FROM website_waitlist WHERE email='existing@example.test'`)[0].lead_id,"existing");
  await saveApplication({...application,email:"another@example.test",business:"Existing Company"},sql);
  assert.equal((await sql`SELECT * FROM leads`).length,2);
  // A failed history write rolls the entire intake back, including the new lead.
  await sql`ALTER TABLE events ADD CONSTRAINT test_failure CHECK (kind <> 'note') NOT VALID`;
  await assert.rejects(saveApplication({...application,email:"failure@example.test",business:"Should Roll Back"},sql));
  assert.equal((await sql`SELECT * FROM website_waitlist WHERE email='failure@example.test'`).length,0);
  assert.equal((await sql`SELECT * FROM leads WHERE data::jsonb->>'company'='Should Roll Back'`).length,0);
  await sql`ALTER TABLE events DROP CONSTRAINT test_failure`;
  const [reviewRow] = await sql`SELECT id, updated_at::text AS version FROM website_waitlist WHERE email='existing@example.test'`;
  const review = {...reviewRow,status:"reviewing",notes:"Confirm the scope",referralOutcome:"Introduced a potential client; no paid project yet.",actor:"test-admin"};
  assert.equal(await updateApplicationReview(review,sql),true);
  const [reviewed] = await sql`SELECT * FROM website_waitlist WHERE id=${review.id}`;
  assert.equal(reviewed.status,"reviewing");assert.equal(reviewed.referral_outcome,review.referralOutcome);
  const eventCount=(await sql`SELECT * FROM events`).length;
  assert.equal(await updateApplicationReview({...review,status:"selected"},sql),false,"A stale review must not overwrite another edit.");
  assert.equal((await sql`SELECT * FROM events`).length,eventCount);
  assert.equal((await sql`SELECT data FROM leads WHERE id='existing'`)[0].data,preserved);
  for(let i=0;i<8;i++) assert.equal(await acceptRequest("test-connection",sql),true);
  assert.equal(await acceptRequest("test-connection",sql),false);
  await sql`UPDATE website_waitlist_rate_limits SET expires_at=NOW()-INTERVAL '1 second' WHERE key='test-connection'`;
  assert.equal(await acceptRequest("test-connection",sql),true);
  console.log("Isolated integration passed: persistence, tracker linkage, concurrent retries, existing-record preservation, transaction rollback, review/referral saves, conflicting edit rejection, and durable rate limits.");
} finally {
  await admin.query(`DROP SCHEMA IF EXISTS ${schema} CASCADE`);
  console.log("Disposable integration schema removed. Production lead records were not used or modified.");
}
