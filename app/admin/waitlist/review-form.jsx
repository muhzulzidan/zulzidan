"use client";

import { useActionState } from "react";
import { reviewApplication } from "./actions";
import { WAITLIST_STATUSES } from "@/lib/waitlist-validation.mjs";

export default function ReviewForm({ application }) {
  const [state, action, pending] = useActionState(reviewApplication, {});
  const fieldClass = "mt-2 w-full border border-[#b9ad9d] bg-[#fffdf9] p-3 text-sm";
  return <form action={action} className="grid gap-4 border-t border-[#cfc5b7] pt-5">
    <input name="id" type="hidden" value={application.id} />
    <input name="version" type="hidden" value={application.version} />
    <label className="text-sm font-semibold">Application status<select name="status" className={fieldClass} defaultValue={application.status}>{WAITLIST_STATUSES.map(status => <option value={status} key={status}>{status.charAt(0).toUpperCase()+status.slice(1)}</option>)}</select></label>
    <label className="text-sm font-semibold">Review / next action<textarea name="notes" className={fieldClass} defaultValue={application.notes} maxLength={10000} rows={3} /></label>
    <label className="text-sm font-semibold">Referral outcome<textarea name="referralOutcome" className={fieldClass} defaultValue={application.referral_outcome} maxLength={5000} rows={3} placeholder="Record introductions, the referred client or project, paid outcomes, and evidence. Leave blank until something actually happens." /></label>
    {state.error && <p role="alert" className="text-sm text-[#9e3925]">{state.error}</p>}
    {state.saved && <p role="status" className="text-sm text-[#345c3e]">Review saved. No message was sent.</p>}
    <button type="submit" disabled={pending} className="justify-self-start bg-[#9e3925] px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">{pending ? "Saving…" : "Save review"}</button>
  </form>;
}
