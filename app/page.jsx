import Image from "next/image";
import Link from "next/link";

import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import founderPortrait from "@/images/generated/muhammad-zulzidan-founder-portrait-v2.png";
import { getWorks } from "@/lib/contentful";
import { createMetadata } from "@/lib/site";

import styles from "./home.module.css";

export const metadata = createMetadata({
  title: "Conversion-focused websites for service businesses",
  description:
    "I help service businesses turn unclear or outdated websites into credible sales assets with clearer messaging, stronger mobile UX, and an easier path to enquiry.",
  path: "/",
});

export const revalidate = 3600;

const featuredCaseStudies = [
  {
    slug: "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl",
    client: "TASFRL",
    label: "Flagship partnership · United States",
    problem:
      "TASFRL needed one dependable system for public education, land-service requests, members, events, and ongoing outreach.",
    contribution:
      "I design, build, and continue to support the platform across product strategy, service intake, member workflows, email, SEO, and campaign production.",
    evidence:
      "8 service journeys, 4-step assessment, member accounts, case and email workflows, events, publishing, SEO, and social content",
  },
  {
    slug: "abm-logistik-makassar-website-logistik",
    client: "ABM Logistik",
    label: "Logistics · Indonesia",
    problem:
      "ABM Logistik had no official website to explain its services or support trust during sales conversations.",
    contribution:
      "Its first professional web presence, designed around clear services, direct enquiries, and editable content.",
    evidence: "Next.js build, Contentful CMS, responsive service journey",
  },
  {
    slug: "mooi-filters-premium-and-affordable-shower-filter-in-bali",
    client: "MOOI Filters",
    label: "Consumer wellness · Bali",
    problem:
      "MOOI needed to turn a founder story and unfamiliar product into a buying journey customers could understand.",
    contribution:
      "A mobile-first product story with clearer benefits, proof, FAQs, and direct paths to purchase and support.",
    evidence: "Product education, testimonials, FAQ, and WhatsApp support",
  },
];

const services = [
  {
    number: "01",
    title: "Credibility website",
    fit: "For an established business with no website, or one that no longer reflects its reputation.",
    outcome:
      "A focused, professional web presence that makes the business easier to understand and trust.",
  },
  {
    number: "02",
    title: "Lead-generation website",
    fit: "For a service business that gets attention but too few relevant enquiries.",
    outcome:
      "A clearer journey from first visit to quote, consultation, booking, or contact.",
  },
  {
    number: "03",
    title: "Website redesign",
    fit: "For an existing website that feels slow, dated, confusing, or difficult to maintain.",
    outcome:
      "Sharper messaging, stronger mobile UX, better performance foundations, and an easier content workflow.",
  },
];

const testimonials = [
  {
    quote:
      "The seller did amazing work. Well organized, respects coding principles; everything is how it should be.",
    person: "alexblattner",
    detail: "Repeat client · United States · Fiverr",
  },
  {
    quote:
      "The seller has submitted great work with high quality, speed and care. Thank you!",
    person: "alexlee996",
    detail: "Client · Saudi Arabia · Fiverr",
  },
  {
    quote:
      "Highly recommended. The price matched the quality, and the work was completed quickly.",
    person: "valvrave beginner",
    detail: "Local client · Google review · translated",
  },
];

const process = [
  {
    number: "01",
    title: "Audit and discovery",
    copy: "We identify the business goal, the buyer journey, and the biggest credibility or conversion gaps.",
  },
  {
    number: "02",
    title: "Scope and message",
    copy: "You receive a clear scope, timeline, content plan, milestones, and responsibilities before the build begins.",
  },
  {
    number: "03",
    title: "Design and build",
    copy: "The website is designed and developed around the agreed message, with structured review rounds along the way.",
  },
  {
    number: "04",
    title: "Launch and support",
    copy: "After final checks and handover, the project includes the agreed bug-fixing period and optional ongoing support.",
  },
];

const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "A focused landing page usually takes 5–7 working days once content is ready. A multi-page company website commonly takes 10–14 working days. Larger redesigns are scoped separately.",
  },
  {
    question: "Can you help with the website message and structure?",
    answer:
      "Yes. The process includes refining the page hierarchy and core service message. Deeper copywriting or content production can be added to the scope when needed.",
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Yes. I can audit the current experience, preserve what is working, and recommend whether targeted improvements or a complete rebuild offers better value.",
  },
  {
    question: "Who owns the finished website?",
    answer:
      "Ownership and access are documented in the project scope. After final payment, you receive the agreed source files, account access, and handover materials.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Packages include an agreed bug-fixing period, typically one to three months. Maintenance, analytics review, SEO work, and future improvements can continue as an optional service.",
  },
  {
    question: "Can we work across different time zones?",
    answer:
      "Yes. International work is handled with written scope, practical progress updates, and scheduled review points so the project does not depend on constant live meetings.",
  },
];

const reviewLinks = {
  fiverr: "https://www.fiverr.com/muhzulzidan?public_mode=true",
  google:
    "https://www.google.com/search?q=jasa+pembuatan+website+bone#mpd=~10332837043445202168/customers/reviews",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zulzidan",
  url: "https://zulzidan.com",
  founder: {
    "@type": "Person",
    name: "Muhammad Zulzidan M",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Business website design and development",
    "Lead generation websites",
    "Website redesign and optimization",
    "Fractional digital team",
  ],
  sameAs: [
    "https://www.linkedin.com/in/muhzulzidan/",
    "https://www.instagram.com/muhzulzidan/",
    "https://www.youtube.com/@muhzulzidan",
  ],
};

function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      ↗
    </span>
  );
}

function mapCaseStudies(works) {
  return featuredCaseStudies.map((caseStudy) => {
    const work = works.find(({ slug }) => slug === caseStudy.slug);

    return {
      ...caseStudy,
      client: work?.client || caseStudy.client,
      image: work?.images?.[0] || null,
    };
  });
}

export default async function HomePage() {
  const works = await getWorks().catch(() => []);
  const caseStudies = mapCaseStudies(works);

  return (
    <div className={styles.shell}>
      <EditorialHeader />
      <main className={styles.main}>
        <section className={[styles.container, styles.hero].join(" ")}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Websites for service businesses
            </p>
            <h1 className={styles.heroTitle}>
              Turn attention into trust.{" "}
              <em>and trust into enquiries.</em>
            </h1>
            <p className={styles.heroLead}>
              I help contractors, logistics companies, and service businesses
              turn unclear or outdated websites into credible sales assets that
              make the next step obvious.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/audit-website/">
                Get a free 5-point audit
                <Arrow />
              </Link>
              <Link className={styles.textLink} href="/works/">
                View case studies
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <p className={styles.asideStatement}>
              For businesses whose reputation has outgrown their website.
            </p>
            <p className={styles.asideDetail}>
              Independent web specialist based in Indonesia and working across
              time zones.
            </p>
          </aside>
        </section>

        <section className={styles.proofBar} aria-labelledby="proof-heading">
          <div className={[styles.container, styles.proofGrid].join(" ")}>
            <div>
              <p id="proof-heading" className={styles.sectionLabel}>
                Selected collaborations
              </p>
              <p className={styles.proofDetail}>Since 2019 · 9 five-star reviews</p>
            </div>
            <ul className={styles.clientList}>
              {["TASFRL", "ABM Logistik", "MOOI Filters", "Asia Baru", "BangunanKami"].map(
                (client) => (
                  <li key={client}>{client}</li>
                ),
              )}
            </ul>
          </div>
        </section>

        <section className={[styles.container, styles.problemSection].join(" ")}>
          <p className={styles.sectionLabel}>The real website problem</p>
          <div className={styles.problemBody}>
            <h2 className={styles.displayHeading}>
              Looking professional is useful. Making a buyer feel certain is
              what moves the conversation forward.
            </h2>
            <div className={styles.principles}>
              {[
                [
                  "Credibility",
                  "Show that the business is active, capable, and safe to contact.",
                ],
                [
                  "Clarity",
                  "Help visitors understand the offer and its value without decoding jargon.",
                ],
                [
                  "Action",
                  "Give qualified prospects a confident, low-friction next step.",
                ],
              ].map(([title, copy], index) => (
                <article key={title}>
                  <p className={styles.itemNumber}>0{index + 1}</p>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className={styles.services} aria-labelledby="services-heading">
          <div className={[styles.container, styles.sectionPadding].join(" ")}>
            <div className={styles.sectionIntro}>
              <p className={[styles.sectionLabel, styles.labelLight].join(" ")}>
                Ways I can help
              </p>
              <h2 id="services-heading" className={styles.displayHeading}>
                Start with the business outcome. Choose the technology second.
              </h2>
            </div>

            <div className={styles.serviceList}>
              {services.map((service) => (
                <article className={styles.serviceRow} key={service.number}>
                  <p className={styles.serviceNumber}>{service.number}</p>
                  <h3>{service.title}</h3>
                  <p className={styles.serviceFit}>{service.fit}</p>
                  <p className={styles.serviceOutcome}>
                    <span>Expected outcome</span>
                    {service.outcome}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.serviceLinks}>
              <Link className={styles.lightTextLink} href="/audit-website/">
                Discuss the right starting point
              </Link>
              <Link href="/digital-team/">
                Need ongoing support? Meet your dedicated digital team →
              </Link>
              <Link href="/jasa-pembuatan-website/">
                Bahasa Indonesia and IDR pricing →
              </Link>
            </div>
          </div>
        </section>

        <section
          id="work"
          className={[styles.container, styles.sectionPadding].join(" ")}
          aria-labelledby="work-heading"
        >
          <div className={styles.workIntro}>
            <p className={styles.sectionLabel}>Selected case studies</p>
            <h2 id="work-heading" className={styles.displayHeading}>
              Evidence before adjectives.
            </h2>
            <Link className={styles.textLink} href="/works/">
              View all work
            </Link>
          </div>

          <div className={styles.caseStudyList}>
            {caseStudies.map((caseStudy, index) => (
              <article
                className={[
                  styles.caseStudy,
                  index % 2 === 1 ? styles.caseStudyReverse : "",
                ].filter(Boolean).join(" ")}
                key={caseStudy.slug}
              >
                <Link
                  className={styles.caseStudyMedia}
                  href={"/works/" + caseStudy.slug + "/"}
                  aria-label={"Read the " + caseStudy.client + " case study"}
                >
                  {caseStudy.image?.url ? (
                    <Image
                      src={caseStudy.image.url}
                      alt={caseStudy.client + " website case study preview"}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 40px), 58vw"
                    />
                  ) : (
                    <span className={styles.imageFallback} aria-hidden="true">
                      {caseStudy.client}
                    </span>
                  )}
                </Link>

                <div className={styles.caseStudyCopy}>
                  <p className={styles.sectionLabel}>{caseStudy.label}</p>
                  <h3>{caseStudy.client}</h3>
                  <dl>
                    <div>
                      <dt>The need</dt>
                      <dd>{caseStudy.problem}</dd>
                    </div>
                    <div>
                      <dt>My contribution</dt>
                      <dd>{caseStudy.contribution}</dd>
                    </div>
                    <div>
                      <dt>Delivered</dt>
                      <dd>{caseStudy.evidence}</dd>
                    </div>
                  </dl>
                  <Link className={styles.textLink} href={"/works/" + caseStudy.slug + "/"}>
                    Read case study <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.reviews} aria-labelledby="reviews-heading">
          <div className={[styles.container, styles.reviewsInner].join(" ")}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>Client words</p>
              <h2 id="reviews-heading" className={styles.displayHeading}>
                Trust is earned in the working relationship.
              </h2>
            </div>

            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <figure key={testimonial.person}>
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption>
                    <strong>{testimonial.person}</strong>
                    {testimonial.detail}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className={styles.reviewSources}>
              Review sources:{" "}
              <a href={reviewLinks.fiverr} target="_blank" rel="noreferrer">
                Fiverr
              </a>{" "}
              and{" "}
              <a href={reviewLinks.google} target="_blank" rel="noreferrer">
                Google
              </a>
              .
            </p>
          </div>
        </section>

        <section className={[styles.container, styles.founderSection].join(" ")}>
          <div className={styles.founderMedia}>
            <span aria-hidden="true" />
            <Image
              src={founderPortrait}
              alt="Muhammad Zulzidan, independent web specialist"
              sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
              placeholder="blur"
            />
          </div>
          <div className={styles.founderCopy}>
            <p className={styles.sectionLabel}>A specialist, not a mystery team</p>
            <h2 className={styles.displayHeading}>
              Direct collaboration from first audit to launch.
            </h2>
            <div>
              <p>
                I’m Muhammad Zulzidan, an independent web specialist building
                digital products since 2019.
              </p>
              <p>
                My experience includes international freelance delivery and
                full-stack development at Institut Indonesia. I combine
                practical website strategy, front-end development, and content
                systems without turning the project into a technology lecture.
              </p>
            </div>
            <Link className={styles.textLink} href="/about/">
              More about how I work
            </Link>
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="process-heading">
          <div className={[styles.container, styles.sectionPadding].join(" ")}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>A visible process</p>
              <h2 id="process-heading" className={styles.displayHeading}>
                Fewer surprises. Clearer decisions.
              </h2>
            </div>
            <ol className={styles.processGrid}>
              {process.map((step) => (
                <li key={step.number}>
                  <p className={styles.itemNumber}>{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
            <p className={styles.policyNote}>
              Scope, milestones, revision rounds, payment stages, ownership, and
              post-launch support are documented before development begins.{" "}
              <Link href="/refund-policy/">Read the refund and support policy</Link>.
            </p>
          </div>
        </section>

        <section className={[styles.container, styles.faqSection].join(" ")}>
          <div>
            <p className={styles.sectionLabel}>Before we work together</p>
            <h2 className={styles.faqHeading}>Common questions, direct answers.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={[styles.container, styles.finalCtaGrid].join(" ")}>
            <div>
              <p className={styles.sectionLabel}>A practical first step</p>
              <h2>Find out what your website should fix first.</h2>
              <p>
                Send your URL for a free five-point review of clarity,
                credibility, mobile experience, speed basics, and the next most
                useful improvement.
              </p>
            </div>
            <div className={styles.finalCtaAction}>
              <Link href="/audit-website/">
                Request my free audit
                <Arrow />
              </Link>
              <p>No obligation. No hard sell.</p>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
      <EditorialFooter />
    </div>
  );
}
