import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import Layout from "../components/layout";
import SEOHead from "../components/head";

const TASFRL_SLUG =
  "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl";

const tasfrlCapabilities = [
  {
    number: "01",
    title: "Public platform and content",
    copy:
      "Mission, programs, partner pages, resources, news, gallery, donations, county and city search, and editorial workflows the team can use day to day.",
  },
  {
    number: "02",
    title: "Land-service operations",
    copy:
      "Eight service journeys and a four-step land assessment flow with returning-steward logic, draft saving, uploads, consent, case references, and account-based tracking.",
  },
  {
    number: "03",
    title: "Members and internal workflows",
    copy:
      "Registration, email verification, protected dashboards and profiles, plus operational tooling for members, subscribers, cases, newsletters, campaigns, videos, and activity.",
  },
  {
    number: "04",
    title: "Events, email, and growth",
    copy:
      "Event publishing, registration and recordings, contact and transactional email, technical SEO, a 51-URL sitemap, articles, social publishing, and AI-assisted video production.",
  },
];

const tasfrlResponsibilities = [
  {
    label: "Product and UX",
    value:
      "Information architecture, public journeys, service discovery, assessment flow, member experience, and ongoing feature decisions.",
  },
  {
    label: "Engineering",
    value:
      "Next.js development, Contentful integration, service and case workflows, member accounts, email systems, deployment, maintenance, and iteration.",
  },
  {
    label: "Content and growth",
    value:
      "Technical SEO, publishing workflows, articles, posts, social media support, and AI-assisted video production.",
  },
  {
    label: "Partnership",
    value:
      "Direct collaboration as TASFRL expands its services, partnerships, events, resources, and statewide role.",
  },
];

const tasfrlEvidenceLinks = [
  {
    label: "Live platform",
    detail: "Public organization website",
    href: "https://www.tasfrl.org/",
  },
  {
    label: "Land services",
    detail: "Eight service paths",
    href: "https://www.tasfrl.org/land-management-request",
  },
  {
    label: "Assessment flow",
    detail: "Four-step service intake",
    href: "https://www.tasfrl.org/complete-land-management/step-1-about",
  },
  {
    label: "Events",
    detail: "Upcoming and recorded programs",
    href: "https://www.tasfrl.org/event",
  },
  {
    label: "News and guides",
    detail: "Ongoing editorial publishing",
    href: "https://www.tasfrl.org/news",
  },
  {
    label: "LinkedIn",
    detail: "Active outreach and video",
    href: "https://www.linkedin.com/company/tasfrl",
  },
  {
    label: "Member registration",
    detail: "Account and verification journey",
    href: "https://www.tasfrl.org/register",
  },
  {
    label: "YouTube",
    detail: "Education and campaign videos",
    href: "https://www.youtube.com/@tasfrl_ag",
  },
];

const removeEmDash = (text = "") => text.replace(/\s*\u2014\s*/g, ", ");

const splitDescription = (description = "") =>
  removeEmDash(description)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const WorkGallery = ({ images, client, onOpen }) => {
  if (!images?.length) return null;

  return (
    <section
      className="border-t border-[#18201c]/20"
      aria-labelledby="project-gallery-heading"
    >
      <div className="mx-auto max-w-screen-xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827] md:col-span-3">
            Project evidence
          </p>
          <h2
            id="project-gallery-heading"
            className="font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em] md:col-span-8"
          >
            A closer look at the work.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {images.map((image, index) => {
            const imageData = getImage(image);
            const alt = image.title || `${client} project image ${index + 1}`;

            return (
              <figure key={image.contentful_id || alt}>
                <button
                  type="button"
                  onClick={() => onOpen(image, alt)}
                  className="group block w-full overflow-hidden bg-[#d9d0c3] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
                  aria-label={`Open larger view of ${alt}`}
                >
                  {imageData ? (
                    <GatsbyImage
                      image={imageData}
                      alt={alt}
                      sizes="(min-width: 768px) 46vw, calc(100vw - 2.5rem)"
                      className="aspect-[4/3] w-full transition duration-700 ease-out group-hover:scale-[1.02]"
                      imgStyle={{ objectFit: "cover" }}
                    />
                  ) : (
                    <span className="block aspect-[4/3]" aria-hidden="true" />
                  )}
                </button>
                <figcaption className="mt-3 text-sm text-[#5a655f]">
                  {alt}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ImageDialog = ({ currentImage, onClose }) => (
  <Dialog
    open={Boolean(currentImage)}
    onClose={onClose}
    className="relative z-50"
  >
    <div
      className="fixed inset-0 bg-[#18201c]/85"
      aria-hidden="true"
    />
    <div className="fixed inset-0 overflow-y-auto p-4 sm:p-8">
      <div className="flex min-h-full items-center justify-center">
        <DialogPanel className="relative w-full max-w-6xl bg-[#f4efe7] p-3 shadow-2xl">
          <DialogTitle className="sr-only">
            {currentImage?.alt || "Project image"}
          </DialogTitle>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#18201c] text-xl text-[#fffaf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-2"
            aria-label="Close image"
          >
            ×
          </button>
          {currentImage?.image && (
            <GatsbyImage
              image={currentImage.image}
              alt={currentImage.alt}
              sizes="(min-width: 1280px) 72rem, calc(100vw - 2rem)"
              className="max-h-[85vh] w-full"
              imgStyle={{ objectFit: "contain" }}
            />
          )}
        </DialogPanel>
      </div>
    </div>
  </Dialog>
);

const ProjectHero = ({ work, isTasfrl }) => (
  <header className="border-b border-[#18201c]/20">
    <div className="mx-auto max-w-screen-xl px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-12 md:pb-28 md:pt-16 lg:px-10">
      <Link
        to="/works/"
        className="inline-flex min-h-11 items-center border-b border-[#18201c] py-2 text-sm font-semibold transition-colors hover:border-[#c74b2f] hover:text-[#8f3827]"
      >
        ← All selected work
      </Link>

      <div className="mt-10 grid gap-8 sm:mt-16 md:grid-cols-12 md:items-end md:gap-12">
        <div className="md:col-span-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
            {isTasfrl ? "Flagship ongoing partnership" : "Selected client work"}
          </p>
          <h1 className="mt-5 max-w-6xl font-serif text-[clamp(2.7rem,12vw,7.3rem)] leading-[0.9] tracking-[-0.05em] sm:mt-6 sm:text-[clamp(3.2rem,7vw,7.3rem)]">
            {isTasfrl ? (
              <>
                <span className="sm:hidden">
                  TASFRL digital operating platform
                </span>
                <span className="hidden sm:inline">{work.title}</span>
              </>
            ) : (
              work.title
            )}
          </h1>
          {isTasfrl && (
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#46514b] md:text-2xl">
              An ongoing digital platform and growth partnership for an East
              Texas nonprofit serving farmers, ranchers, and landowners.
            </p>
          )}
        </div>

        <dl className="border-l border-[#18201c]/25 pl-6 text-sm md:col-span-3">
          <div className="border-b border-[#18201c]/20 pb-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-[#4f5a54]">
              Client
            </dt>
            <dd className="mt-2 font-semibold">{work.client}</dd>
          </div>
          <div className="border-b border-[#18201c]/20 py-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-[#4f5a54]">
              {isTasfrl ? "Partnership" : "Date"}
            </dt>
            <dd className="mt-2 font-semibold">
              {isTasfrl ? "2025 to present" : work.date}
            </dd>
          </div>
          {isTasfrl && (
            <div className="border-b border-[#18201c]/20 py-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-[#4f5a54]">
                Role
              </dt>
              <dd className="mt-2 font-semibold">
                Digital platform and growth partner
              </dd>
            </div>
          )}
          <div className="pt-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-[#4f5a54]">
              Website
            </dt>
            <dd className="mt-2">
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center py-2 font-semibold underline decoration-[#c74b2f] underline-offset-4"
              >
                Visit live site ↗
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </header>
);

const TasfrlCaseStudy = ({ work, paragraphs }) => (
  <>
    <section className="bg-[#18201c] text-[#f4efe7]">
      <div className="mx-auto grid max-w-screen-xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-32 lg:px-10">
        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e78b6c]">
            The partnership
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
            From a new website to the system behind the work.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[#d9d1c6] md:col-span-7 md:col-start-6">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827] md:col-span-3">
          What the platform supports
        </p>
        <h2 className="font-serif text-[clamp(2.8rem,5vw,5.3rem)] leading-[0.95] tracking-[-0.04em] md:col-span-8">
          One connected platform across public service and internal operations.
        </h2>
      </div>

      <ol className="mt-16 border-t border-[#18201c]/25">
        {tasfrlCapabilities.map((capability) => (
          <li
            key={capability.number}
            className="grid gap-5 border-b border-[#18201c]/25 py-8 md:grid-cols-12 md:items-start"
          >
            <p className="text-sm font-semibold text-[#8f3827] md:col-span-1">
              {capability.number}
            </p>
            <h3 className="font-serif text-3xl leading-tight md:col-span-4">
              {capability.title}
            </h3>
            <p className="max-w-2xl leading-relaxed text-[#4f5a54] md:col-span-6 md:col-start-7">
              {capability.copy}
            </p>
          </li>
        ))}
      </ol>
    </section>

    <section className="border-y border-[#18201c]/20 bg-[#eee6da]">
      <div className="mx-auto grid max-w-screen-xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-28 lg:px-10">
        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
            My contribution
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.04em]">
            One accountable partner across product, engineering, and growth.
          </h2>
        </div>
        <dl className="md:col-span-7 md:col-start-6">
          {tasfrlResponsibilities.map((responsibility) => (
            <div
              key={responsibility.label}
              className="grid gap-3 border-t border-[#18201c]/25 py-6 sm:grid-cols-[9rem_1fr] first:border-t-0 first:pt-0"
            >
              <dt className="text-sm font-semibold">{responsibility.label}</dt>
              <dd className="leading-relaxed text-[#4f5a54]">
                {responsibility.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="mx-auto max-w-screen-xl px-5 py-24 sm:px-8 md:py-28 lg:px-10">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827] md:col-span-3">
          Public evidence
        </p>
        <div className="md:col-span-8">
          <h2 className="font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
            Explore the live systems, not just a screenshot.
          </h2>
          <div className="mt-12 border-t border-[#18201c]/25">
            {tasfrlEvidenceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 border-b border-[#18201c]/25 py-5 transition-colors hover:text-[#8f3827] sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <span className="font-serif text-2xl">{link.label}</span>
                <span className="text-sm text-[#5a655f] group-hover:text-[#8f3827]">
                  {link.detail} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

const GeneralCaseStudy = ({ paragraphs }) => (
  <section className="mx-auto grid max-w-screen-xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-12 md:py-28 lg:px-10">
    <div className="md:col-span-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
        Project summary
      </p>
    </div>
    <div className="space-y-6 text-lg leading-relaxed text-[#46514b] md:col-span-8">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </section>
);

export default function WorkTemplate({ data, location }) {
  const work = data.contentfulZulzidanWorks;
  const isTasfrl = work.slug === TASFRL_SLUG;
  const paragraphs = splitDescription(work.description?.description);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image, alt) => {
    setCurrentImage({ image: getImage(image), alt });
  };

  return (
    <Layout location={location}>
      <main className="bg-[#f4efe7] text-[#18201c]">
        <ProjectHero work={work} isTasfrl={isTasfrl} />

        {isTasfrl ? (
          <TasfrlCaseStudy work={work} paragraphs={paragraphs} />
        ) : (
          <GeneralCaseStudy paragraphs={paragraphs} />
        )}

        <WorkGallery
          images={work.images}
          client={work.client}
          onOpen={openModal}
        />

        <section className="bg-[#c74b2f] text-[#fffaf2]">
          <div className="mx-auto grid max-w-screen-xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-12 md:items-end md:py-24 lg:px-10">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Your next step
              </p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.05em]">
                Need more than a brochure site?
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/audit-website/"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#18201c] px-7 py-4 font-semibold text-[#fffaf2] transition hover:-translate-y-0.5 hover:bg-[#2b3731] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffaf2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c74b2f]"
              >
                Request a free website audit ↗
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ImageDialog
        currentImage={currentImage}
        onClose={() => setCurrentImage(null)}
      />
    </Layout>
  );
}

export const query = graphql`
  query WorkBySlug($slug: String!) {
    contentfulZulzidanWorks(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "DD-MM-YYYY")
      client
      url
      description {
        description
      }
      images {
        contentful_id
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
      }
    }
  }
`;

export const Head = ({ data }) => {
  const work = data.contentfulZulzidanWorks;
  const description =
    splitDescription(work.description?.description)[0] ||
    `Selected project work for ${work.client}.`;

  return (
    <SEOHead
      title={work.title}
      description={description}
      image={work.images?.[0]}
    />
  );
};
