"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import styles from "./start.module.css";

const initialData = {
  name: "",
  email: "",
  organization: "",
  website: "",
  plan: "not-sure",
  priority: "",
  startWindow: "within-a-month",
};

const planLabels = {
  "not-sure": "Not sure yet—recommend one",
  "starter-sprint": "Starter Sprint — $500 / 5 days",
  "growth-team": "Growth Team — $1,000 / month",
  "digital-department": "Digital Department — $2,000 / month",
};

export default function StartForm({ bookingEnabled, initialPlan, whatsappLink }) {
  const [formData, setFormData] = useState({
    ...initialData,
    plan: initialPlan,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/project-inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: `/start/?plan=${formData.plan}`,
        }),
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(body.message || "Your request couldn’t be submitted. Please try again.");
        return;
      }

      setResult(body);
    } catch {
      setError("We couldn’t reach the enquiry service. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    const reference = `ZD-${String(result.id).padStart(4, "0")}`;

    return (
      <div className={styles.success} role="status" aria-live="polite">
        <CheckCircle2 aria-hidden="true" size={34} strokeWidth={1.7} />
        <p className={styles.successEyebrow}>Request received · {reference}</p>
        <h3>Your context is ready for review.</h3>
        {result.bookingUrl ? (
          <>
            <p>
              The next step is a focused 15-minute call. Choose the time that
              works best for you.
            </p>
            <a className={styles.submitButton} href={result.bookingUrl} rel="noreferrer" target="_blank">
              Book my fit call <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </>
        ) : (
          <p>
            Muhammad will review this and email you a private booking link
            within one business day. Your plan selection was <strong>{planLabels[formData.plan]}</strong>.
          </p>
        )}
        <div className={styles.successAlternative}>
          <span>Need to add something urgent?</span>
          <a href={whatsappLink} rel="noreferrer" target="_blank">
            Send a quick WhatsApp message
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={loading}>
      <div className={styles.twoColumns}>
        <label>
          <span>Full name</span>
          <input
            autoComplete="name"
            disabled={loading}
            name="name"
            onChange={handleChange}
            required
            type="text"
            value={formData.name}
          />
        </label>
        <label>
          <span>Work email</span>
          <input
            autoComplete="email"
            disabled={loading}
            name="email"
            onChange={handleChange}
            placeholder="you@company.com"
            required
            type="email"
            value={formData.email}
          />
        </label>
      </div>

      <div className={styles.twoColumns}>
        <label>
          <span>Organization</span>
          <input
            autoComplete="organization"
            disabled={loading}
            name="organization"
            onChange={handleChange}
            required
            type="text"
            value={formData.organization}
          />
        </label>
        <label>
          <span>Website <small>Optional</small></span>
          <input
            autoComplete="url"
            disabled={loading}
            inputMode="url"
            name="website"
            onChange={handleChange}
            placeholder="https://"
            type="url"
            value={formData.website}
          />
        </label>
      </div>

      <label>
        <span>Which level of support are you considering?</span>
        <select disabled={loading} name="plan" onChange={handleChange} value={formData.plan}>
          {Object.entries(planLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>

      <label>
        <span>What is the first priority you want to move forward?</span>
        <textarea
          disabled={loading}
          maxLength={3000}
          name="priority"
          onChange={handleChange}
          placeholder="For example: rebuild our campaign landing page before the October launch."
          required
          rows={4}
          value={formData.priority}
        />
      </label>

      <label>
        <span>When would you like to begin?</span>
        <select
          disabled={loading}
          name="startWindow"
          onChange={handleChange}
          value={formData.startWindow}
        >
          <option value="as-soon-as-possible">As soon as possible</option>
          <option value="within-a-month">Within the next month</option>
          <option value="one-to-three-months">In 1–3 months</option>
          <option value="exploring">I’m exploring for later</option>
        </select>
      </label>

      {error ? <p className={styles.error} role="alert">{error}</p> : null}

      <button className={styles.submitButton} disabled={loading} type="submit">
        {loading
          ? "Submitting…"
          : bookingEnabled
            ? "Continue to scheduling"
            : "Request my 15-minute fit call"}
        {!loading ? <ArrowRight aria-hidden="true" size={18} /> : null}
      </button>
      <p className={styles.privacyNote}>
        Your details are used only to review this enquiry and arrange the next step.
      </p>
    </form>
  );
}
