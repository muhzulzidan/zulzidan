# Measurement Plan

## Funnel

`Impression → video engagement/click → WhatsApp start → qualified conversation → scope call/proposal → paid Sprint → monthly-plan opportunity`

## Required events

| Event | Definition | Source | Priority |
| --- | --- | --- | --- |
| `PageView` | Campaign page or homepage loaded | Meta Pixel + GA | P0 for website campaigns |
| `ViewContent` | Starter Sprint section/page meaningfully viewed | Meta Pixel | P1 |
| `Contact` | User clicks a Starter Sprint WhatsApp CTA | Meta Pixel + GA | P0 |
| `QualifiedLead` | Prospect confirms real need, timing, authority, and viable budget | CRM/manual import/CAPI | P1 |
| `Purchase` | Starter Sprint payment received | CRM/manual import/CAPI | P1 |

Event names must match the actual implementation and Meta configuration. Deduplicate browser and server events when Conversions API is added.

## UTM convention

Use lowercase values and never reuse `utm_content` for materially different creative.

```text
utm_source=meta
utm_medium=paid_social
utm_campaign=starter_sprint_001
utm_content=<asset-code>_<hook>_<version>
utm_term=<audience-code>
```

Example:

```text
/?utm_source=meta&utm_medium=paid_social&utm_campaign=starter_sprint_001&utm_content=ss-v01_freelancer_v01&utm_term=au_ops
```

## Scorecard metrics

### Commercial

- Paid Sprints
- Revenue from paid Sprints
- Cost per paid Sprint
- Qualified conversations
- Cost per qualified conversation
- Qualified-conversation-to-paid-Sprint rate

### Diagnostic

- Amount spent
- Impressions and reach
- Frequency
- Three-second video plays
- Hook/hold metric available in the account
- Link or messaging clicks
- Conversations started
- Cost per conversation
- Landing-page views when applicable

Do not declare a winner using CTR or video views alone.

## Weekly decision rules

- **Keep:** creative produces qualified conversations at an economically viable cost.
- **Iterate:** hook attracts attention but conversation quality or conversion is weak; revise promise, proof, or qualification.
- **Pause:** spend is accumulating without meaningful downstream signal, destination is broken, or leads consistently misunderstand the offer.
- **Scale carefully:** paid Sprints are attributed, delivery capacity exists, and follow-up remains timely.

Record every decision in the ad test log and every strategic change in `DECISIONS.md`.

## Attribution notes

- Ask every lead how they found Zulzidan.
- Preserve original UTMs in the lead record.
- Record payment date and originating ad where known.
- Treat Meta-reported and internal attribution as two views; reconcile differences rather than silently replacing one.
- Do not put names, phone numbers, email addresses, or private chat content in Git-tracked CSV files.

