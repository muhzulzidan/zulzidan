import Image from "next/image";
import Link from "next/link";

import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import { getWork } from "@/lib/contentful";
import { createMetadata, SITE_URL } from "@/lib/site";

import styles from "./about.module.css";

const TASFRL_SLUG =
  "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl";
const founderPortrait = "/zulzidan/web/muhammad-zulzidan-founder-smiling.webp";

const approach = [
  {
    number: "01",
    title: "Understand the operation",
    copy: "Before choosing pages or technology, I map the service, the buyer's questions, the internal workflow, and the action the website must support.",
  },
  {
    number: "02",
    title: "Shape the decision journey",
    copy: "I turn that understanding into a clear message, useful page structure, and responsive experience that helps the right visitor take the next step.",
  },
  {
    number: "03",
    title: "Build for daily use",
    copy: "The finished system is designed for real content, practical ownership, and continued improvement after launch, not only for the launch-day presentation.",
  },
];

const principles = [
  {
    title: "Plain language before technical jargon",
    copy: "The business goal stays visible, while the technology remains a tool.",
  },
  {
    title: "Proof before promises",
    copy: "Case studies show the work delivered without inventing business results.",
  },
  {
    title: "Clear scope before development",
    copy: "Milestones, responsibilities, reviews, and support are documented early.",
  },
  {
    title: "Useful ownership after launch",
    copy: "Content and workflows should remain manageable when the project is live.",
  },
];

const title = "About Muhammad Zulzidan | Independent Web Specialist";
const description =
  "Meet Muhammad Zulzidan, an independent web specialist helping service businesses turn complex work into clear websites, useful systems, and stronger paths to enquiry.";

export const metadata = {
  ...createMetadata({
    title,
    description,
    path: "/about/",
    image: founderPortrait,
  }),
  title: { absolute: title },
};

export const revalidate = 3600;

export default async function AboutPage() {
  const tasfrl = await getWork(TASFRL_SLUG).catch(() => null);
  const tasfrlImage = tasfrl?.images?.[0];
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Zulzidan M",
    url: `${SITE_URL}/about/`,
    image: new URL(founderPortrait, SITE_URL).toString(),
    jobTitle: "Independent web specialist",
    sameAs: [
      "https://www.linkedin.com/in/muhzulzidan/",
      "https://www.instagram.com/muhzulzidan/",
    ],
    knowsAbout: [
      "Website strategy",
      "User experience design",
      "Front-end development",
      "Content management systems",
      "Search engine optimization",
    ],
  };

  return (
    <div className={styles.page}>
      <EditorialHeader />
      <main className={styles.main}>
        <section className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Independent web specialist · Indonesia
            </p>
            <h1 className={styles.heroTitle}>
              I build websites as{" "}
              <em>working business systems.</em>
            </h1>
            <p className={styles.heroIntro}>
              I&apos;m Muhammad Zulzidan. Since 2019, I&apos;ve helped service
              businesses and organizations turn complex work into clear
              websites, useful systems, and stronger paths to enquiry.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/works/">
                See how I work
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.textLink} href="/audit-website/">
                Get a free website audit
              </Link>
            </div>
          </div>

          <figure className={styles.portraitFigure}>
            <span className={styles.portraitAccent} aria-hidden="true" />
            <div className={styles.portraitFrame}>
              <Image
                src={founderPortrait}
                alt="Muhammad Zulzidan, independent web specialist"
                fill
                priority
                sizes="(min-width: 1024px) 25rem, (min-width: 768px) 38vw, calc(100vw - 2.5rem)"
              />
            </div>
            <figcaption className={styles.portraitCaption}>
              <strong>01</strong>
              <span>
                Strategy, UX, development, CMS, SEO foundations, and ongoing
                improvement with one directly accountable partner.
              </span>
            </figcaption>
          </figure>
        </section>

        <section className={styles.darkSection}>
          <div className={`${styles.shell} ${styles.statementGrid}`}>
            <div>
              <p className={styles.eyebrowPlain}>The point of the work</p>
              <h2 className={styles.displayTitle}>
                A website should make the business easier to understand and
                easier to run.
              </h2>
            </div>
            <p className={styles.statementCopy}>
              I look beyond layouts. I map what clients need to know, what your
              team needs to manage, and what must happen after someone clicks
              the button.
            </p>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.caseSection}`}>
          <div className={styles.sectionHeadingGrid}>
            <div>
              <p className={styles.kicker}>Flagship ongoing partnership</p>
              <h2 className={styles.displayTitle}>
                TASFRL is the clearest example of how I work.
              </h2>
            </div>
            <p className={styles.sectionIntro}>
              One public website connected to the operational systems behind
              service delivery, membership, publishing, and outreach.
            </p>
          </div>

          <article className={styles.caseStudy}>
            <div className={styles.caseImage}>
              {tasfrlImage?.url ? (
                <Image
                  src={tasfrlImage.url}
                  alt={
                    tasfrlImage.description ||
                    "TASFRL digital operating platform case study cover"
                  }
                  fill
                  sizes="(min-width: 1024px) 56vw, calc(100vw - 2.5rem)"
                />
              ) : (
                <div className={styles.caseImageFallback}>
                  <span>TASFRL</span>
                  <strong>Digital operating platform</strong>
                  <small>Land services · Members · Events · Outreach</small>
                </div>
              )}
            </div>

            <div className={styles.caseDetails}>
              <dl>
                <div>
                  <dt>The challenge</dt>
                  <dd>
                    TASFRL needed one dependable system for public education,
                    land-service requests, members, events, and ongoing
                    outreach.
                  </dd>
                </div>
                <div>
                  <dt>My contribution</dt>
                  <dd>
                    I design, build, and continue to support the platform across
                    product strategy, service intake, member workflows, email,
                    SEO, and campaign production.
                  </dd>
                </div>
                <div>
                  <dt>Live scope</dt>
                  <dd>
                    Eight service journeys, a four-step assessment, member
                    accounts, case and email workflows, events, publishing,
                    SEO, and social content.
                  </dd>
                </div>
              </dl>
              <Link
                className={styles.textLink}
                href={`/works/${TASFRL_SLUG}/`}
              >
                Read the TASFRL case study
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </section>

        <section className={styles.approachSection} aria-labelledby="approach-heading">
          <div className={`${styles.shell} ${styles.approachInner}`}>
            <div className={styles.approachHeading}>
              <p className={styles.kicker}>How I work</p>
              <h2 id="approach-heading" className={styles.displayTitle}>
                Start with the operation, not the technology.
              </h2>
            </div>

            <ol className={styles.approachList}>
              {approach.map((item) => (
                <li key={item.number}>
                  <span className={styles.itemNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.storySection}`}>
          <div>
            <p className={styles.kicker}>The background behind the work</p>
            <h2 className={styles.displayTitle}>
              A broad technical range. One accountable partner.
            </h2>
            <div className={styles.storyCopy}>
              <p>
                My work began in front-end development in 2019 and expanded
                into full-stack systems, content platforms, SEO foundations,
                and ongoing digital operations.
              </p>
              <p>
                International freelance delivery taught me to make scope and
                communication visible. Working as a full-stack developer at
                Institut Indonesia strengthened the systems side. Today, I
                combine both around the needs of each business.
              </p>
            </div>
          </div>

          <div className={styles.principles}>
            <p className={styles.kicker}>Working principles</p>
            <dl>
              {principles.map((principle, index) => (
                <div key={principle.title}>
                  <dt>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{principle.title}</strong>
                  </dt>
                  <dd>{principle.copy}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={`${styles.shell} ${styles.finalCtaGrid}`}>
            <div>
              <p className={styles.eyebrowPlain}>A practical first step</p>
              <h2 className={styles.displayTitle}>
                Let&apos;s find the first problem worth fixing.
              </h2>
              <p>
                Send your URL for a free five-point review of clarity,
                credibility, mobile experience, speed basics, and the most
                useful next improvement.
              </p>
            </div>
            <div className={styles.finalAction}>
              <Link className={styles.darkButton} href="/audit-website/">
                Request my free audit
                <span aria-hidden="true">↗</span>
              </Link>
              <p>No obligation. No hard sell.</p>
            </div>
          </div>
        </section>
      </main>
      <EditorialFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </div>
  );
}
