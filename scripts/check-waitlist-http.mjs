import assert from "node:assert/strict";
const base = process.env.WAITLIST_CHECK_URL || "http://127.0.0.1:3002";
const get = path => fetch(`${base}${path}`,{redirect:"manual"});
for (const path of ["/","/free-website/","/works/","/privacy/","/social/zulzidan-free-website-v1.png","/social/zulzidan-portfolio-v1.png","/work/tasfrl.webp","/work/mooi-filters.webp","/work/ayomsatrio.png","/demos/demo-kala-senja.jpg","/wordmark.svg"]) assert.equal((await get(path)).status,200,path);
const html = await (await get("/")).text();
for(const expected of ["Good work deserves a", "TASFRL", "Texas, USA", "Ayom Satrio", "MOOI Filters", "Concept demo", "See selected work", "Request a free starter website", 'id="services"', 'id="selected-work"', "/social/zulzidan-portfolio-v1.png"]) {
  assert.ok(html.includes(expected),`Homepage should contain ${expected}`);
}
assert.ok(!html.includes("Built for free."), "Free-program hero belongs on its dedicated route");
const programHtml = await (await get("/free-website/")).text();
for (const expected of ["Built for free.", "Request a free starter website", 'id="apply"']) assert.ok(programHtml.includes(expected));
const worksHtml = await (await get("/works/")).text();
assert.ok(worksHtml.includes('href="/#services"'), "Services navigation should target the restored homepage section");
assert.ok(worksHtml.includes("Personal project"));
for (const [slug, translated, original] of [
  ["abm-logistik-makassar-website-logistik", "When I began working with ABM Logistik Makassar", "Ketika saya bekerja"],
  ["islamtshirt-islamic-fashion-and-dakwah", "islamtshirt brings fashion and Islamic outreach together", "islamtshirt adalah"],
  ["institut-indonesia", "Institut Indonesia helps people develop skills", "Institut Indonesia berdedikasi"],
  ["muhzulzidan-com-personal-blog", "muhzulzidan.com is a personal blog", "muhzulzidan.com adalah"],
]) {
  const response = await get(`/works/${slug}/`);
  assert.equal(response.status, 200);
  const detailHtml = await response.text();
  for (const pageHtml of [worksHtml, detailHtml]) {
    assert.ok(pageHtml.includes(translated), `${slug} should show English copy`);
    assert.ok(!pageHtml.includes(original), `${slug} should not show the old Indonesian copy`);
  }
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
