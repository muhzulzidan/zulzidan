import assert from "node:assert/strict";
const base = process.env.WAITLIST_CHECK_URL || "http://127.0.0.1:3002";
const get = path => fetch(`${base}${path}`,{redirect:"manual"});
for (const path of ["/","/free-website/","/privacy/","/social/zulzidan-free-website-v1.png","/work/ayomsatrio.png","/wordmark.svg"]) assert.equal((await get(path)).status,200,path);
const html = await (await get("/")).text();
for(const expected of ["Built for free.","Join the free website waitlist","https://ayomsatrio.com","/social/zulzidan-free-website-v1.png"]) {
  assert.ok(html.includes(expected),`Homepage should contain ${expected}`);
}
assert.equal((await get("/admin/waitlist/")).status,307);
assert.equal((await get("/admin/waitlist/export/")).status,401);
const post = (value,headers={}) => fetch(`${base}/api/waitlist/`,{method:"POST",headers:{"Content-Type":"application/json",Origin:base,...headers},body:typeof value === "string" ? value : JSON.stringify(value)});
assert.equal((await post({})).status,400);
assert.equal((await post("{")).status,400);
assert.equal((await post({}, {Origin:"https://unrelated.example"})).status,403);
assert.equal((await post({}, {"Content-Type":"text/plain"})).status,415);
assert.equal((await post({name:"a".repeat(17000)})).status,413);
assert.equal((await post({companyWebsite:"spam.example"})).status,200);
const login = await fetch(`${base}/api/admin/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:process.env.ADMIN_EMAIL,password:process.env.ADMIN_PASSWORD})});
assert.equal(login.status,200,"Existing admin sign-in should succeed");
const cookie = login.headers.get("set-cookie")?.split(";")[0];
assert.ok(cookie);
const dashboard = await fetch(`${base}/admin/waitlist/`,{headers:{Cookie:cookie}});
assert.equal(dashboard.status,200);
const dashboardHtml=await dashboard.text();
assert.ok(dashboardHtml.includes("Free website applications"));
assert.ok(!dashboardHtml.includes("application database is unavailable"));
const csv=await fetch(`${base}/admin/waitlist/export/`,{headers:{Cookie:cookie}});
assert.equal(csv.status,200);assert.ok(csv.headers.get("content-type").includes("text/csv"));
console.log("HTTP checks passed: public pages/assets, protected dashboard/export, existing admin login, input validation, origin rejection, body limit, and honeypot. No test application was submitted.");
