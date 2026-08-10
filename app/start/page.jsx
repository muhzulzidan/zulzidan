import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock3, ShieldCheck } from "lucide-react";

import { createMetadata } from "@/lib/site";

import StartForm from "./start-form";
import styles from "./start.module.css";

export const metadata = createMetadata({
  title: "Check if We’re a Fit",
  description:
    "Share your first digital priority and request a focused 15-minute fit call with Zulzidan.",
  path: "/start/",
});

const validPlans = new Set([
  "not-sure",
  "starter-sprint",
  "growth-team",
  "digital-department",
]);

export default async function StartPage({ searchParams }) {
  const params = await searchParams;
  const requestedPlan = typeof params?.plan === "string" ? params.plan : "not-sure";
  const initialPlan = validPlans.has(requestedPlan) ? requestedPlan : "not-sure";
  const whatsappLink = `https://wa.me/6281354789375?text=${encodeURIComponent(
    "Hi Muhammad, I have a quick question about working with Zulzidan.",
  )}`;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <Link className={styles.backLink} href="/digital-team/">
            <ArrowLeft aria-hidden="true" size={17} />
            Back to Digital Team
          </Link>
          <span className={styles.wordmark}>ZULZIDAN</span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Start with clarity</p>
            <h1>Let’s see if we’re the right fit.</h1>
            <p className={styles.lead}>
              Tell me what your organization needs to move forward. I’ll review
              the context before we speak, so the first conversation can be
              useful from minute one.
            </p>

            <ol className={styles.steps} aria-label="What happens next">
              <li>
                <span>01</span>
                <div>
                  <strong>Share the priority</strong>
                  <p>A short form—usually about 60 seconds.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Choose a call time</strong>
                  <p>Book a focused 15-minute fit conversation.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Get a clear recommendation</strong>
                  <p>If there’s a fit, you’ll receive scope and next steps in writing.</p>
                </div>
              </li>
            </ol>

            <div className={styles.trustLine}>
              <ShieldCheck aria-hidden="true" size={20} />
              <p>
                <strong>No hard sell.</strong> If another route makes more sense,
                I’ll tell you.
              </p>
            </div>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formHeading}>
              <div>
                <p>Fit-call request</p>
                <h2>What should we move forward?</h2>
              </div>
              <span><Clock3 aria-hidden="true" size={15} /> 60 sec</span>
            </div>
            <StartForm
              bookingEnabled={Boolean(process.env.NEXT_PUBLIC_BOOKING_URL)}
              initialPlan={initialPlan}
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </section>

      <section className={styles.expectations}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Before you submit</p>
          <div className={styles.expectationGrid}>
            <article>
              <Check aria-hidden="true" size={18} />
              <h2>Direct conversation</h2>
              <p>You’ll speak with Muhammad, the founder and digital lead.</p>
            </article>
            <article>
              <Check aria-hidden="true" size={18} />
              <h2>Transparent pricing</h2>
              <p>Plans begin at $500 USD. Budget fit is discussed upfront.</p>
            </article>
            <article>
              <Check aria-hidden="true" size={18} />
              <h2>Written next steps</h2>
              <p>Any recommended scope, timing, and price are confirmed in writing.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <p>Prefer a quick question first?</p>
          <a href={whatsappLink} rel="noreferrer" target="_blank">
            Ask on WhatsApp <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </footer>
    </main>
  );
}
