"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/admin-auth";
import { updateApplicationReview } from "@/lib/waitlist-store.mjs";
import { WAITLIST_STATUSES } from "@/lib/waitlist-validation.mjs";

export async function reviewApplication(previousState, form) {
  const session = await requireAdminSession();
  const id = String(form.get("id") || "");
  const version = String(form.get("version") || "");
  const status = String(form.get("status") || "");
  const notes = String(form.get("notes") || "").trim();
  const outcome = String(form.get("referralOutcome") || "").trim();
  if (!/^[a-f0-9-]{36}$/.test(id) || !version || version.length > 60 || !WAITLIST_STATUSES.includes(status) || notes.length > 10000 || outcome.length > 5000) return { error: "Check the status and note lengths before saving." };
  try {
    const saved = await updateApplicationReview({ id, version, status, notes, referralOutcome: outcome, actor: session.email });
    if (!saved) return { error: "This application changed in another session. Copy your notes, refresh, and review the latest version before saving." };
    revalidatePath("/admin/waitlist/");
    return { saved: true };
  } catch { return { error: "Unable to save your review. Your notes are still here; please try again." }; }
}
