# Free website application funnel

The homepage and `/free-website/` introduce a free one-page website program for international service businesses. Existing portfolio, blog, paid services, and enquiry routes remain available. The public offer has no development fee or required subscription; domain, hosting, and optional paid tools are separate, agreed costs. Selection and delivery dates are not guaranteed.

## Application storage and review

Configure the server-only `LEADS_DATABASE_URL` with the shared Zulzidan Leads Postgres connection, then run:

```powershell
npm run db:migrate:waitlist
```

This adds `website_waitlist` and `website_waitlist_rate_limits` to that database. It does not migrate or synchronize the separate local SQLite snapshot. The existing website `DATABASE_URL` remains in use for the older audit/enquiry features.

An application creates a pro bono collaboration assigned to the active `zulzidan` owner in the existing lead tracker, plus an inbound activity note. An applicant matching an existing company or email is linked without overwriting that lead, changing its stage, restoring it, or recording an outgoing message. Repeated applications by email do not create additional applications, leads, or events. The intake uses the tracker transaction lock and saves the application, any new lead, and activity together.

Review applications at `/admin/waitlist/` using the existing website admin login. The dashboard supports search, status filters, private review notes, referral outcome notes, and an authenticated CSV export. Admin times use Asia/Makassar (WITA). Status updates use version checks to reject conflicting edits and add an activity note to the linked tracker record. The application's review status is separate from the tracker's project stage.

Application statuses: New → Reviewing → Waitlisted or Selected → Building → Delivered. Declined and Withdrawn are also available. These are manual review controls; saving does not email anyone. Record an introduction or paid result in Referral outcome only when it actually happens. Include the client/project, amount and currency if known, and supporting evidence. Do not treat a promised introduction as a paid project.

## Acquisition and measurement

Use the homepage as the common destination, or `/free-website/` as a dedicated campaign URL. Example:

```text
https://zulzidan.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=free_website
https://zulzidan.com/free-website/?utm_source=webinar&utm_medium=event&utm_campaign=free_website
```

The form stores the five standard UTM fields from its current page, referring origin/path, the optional human-entered referral, and the application page. External query parameters and fragments are removed from the referring page. Existing Google Analytics receives `generate_lead` with `form_name=free_website_waitlist` after a successful form response; name, email, and answers are not sent with that event. Repeated manual submissions can still produce repeated analytics events, so the private application table is the source for unique applicant counts. The confirmation is on-page; there is no automated confirmation email, newsletter enrolment, nurture sequence, advertising launch, or webinar registration.

## Protection and data handling

Public intake validates required fields, business type, email and website format, explicit contact consent, and length limits. It rejects cross-origin requests and large/non-JSON bodies, uses a honeypot, and limits a connection to eight valid submission attempts per hour using a keyed IP hash in Postgres. Raw IP addresses are not stored in the waitlist. This limits automated abuse; it is not email-ownership verification. Expired rate records are removed during successful intake. The public API never returns existing applicant details.

Applications and exports require the existing admin session. CSV cells are quoted and spreadsheet formula prefixes escaped. Review notes and referral outcomes remain private. `/privacy/` explains the collection and withdrawal/deletion route. Deletion and contact follow-up are manual; no automatic deletion or outgoing communication is implemented.

## Proof and assets

Zulzidan supplied Ayom Satrio and Iksan Bangsawan as examples of free work leading to projects through their clients. The landing page attributes that experience to Zulzidan without inventing referral counts, revenue, testimonials, or endorsements. Their public URLs were checked on 31 October 2026. The Ayom image is the existing portfolio asset from `tmp/contentful-work-thumbnails/ayomsatrio-editorial-cover-v2.png`, copied into `public/work/`; it depicts selected prior work rather than claiming to be a current screenshot. The existing SVG wordmark is retained in `public/wordmark.svg`.

Generate the matching social card with `node scripts/generate-waitlist-card.mjs`.

## Verification and publication

```powershell
node --env-file=.env.local scripts/check-waitlist.mjs
npm run build
npm run start -- --hostname 127.0.0.1 --port 3002
# In another terminal:
node --env-file=.env.local scripts/check-waitlist-http.mjs
```

The database check runs the actual persistence functions against a disposable schema, verifies that schema before creating fixtures, and removes it afterward. It checks validation, new records, concurrent retries, changed identities, existing-record preservation, transaction rollback, and durable rate limits. HTTP checks do not submit a test application to production.

For automatic application capture, configure `LEADS_DATABASE_URL` in the existing Vercel project's production environment. Keep it server-only and preserve the existing `ADMIN_*` settings. Deploy to the existing `zulzidan` project in `muhzulzidans-projects`; do not create a replacement project or repoint the domain to another account. Verify public pages, authenticated review/export, and the submission path on the resulting deployment. If browser QA is unavailable, report that limit separately from build/HTTP checks.

If `LEADS_DATABASE_URL` or `ADMIN_SESSION_SECRET` is missing at build time, the public application section offers a prefilled email application instead of a form that cannot save. The visitor reviews and sends that message in their own email app. Email applications are not automatically saved to the dashboard or tracker. Configure the production variables and redeploy to enable automatic capture. This allows a GitHub-triggered deployment to remain usable before Vercel environment setup is completed.

Verified locally on 31 October 2026: production build and TypeScript checks; isolated persistence, review/referral, version-conflict, rollback and rate-limit checks; public-page and asset HTTP checks; authenticated dashboard/export; invalid JSON, origin, content-type, length and honeypot handling. The shared database retained 1,112 leads, with zero real/test applications and no remaining temporary test schemas after checks. Native browser access was unavailable, so desktop/mobile visual and interactive browser QA remain unverified. Publication was not performed because the active Vercel CLI account `iyayusufspantry` could not access `muhzulzidans-projects`.
