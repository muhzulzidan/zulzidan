# Paid Campaign Readiness

Last audited against the repository: 2026-08-08

## P0 — required before meaningful paid spend

| Status | Requirement | Acceptance test | Owner | Notes |
| --- | --- | --- | --- | --- |
| `APPROVED` | Homepage communicates the digital-team offer | Hero, plans, proof, FAQ, founder, and CTA render correctly on mobile and desktop | Muhammad | Production build passes |
| `APPROVED` | Starter Sprint price and boundaries are visible | `$500`, five days, one outcome, inclusions, and exclusions are consistent | Muhammad | Present in pricing and FAQ |
| `APPROVED` | Trust path exists | Visitor can reach About, Work, case study, and Refund Policy | Muhammad | Footer and founder section updated |
| `BACKLOG` | Add a genuine client testimonial near the Sprint or final CTA | Quote, attribution, and permission are documented | Muhammad | Do not invent performance claims |
| `BACKLOG` | Publish a privacy policy | Footer link works and policy covers analytics, ad tracking, forms, and contact data | Muhammad | Review for applicable jurisdictions |
| `BACKLOG` | Install Meta Pixel globally | PageView appears in Meta Events Manager without duplicate firing | Developer | Google Analytics exists; Meta Pixel does not |
| `BACKLOG` | Track website WhatsApp intent | A named event fires once when a user clicks a Starter Sprint WhatsApp CTA | Developer | Suggested event: `Contact` with campaign metadata |
| `BACKLOG` | Preserve UTM attribution | Ad UTMs appear in analytics and are attached to the WhatsApp handoff or stored before redirect | Developer | Test mobile and desktop |
| `BACKLOG` | Test WhatsApp response workflow | Greeting, five qualification questions, response owner, and response window are confirmed | Muhammad | Use the script in campaign setup |
| `BACKLOG` | Verify social proof permissions | Logos, screenshots, quotes, and client names used in ads have permission | Muhammad | Record evidence link in creative tracker |

## P1 — strongly recommended

| Status | Requirement | Acceptance test | Owner |
| --- | --- | --- | --- |
| `BACKLOG` | Create `/starter-sprint/` campaign page | Page repeats the ad promise, shows examples/proof, and has one primary CTA | Developer |
| `BACKLOG` | Add Meta Conversions API | Browser and server events are deduplicated and visible in Events Manager | Developer |
| `BACKLOG` | Add a dedicated thank-you or qualification state | Qualified website leads can be measured separately from CTA clicks | Developer |
| `BACKLOG` | Prepare three pinned social posts | Offer, founder, and case study are live before paid traffic begins | Content |
| `BACKLOG` | Check performance on target-market mobile connections | Core content and CTA remain usable without delayed layout shifts | Developer |

## P2 — optimization after first signal

- Retarget visitors and engaged video viewers only after enough audience data exists.
- Build a case study for the first successful Sprint with permission.
- Test a website lead form against WhatsApp conversations.
- Test individual market or industry landing-page variants.

## Go/no-go rule

Paid launch is `GO` only when every P0 row is `APPROVED`. A very small direct-to-WhatsApp validation test may run before Pixel work, but it must still have a privacy policy, verified claims, UTMs where possible, and a functioning response workflow.

