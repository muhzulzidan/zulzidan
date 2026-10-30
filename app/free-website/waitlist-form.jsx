"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BUSINESS_TYPES } from "@/lib/waitlist-validation.mjs";
import styles from "./waitlist.module.css";

export default function WaitlistForm({ enabled }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [received, setReceived] = useState(false);
  const successRef = useRef(null);

  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setError("");
    const form = new FormData(event.currentTarget);
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map(key => [key, query.get(key) || ""]));
    let referrer = "";
    try { const url = new URL(document.referrer); referrer = `${url.origin}${url.pathname}`; } catch {}
    try {
      const response = await fetch("/api/waitlist/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(form), consent: form.get("consent") === "on", attribution, source: window.location.pathname, referrer }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Your application couldn't be saved. Please try again.");
      setReceived(true);
      requestAnimationFrame(() => successRef.current?.focus());
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { form_name: "free_website_waitlist", value: 0, currency: "USD" });
    } catch (err) { setError(err.message || "Please check your connection and try again."); }
    finally { setBusy(false); }
  }

  if (!enabled) {
    const emailBody = "Your name:\nBusiness name:\nCountry:\nWebsite or social profile (optional):\n\nWhat do you offer, and what would you like your website to do?\n\nWho introduced you, or where did you find this? (optional):\n\nI understand this is an application, selection is not guaranteed, and domain, hosting, and paid tools are separate. I agree to be contacted about this application.";
    return <div className={styles.success}><p className={styles.eyebrow}>Make an introduction</p><h3>Apply by email.</h3><p>Applications are currently handled by email. Tell me your name, business, country, and what you’d like your website to do. Include your current website or social profile if you have one.</p><a className={styles.button} href={`mailto:mail@zulzidan.com?subject=${encodeURIComponent("Free website application")}&body=${encodeURIComponent(emailBody)}`}>Email your application <ArrowUpRight size={20} aria-hidden="true" /></a><p className={styles.formNote}>Your email app will open. Review your message and send it to apply. <Link href="/privacy/">Privacy details</Link>.</p></div>;
  }

  if (received) return <div className={styles.success} tabIndex={-1} ref={successRef} role="status"><CheckCircle2 size={36} strokeWidth={1.5} aria-hidden="true" /><p className={styles.eyebrow}>Application received</p><h3>You’re on the list.</h3><p>Thanks for introducing your business. I’ll review your application and contact you by email if there’s a fit and capacity for your project.</p><p>Joining doesn’t guarantee selection or a launch date. There’s nothing to pay and no further step required right now.</p><a className={styles.textLink} href="mailto:mail@zulzidan.com">Need to add something? Email me <ArrowUpRight size={16} aria-hidden="true" /></a></div>;

  return <form className={styles.form} onSubmit={submit} aria-busy={busy} aria-label="Free website application">
    <fieldset disabled={busy}>
      <legend className={styles.formTitle}>Your business. Your next step.</legend>
      <div className={styles.fieldRow}><label>Your name<input name="name" autoComplete="name" maxLength={120} required /></label><label>Email address<input name="email" autoComplete="email" type="email" maxLength={254} required /></label></div>
      <label>Business name<input name="business" autoComplete="organization" maxLength={160} required /></label>
      <div className={styles.fieldRow}><label>Type of business<select name="businessType" required defaultValue=""><option value="" disabled>Select your service</option>{BUSINESS_TYPES.map(type => <option key={type}>{type}</option>)}</select></label><label>Country<input name="country" autoComplete="country-name" placeholder="e.g. United States" maxLength={100} required /></label></div>
      <label>Website or social profile <span className={styles.optional}>Optional</span><input name="website" inputMode="url" autoComplete="url" placeholder="yourbusiness.com or a profile link" maxLength={2048} /></label>
      <label>What would you like your website to do?<textarea name="goal" rows={4} minLength={20} maxLength={2000} placeholder="What do you offer, who is it for, and what should visitors do next?" required /></label>
      <label>Who introduced you, or where did you find this? <span className={styles.optional}>Optional</span><input name="referral" maxLength={300} placeholder="A name, a post, a webinar…" /></label>
      <div className={styles.honeypot} aria-hidden="true"><label>Leave this field empty<input name="companyWebsite" autoComplete="off" tabIndex={-1} /></label></div>
      <label className={styles.consent}><input name="consent" type="checkbox" required /><span>I understand this is an application, and agree to be contacted about it. Domain and any hosting or paid tools are separate. <Link href="/privacy/">Privacy details</Link>.</span></label>
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.button} type="submit" disabled={busy}>{busy ? "Saving your application…" : "Join the free website waitlist"}{!busy && <ArrowUpRight size={20} aria-hidden="true" />}</button>
      <p className={styles.formNote}>No payment details. No required subscription. No newsletter signup.</p>
    </fieldset>
  </form>;
}
