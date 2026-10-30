import { randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";

export function getWaitlistDatabase() {
  if (!process.env.LEADS_DATABASE_URL) throw new Error("Waitlist storage is not configured.");
  return neon(process.env.LEADS_DATABASE_URL);
}

export async function migrateWaitlist(sql = getWaitlistDatabase()) {
  await sql`
    CREATE TABLE IF NOT EXISTS website_waitlist (
      id TEXT PRIMARY KEY,
      lead_id TEXT NOT NULL REFERENCES leads(id),
      email VARCHAR(254) NOT NULL UNIQUE,
      name VARCHAR(120) NOT NULL,
      business VARCHAR(160) NOT NULL,
      business_type VARCHAR(80) NOT NULL,
      country VARCHAR(100) NOT NULL,
      website_url TEXT NOT NULL DEFAULT '',
      goal TEXT NOT NULL,
      referral VARCHAR(300) NOT NULL DEFAULT '',
      source VARCHAR(300) NOT NULL DEFAULT '/',
      referrer VARCHAR(600) NOT NULL DEFAULT '',
      attribution JSONB NOT NULL DEFAULT '{}',
      consent_version TEXT NOT NULL DEFAULT 'free-website-v1',
      status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','reviewing','waitlisted','selected','building','delivered','declined','withdrawn')),
      notes TEXT NOT NULL DEFAULT '',
      referral_outcome TEXT NOT NULL DEFAULT '',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;
  await sql`CREATE INDEX IF NOT EXISTS website_waitlist_created_idx ON website_waitlist(created_at DESC)`;
  await sql`CREATE TABLE IF NOT EXISTS website_waitlist_rate_limits (key TEXT PRIMARY KEY, hits INTEGER NOT NULL, expires_at TIMESTAMPTZ NOT NULL)`;
}

export async function acceptRequest(key, sql = getWaitlistDatabase()) {
  const [row] = await sql`
    INSERT INTO website_waitlist_rate_limits (key, hits, expires_at) VALUES (${key},1,NOW()+INTERVAL '1 hour')
    ON CONFLICT (key) DO UPDATE SET
      hits=CASE WHEN website_waitlist_rate_limits.expires_at<NOW() THEN 1 ELSE website_waitlist_rate_limits.hits+1 END,
      expires_at=CASE WHEN website_waitlist_rate_limits.expires_at<NOW() THEN NOW()+INTERVAL '1 hour' ELSE website_waitlist_rate_limits.expires_at END
    RETURNING hits`;
  return row.hits <= 8;
}

export async function saveApplication(application, sql = getWaitlistDatabase()) {
  const id = randomUUID();
  const leadId = randomUUID().replaceAll("-", "");
  const eventId = randomUUID().replaceAll("-", "");
  const stamp = new Date().toISOString();
  const lead = {
    company: application.business, contact_name: application.name, email: application.email,
    website: application.website, segment: application.businessType, region: application.country,
    relationship_type: "pro_bono", collaboration_stage: "discussion", promotion_status: "not_agreed",
    status: "researching", priority: "normal", offer: "Starter Sprint", sales_track: "general",
    source_url: "https://zulzidan.com/", source_checked: new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Makassar" }).format(new Date()),
    contact_channel: "email", contact_handle: application.email,
    observation: application.goal, angle: "Inbound free website application; scope and selection not yet agreed.",
    next_action: "Review the free website application at https://zulzidan.com/admin/waitlist/ and contact the applicant manually.",
    notes: `Applied for the free one-page website program. Application is not acceptance. No testimonial, promotion or referral obligation.\n\nWebsite goal: ${application.goal}\nReferred by / heard about this: ${application.referral || "Not specified"}\nCampaign: ${JSON.stringify(application.attribution)}`,
  };
  // The same transaction lock as the tracker protects its company/email deduplication.
  // Existing records are linked without changing their data, status, assignment or history.
  return sql.transaction([
    sql`SELECT pg_advisory_xact_lock(87658765)`,
    sql`
      WITH existing AS (
        SELECT id FROM leads WHERE LOWER(data::jsonb->>'email')=${application.email}
          OR LOWER(data::jsonb->>'company')=LOWER(${application.business})
        ORDER BY CASE WHEN LOWER(data::jsonb->>'email')=${application.email} THEN 0 ELSE 1 END, rowid LIMIT 1
      ), new_lead AS (
        INSERT INTO leads (id,data,created_at,updated_at,archived)
        SELECT ${leadId}, (${JSON.stringify(lead)}::jsonb || jsonb_build_object('assigned_to',
          COALESCE((SELECT id FROM team_users WHERE username='zulzidan' AND enabled=TRUE LIMIT 1),'')))::text,
          ${stamp},${stamp},0
        WHERE NOT EXISTS (SELECT 1 FROM existing) AND NOT EXISTS (SELECT 1 FROM website_waitlist WHERE email=${application.email})
        RETURNING id
      ), application AS (
        INSERT INTO website_waitlist (id,lead_id,email,name,business,business_type,country,website_url,goal,referral,source,referrer,attribution)
        SELECT ${id},COALESCE((SELECT id FROM existing),(SELECT id FROM new_lead),(SELECT lead_id FROM website_waitlist WHERE email=${application.email})),${application.email},${application.name},
          ${application.business},${application.businessType},${application.country},${application.website},${application.goal},
          ${application.referral},${application.source},${application.referrer},${JSON.stringify(application.attribution)}::jsonb
        ON CONFLICT (email) DO NOTHING RETURNING lead_id
      )
      INSERT INTO events (id,lead_id,kind,detail,created_at)
      SELECT ${eventId},lead_id,'note',${JSON.stringify({ text: "Inbound free website waitlist application received. Review at https://zulzidan.com/admin/waitlist/. Contact consent recorded; no outreach sent.", actor: "Website application" })},${stamp}
      FROM application
    `,
    sql`DELETE FROM website_waitlist_rate_limits WHERE expires_at < NOW()-INTERVAL '1 day'`,
  ]);
}

export async function updateApplicationReview(review, sql = getWaitlistDatabase()) {
  const results = await sql.transaction([
    sql`SELECT pg_advisory_xact_lock(87658765)`,
    sql`WITH changed AS (
      UPDATE website_waitlist SET status=${review.status}, notes=${review.notes}, referral_outcome=${review.referralOutcome}, updated_at=NOW()
      WHERE id=${review.id} AND updated_at=${review.version}::timestamptz RETURNING lead_id
    )
    INSERT INTO events (id,lead_id,kind,detail,created_at)
    SELECT ${randomUUID().replaceAll("-", "")},lead_id,'note',
      ${JSON.stringify({ text: `Free website application review: ${review.status}. Review and referral notes are saved in the private waitlist dashboard. No message was sent.`, actor: review.actor })},${new Date().toISOString()}
    FROM changed RETURNING lead_id`,
  ]);
  return results[1].length > 0;
}
