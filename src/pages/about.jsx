import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { SEO as Seo } from "../components/seo";

const TASFRL_SLUG =
  "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl";

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

const trackAboutCta = (label) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "about",
      event_label: label,
    });
  }
};

const About = ({ data, location }) => {
  const founderImage = getImage(data?.contentfulAsset);
  const tasfrl = data?.contentfulZulzidanWorks;
  const tasfrlImage = getImage(tasfrl?.images?.[0]);

  return (
    <Layout location={location}>
      <main className="overflow-hidden bg-[#f4efe7] text-[#18201c]">
        <section className="mx-auto grid max-w-screen-xl gap-14 border-b border-[#18201c]/20 px-5 py-16 sm:px-8 md:grid-cols-12 md:items-end md:py-24 lg:px-10">
          <div className="md:col-span-7 lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f3827]">
              <span className="h-px w-10 bg-[#c74b2f]" aria-hidden="true" />
              Independent web specialist · Indonesia
            </p>
            <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3.5rem,7.2vw,7.2rem)] leading-[0.89] tracking-[-0.055em]">
              I build websites as{" "}
              <span className="italic text-[#8f3827]">
                working business systems.
              </span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#37433d] sm:text-xl">
              I&apos;m Muhammad Zulzidan. Since 2019, I&apos;ve helped service
              businesses and organizations turn complex work into clear
              websites, useful systems, and stronger paths to enquiry.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/works/"
                onClick={() => trackAboutCta("view_work")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#18201c] px-6 py-3 font-semibold text-[#fffaf2] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#8f3827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
              >
                See how I work
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <Link
                to="/audit-website/"
                onClick={() => trackAboutCta("hero_free_audit")}
                className="inline-flex min-h-12 items-center border-b border-[#18201c] py-2 font-semibold transition-colors hover:border-[#c74b2f] hover:text-[#8f3827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18201c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
              >
                Get a free website audit
              </Link>
            </div>
          </div>

          <figure className="relative md:col-span-5 lg:col-span-4 lg:col-start-9">
            <div
              className="absolute -right-5 -top-5 h-32 w-32 bg-[#c74b2f] sm:-right-8 sm:-top-8"
              aria-hidden="true"
            />
            {founderImage ? (
              <GatsbyImage
                image={founderImage}
                alt="Muhammad Zulzidan, independent web specialist"
                className="relative aspect-[4/5] w-full bg-[#d9d0c3]"
                imgStyle={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(min-width: 1024px) 25rem, (min-width: 768px) 38vw, calc(100vw - 2.5rem)"
              />
            ) : (
              <div
                className="relative aspect-[4/5] w-full bg-[#d9d0c3]"
                aria-hidden="true"
              />
            )}
            <figcaption className="relative mt-5 grid grid-cols-[auto_1fr] gap-4 border-t border-[#18201c]/25 pt-4 text-sm leading-relaxed text-[#4f5a54]">
              <span className="font-semibold text-[#18201c]">01</span>
              <span>
                Strategy, UX, development, CMS, SEO foundations, and ongoing
                improvement with one directly accountable partner.
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="bg-[#18201c] text-[#f4efe7]">
          <div className="mx-auto grid max-w-screen-xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 md:items-end md:py-28 lg:px-10">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e78b6c]">
                The point of the work
              </p>
              <h2 className="mt-6 font-serif text-[clamp(2.8rem,5.4vw,5.8rem)] leading-[0.94] tracking-[-0.045em]">
                A website should make the business easier to understand and
                easier to run.
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="border-l border-[#f4efe7]/25 pl-6 text-lg leading-relaxed text-[#d9d0c3]">
                I look beyond layouts. I map what clients need to know, what
                your team needs to manage, and what must happen after someone
                clicks the button.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
                Flagship ongoing partnership
              </p>
              <h2 className="mt-6 font-serif text-[clamp(2.8rem,5.4vw,5.8rem)] leading-[0.94] tracking-[-0.045em]">
                TASFRL is the clearest example of how I work.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-[#4f5a54] md:col-span-4">
              One public website connected to the operational systems behind
              service delivery, membership, publishing, and outreach.
            </p>
          </div>

          <article className="mt-14 grid gap-10 border-y border-[#18201c]/25 py-10 lg:grid-cols-12 lg:items-start lg:py-12">
            <div className="overflow-hidden bg-[#d9d0c3] lg:col-span-7">
              {tasfrlImage ? (
                <GatsbyImage
                  image={tasfrlImage}
                  alt="TASFRL digital operating platform case study cover"
                  className="aspect-[4/3] w-full"
                  imgStyle={{ objectFit: "cover" }}
                  sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                />
              ) : (
                <div className="aspect-[4/3] w-full" aria-hidden="true" />
              )}
            </div>

            <div className="lg:col-span-5 lg:pl-5">
              <dl>
                <div className="border-b border-[#18201c]/20 pb-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f3827]">
                    The challenge
                  </dt>
                  <dd className="mt-3 leading-relaxed text-[#4f5a54]">
                    TASFRL needed one dependable system for public education,
                    land-service requests, members, events, and ongoing
                    outreach.
                  </dd>
                </div>
                <div className="border-b border-[#18201c]/20 py-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f3827]">
                    My contribution
                  </dt>
                  <dd className="mt-3 leading-relaxed text-[#4f5a54]">
                    I design, build, and continue to support the platform across
                    product strategy, service intake, member workflows, email,
                    SEO, and campaign production.
                  </dd>
                </div>
                <div className="pt-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f3827]">
                    Live scope
                  </dt>
                  <dd className="mt-3 leading-relaxed text-[#4f5a54]">
                    Eight service journeys, a four-step assessment, member
                    accounts, case and email workflows, events, publishing,
                    SEO, and social content.
                  </dd>
                </div>
              </dl>
              <Link
                to={`/works/${TASFRL_SLUG}/`}
                className="mt-8 inline-flex min-h-11 items-center border-b border-[#18201c] py-2 font-semibold transition-colors hover:border-[#c74b2f] hover:text-[#8f3827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
              >
                Read the TASFRL case study
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </article>
        </section>

        <section
          className="border-y border-[#18201c]/20 bg-[#d9d0c3]"
          aria-labelledby="approach-heading"
        >
          <div className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
            <div className="grid gap-8 md:grid-cols-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d3327] md:col-span-3">
                How I work
              </p>
              <h2
                id="approach-heading"
                className="font-serif text-[clamp(2.8rem,5.4vw,5.8rem)] leading-[0.94] tracking-[-0.045em] md:col-span-8"
              >
                Start with the operation, not the technology.
              </h2>
            </div>

            <ol className="mt-16 border-y border-[#18201c]/25">
              {approach.map((item) => (
                <li
                  key={item.number}
                  className="grid gap-5 border-b border-[#18201c]/25 py-8 last:border-b-0 md:grid-cols-12 md:items-start md:py-10"
                >
                  <p className="text-sm font-semibold text-[#8f3827] md:col-span-2">
                    {item.number}
                  </p>
                  <h3 className="font-serif text-3xl leading-tight md:col-span-4 md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl leading-relaxed text-[#455049] md:col-span-6">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-screen-xl gap-16 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              The background behind the work
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95] tracking-[-0.045em]">
              A broad technical range. One accountable partner.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#46514b]">
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

          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              Working principles
            </p>
            <dl className="mt-6 border-y border-[#18201c]/25">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid gap-3 border-b border-[#18201c]/25 py-6 last:border-b-0 sm:grid-cols-[2rem_1fr]"
                >
                  <dt className="contents">
                    <span
                      className="text-sm text-[#8f3827]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-2xl leading-tight">
                      {principle.title}
                    </span>
                  </dt>
                  <dd className="leading-relaxed text-[#4f5a54] sm:col-start-2">
                    {principle.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-[#c74b2f] text-[#fffaf2]">
          <div className="mx-auto grid max-w-screen-xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-12 md:items-end md:py-28 lg:px-10">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                A practical first step
              </p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6.4rem)] leading-[0.9] tracking-[-0.05em]">
                Let&apos;s find the first problem worth fixing.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed">
                Send your URL for a free five-point review of clarity,
                credibility, mobile experience, speed basics, and the most
                useful next improvement.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/audit-website/"
                onClick={() => trackAboutCta("final_free_audit")}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#18201c] px-7 py-4 font-semibold text-[#fffaf2] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#2b3731] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffaf2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c74b2f]"
              >
                Request my free audit
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <p className="mt-4 text-sm">No obligation. No hard sell.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    contentfulAsset(title: { eq: "Muhammad Zulzidan founder portrait" }) {
      title
      description
      url
      gatsbyImageData(
        width: 1200
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
    contentfulZulzidanWorks(slug: { eq: "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl" }) {
      slug
      client
      images {
        title
        gatsbyImageData(
          width: 1800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default About;

export function Head({ data, location }) {
  const title = "About Muhammad Zulzidan | Independent Web Specialist";
  const description =
    "Meet Muhammad Zulzidan, an independent web specialist helping service businesses turn complex work into clear websites, useful systems, and stronger paths to enquiry.";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Zulzidan M",
    url: "https://zulzidan.com/about/",
    image: data?.contentfulAsset?.url,
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
    <Seo
      title={title}
      pathname={location.pathname}
      description={description}
      image={data?.contentfulAsset?.url}
    >
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Seo>
  );
}
