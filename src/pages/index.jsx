import React from "react";
import { Link, graphql } from "gatsby";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

import Layout from "../components/layout";
import { SEO as Seo } from "../components/seo";

const featuredCaseStudies = [
  {
    slug: "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl",
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
    label: "Logistics · Indonesia",
    problem:
      "ABM Logistik had no official website to explain its services or support trust during sales conversations.",
    contribution:
      "Its first professional web presence, designed around clear services, direct enquiries, and editable content.",
    evidence: "Next.js build, Contentful CMS, responsive service journey",
  },
  {
    slug: "mooi-filters-premium-and-affordable-shower-filter-in-bali",
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

const trackCta = (label) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "homepage",
      event_label: label,
    });
  }
};

const IndexPage = ({ data, location }) => {
  const workNodes =
    data?.allContentfulZulzidanWorks?.edges?.map(({ node }) => node) ?? [];
  const founderImage = getImage(data?.contentfulAsset);

  const caseStudies = featuredCaseStudies
    .map((caseStudy) => {
      const work = workNodes.find(({ slug }) => slug === caseStudy.slug);
      return work ? { ...caseStudy, work } : null;
    })
    .filter(Boolean);

  return (
    <Layout location={location}>
      <main className="overflow-hidden bg-[#f4efe7] text-[#18201c]">
        <section className="mx-auto grid min-h-[calc(100vh-84px)] max-w-screen-xl items-end gap-12 border-b border-[#18201c]/20 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:px-10">
          <div className="md:col-span-9">
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f3827]">
              <span className="h-px w-10 bg-[#c74b2f]" aria-hidden="true" />
              Websites for service businesses
            </p>
            <h1 className="max-w-6xl font-serif text-[clamp(3.4rem,8vw,7.7rem)] leading-[0.88] tracking-[-0.055em]">
              Turn attention into trust.{" "}
              <span className="italic text-[#8f3827]">and trust into enquiries.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#37433d] sm:text-xl">
              I help contractors, logistics companies, and service businesses
              turn unclear or outdated websites into credible sales assets that
              make the next step obvious.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/audit-website/"
                onClick={() => trackCta("hero_free_audit")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c74b2f] px-6 py-3 font-semibold text-[#fffaf2] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#9f3825] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18201c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
              >
                Get a free 5-point audit
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <Link
                to="/works/"
                onClick={() => trackCta("hero_case_studies")}
                className="inline-flex min-h-12 items-center border-b border-[#18201c] py-2 font-semibold transition-colors hover:border-[#c74b2f] hover:text-[#8f3827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18201c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
              >
                View case studies
              </Link>
            </div>
          </div>

          <aside className="border-l border-[#18201c]/25 pl-6 md:col-span-3 md:mb-2">
            <p className="font-serif text-2xl leading-tight">
              For businesses whose reputation has outgrown their website.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-[#4f5a54]">
              Independent web specialist based in Indonesia and working across
              time zones.
            </p>
          </aside>
        </section>

        <section
          aria-labelledby="proof-heading"
          className="border-b border-[#18201c]/20 bg-[#e7dfd3]"
        >
          <div className="mx-auto grid max-w-screen-xl gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1.2fr_3fr] md:items-center lg:px-10">
            <div>
              <p
                id="proof-heading"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d3327]"
              >
                Selected collaborations
              </p>
              <p className="mt-2 text-sm text-[#4f5a54]">
                Since 2019 · 9 five-star reviews
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 font-serif text-lg sm:grid-cols-3 lg:grid-cols-5">
              {["TASFRL", "ABM Logistik", "MOOI Filters", "Asia Baru", "BangunanKami"].map(
                (client) => (
                  <li key={client} className="border-l border-[#18201c]/25 pl-3">
                    {client}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-screen-xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              The real website problem
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.98] tracking-[-0.04em]">
              Looking professional is useful. Making a buyer feel certain is
              what moves the conversation forward.
            </h2>
            <div className="mt-16 grid gap-10 border-t border-[#18201c]/25 pt-8 sm:grid-cols-3">
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
                <div key={title}>
                  <p className="text-xs text-[#8f3827]">0{index + 1}</p>
                  <h3 className="mt-5 font-serif text-3xl">{title}</h3>
                  <p className="mt-3 leading-relaxed text-[#4f5a54]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-[#18201c] text-[#f4efe7]"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
            <div className="grid gap-8 md:grid-cols-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e78b6c] md:col-span-3">
                Ways I can help
              </p>
              <div className="md:col-span-8">
                <h2
                  id="services-heading"
                  className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.045em]"
                >
                  Start with the business outcome. Choose the technology second.
                </h2>
              </div>
            </div>

            <div className="mt-16 border-t border-[#f4efe7]/25">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="grid gap-5 border-b border-[#f4efe7]/25 py-10 md:grid-cols-12 md:gap-8"
                >
                  <p className="text-sm text-[#e78b6c] md:col-span-1">
                    {service.number}
                  </p>
                  <h3 className="font-serif text-3xl md:col-span-4 md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-[#d9d1c6] md:col-span-3">
                    {service.fit}
                  </p>
                  <p className="leading-relaxed md:col-span-4">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#e78b6c]">
                      Expected outcome
                    </span>
                    {service.outcome}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/audit-website/"
                className="font-semibold text-[#f3a388] underline decoration-[#f3a388]/50 underline-offset-8 transition-colors hover:text-[#fffaf2]"
              >
                Discuss the right starting point
              </Link>
              <Link
                to="/jasa-pembuatan-website/"
                className="text-sm text-[#d9d1c6] transition-colors hover:text-[#fffaf2]"
              >
                Looking for Bahasa Indonesia and IDR pricing? View local packages
                →
              </Link>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-32 lg:px-10"
          aria-labelledby="work-heading"
        >
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
                Selected case studies
              </p>
            </div>
            <div className="md:col-span-7">
              <h2
                id="work-heading"
                className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.045em]"
              >
                Evidence before adjectives.
              </h2>
            </div>
            <Link
              to="/works/"
              className="justify-self-start border-b border-[#18201c] pb-1 font-semibold hover:border-[#c74b2f] hover:text-[#8f3827] md:col-span-2 md:justify-self-end"
            >
              View all work
            </Link>
          </div>

          <div className="mt-20 space-y-24 md:space-y-32">
            {caseStudies.map(({ work, ...caseStudy }, index) => {
              const image = getImage(work.images?.[0]);
              return (
                <article
                  key={work.slug}
                  className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
                >
                  <Link
                    to={`/works/${work.slug}/`}
                    className={`group overflow-hidden bg-[#d9d0c3] md:col-span-7 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                    aria-label={`Read the ${work.client} case study`}
                  >
                    {image ? (
                      <GatsbyImage
                        image={image}
                        alt={`${work.client} website case study preview`}
                        className="aspect-[4/3] w-full transition duration-700 ease-out group-hover:scale-[1.025]"
                        imgStyle={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div className="aspect-[4/3] w-full" aria-hidden="true" />
                    )}
                  </Link>

                  <div
                    className={`md:col-span-5 ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f3827]">
                      {caseStudy.label}
                    </p>
                    <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                      {work.client}
                    </h3>
                    <dl className="mt-8 space-y-6 border-t border-[#18201c]/25 pt-6">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a736e]">
                          The need
                        </dt>
                        <dd className="mt-2 leading-relaxed">{caseStudy.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a736e]">
                          My contribution
                        </dt>
                        <dd className="mt-2 leading-relaxed">
                          {caseStudy.contribution}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a736e]">
                          Delivered
                        </dt>
                        <dd className="mt-2 leading-relaxed">
                          {caseStudy.evidence}
                        </dd>
                      </div>
                    </dl>
                    <Link
                      to={`/works/${work.slug}/`}
                      className="mt-8 inline-flex border-b border-[#18201c] pb-1 font-semibold transition-colors hover:border-[#c74b2f] hover:text-[#8f3827]"
                    >
                      Read case study <span className="ml-2" aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#d9d0c3]" aria-labelledby="reviews-heading">
          <div className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-28 lg:px-10">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d3327]">
                  Client words
                </p>
              </div>
              <div className="md:col-span-8">
                <h2
                  id="reviews-heading"
                  className="font-serif text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.95] tracking-[-0.04em]"
                >
                  Trust is earned in the working relationship.
                </h2>
              </div>
            </div>

            <div className="mt-16 grid border-y border-[#18201c]/25 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.person}
                  className={`py-9 md:px-8 ${
                    index > 0
                      ? "border-t border-[#18201c]/25 md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <div className="text-[#8f3827]" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="mt-6 font-serif text-2xl leading-snug">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-7 text-sm leading-relaxed text-[#4f5a54]">
                    <span className="block font-semibold text-[#18201c]">
                      {testimonial.person}
                    </span>
                    {testimonial.detail}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#4f5a54]">
              Review sources:{" "}
              <a
                href={reviewLinks.fiverr}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#18201c] underline underline-offset-4"
              >
                Fiverr
              </a>{" "}
              and{" "}
              <a
                href={reviewLinks.google}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#18201c] underline underline-offset-4"
              >
                Google
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-screen-xl items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="relative md:col-span-5">
            <div className="absolute -left-4 -top-4 h-24 w-24 bg-[#c74b2f]" aria-hidden="true" />
            <GatsbyImage
              image={founderImage}
              alt="Muhammad Zulzidan, independent web specialist"
              className="relative aspect-[4/5] w-full bg-[#9ea2a1]"
              imgStyle={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              A specialist, not a mystery team
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.7rem,5vw,5.4rem)] leading-[0.95] tracking-[-0.045em]">
              Direct collaboration from first audit to launch.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#46514b]">
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
            <Link
              to="/about/"
              className="mt-8 inline-flex border-b border-[#18201c] pb-1 font-semibold hover:border-[#c74b2f] hover:text-[#8f3827]"
            >
              More about how I work
            </Link>
          </div>
        </section>

        <section className="border-y border-[#18201c]/20 bg-[#eee6da]" aria-labelledby="process-heading">
          <div className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
            <div className="grid gap-8 md:grid-cols-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827] md:col-span-3">
                A visible process
              </p>
              <h2
                id="process-heading"
                className="font-serif text-[clamp(2.7rem,5vw,5.3rem)] leading-[0.95] tracking-[-0.04em] md:col-span-8"
              >
                Fewer surprises. Clearer decisions.
              </h2>
            </div>
            <ol className="mt-16 grid gap-px border border-[#18201c]/25 bg-[#18201c]/25 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <li key={step.number} className="bg-[#eee6da] p-7">
                  <p className="text-sm text-[#8f3827]">{step.number}</p>
                  <h3 className="mt-10 font-serif text-3xl">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#4f5a54]">{step.copy}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#4f5a54]">
              Scope, milestones, revision rounds, payment stages, ownership, and
              post-launch support are documented before development begins.{" "}
              <Link
                to="/refund-policy/"
                className="font-semibold text-[#18201c] underline underline-offset-4"
              >
                Read the refund and support policy
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-screen-xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              Before we work together
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.04em]">
              Common questions, direct answers.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-t border-[#18201c]/25 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-serif text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="shrink-0 text-[#8f3827] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pr-10 leading-relaxed text-[#4f5a54]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-[#c74b2f] text-[#fffaf2]">
          <div className="mx-auto grid max-w-screen-xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-12 md:items-end md:py-28 lg:px-10">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fffaf2]">
                A practical first step
              </p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.05em]">
                Find out what your website should fix first.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#fffaf2]">
                Send your URL for a free five-point review of clarity,
                credibility, mobile experience, speed basics, and the next most
                useful improvement.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/audit-website/"
                onClick={() => trackCta("final_free_audit")}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#18201c] px-7 py-4 font-semibold text-[#fffaf2] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#2b3731] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffaf2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c74b2f]"
              >
                Request my free audit
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <p className="mt-4 text-sm text-[#fffaf2]">
                No obligation. No hard sell.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query AuthorityHomepageQuery {
    contentfulAsset(title: { eq: "Muhammad Zulzidan founder portrait" }) {
      title
      description
      gatsbyImageData(
        width: 1200
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
    allContentfulZulzidanWorks {
      edges {
        node {
          description {
            description
          }
          date(formatString: "DD-MM-YYYY")
          client
          title
          slug
          images {
            gatsbyImageData(
              width: 1800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;

export function Head({ location }) {
  const title =
    "Zulzidan | Conversion-focused websites for service businesses";
  const description =
    "I help service businesses turn unclear or outdated websites into credible sales assets with clearer messaging, stronger mobile UX, and an easier path to enquiry.";
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
    ],
    sameAs: [
      "https://www.linkedin.com/in/muhzulzidan/",
      "https://www.instagram.com/muhzulzidan/",
      "https://www.youtube.com/@muhzulzidan",
    ],
  };

  return (
    <Seo
      title={title}
      pathname={location?.pathname || "/"}
      description={description}
    >
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Seo>
  );
}
