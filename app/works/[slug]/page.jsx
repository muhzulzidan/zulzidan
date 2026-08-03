import Link from "next/link";
import { notFound } from "next/navigation";

import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import { getWork, getWorks } from "@/lib/contentful";
import { createMetadata } from "@/lib/site";

import WorkGallery from "./WorkGallery";

const TASFRL_SLUG =
  "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl";

const tasfrlCapabilities = [
  {
    number: "01",
    title: "Public platform and content",
    copy: "Mission, programs, partner pages, resources, news, gallery, donations, county and city search, and editorial workflows the team can use day to day.",
  },
  {
    number: "02",
    title: "Land-service operations",
    copy: "Eight service journeys and a four-step land assessment flow with returning-steward logic, draft saving, uploads, consent, case references, and account-based tracking.",
  },
  {
    number: "03",
    title: "Members and internal workflows",
    copy: "Registration, email verification, protected dashboards and profiles, plus operational tooling for members, subscribers, cases, newsletters, campaigns, videos, and activity.",
  },
  {
    number: "04",
    title: "Events, email, and growth",
    copy: "Event publishing, registration and recordings, contact and transactional email, technical SEO, a 51-URL sitemap, articles, social publishing, and AI-assisted video production.",
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

export const revalidate = 3600;

const removeEmDash = (text = "") => text.replace(/\s*\u2014\s*/g, ", ");

const splitDescription = (description = "") =>
  removeEmDash(description)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const monthNumbers = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

function projectDate(date = "") {
  if (/^\d{2}-\d{2}-\d{4}$/.test(date)) return date;

  const match = date.match(/^([A-Za-z]+) (\d{2}), (\d{4})$/);
  if (!match || !monthNumbers[match[1]]) return date;

  return `${match[2]}-${monthNumbers[match[1]]}-${match[3]}`;
}

export async function generateStaticParams() {
  const works = await getWorks().catch(() => []);
  return works.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = await getWork(slug).catch(() => null);

  if (!work) return {};

  const description =
    splitDescription(work.description?.description)[0] ||
    `Selected project work for ${work.client}.`;

  return createMetadata({
    title: work.title,
    description,
    path: `/works/${slug}/`,
    image: work.images?.[0]?.url,
  });
}

function ProjectHero({ work, isTasfrl }) {
  return (
    <header className="border-b border-[#18201c]/20">
      <div className="mx-auto max-w-screen-xl px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-12 md:pb-28 md:pt-16 lg:px-10">
        <Link
          href="/works/"
          className="inline-flex min-h-11 items-center border-b border-[#18201c] py-2 text-sm font-semibold transition-colors hover:border-[#c74b2f] hover:text-[#8f3827]"
        >
          ← All selected work
        </Link>

        <div className="mt-10 grid gap-8 sm:mt-16 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              {isTasfrl
                ? "Flagship ongoing partnership"
                : "Selected client work"}
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
            {isTasfrl ? (
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#46514b] md:text-2xl">
                An ongoing digital platform and growth partnership for an East
                Texas nonprofit serving farmers, ranchers, and landowners.
              </p>
            ) : null}
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
                {isTasfrl ? "2025 to present" : projectDate(work.date)}
              </dd>
            </div>
            {isTasfrl ? (
              <div className="border-b border-[#18201c]/20 py-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-[#4f5a54]">
                  Role
                </dt>
                <dd className="mt-2 font-semibold">
                  Digital platform and growth partner
                </dd>
              </div>
            ) : null}
            {work.url ? (
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
            ) : null}
          </dl>
        </div>
      </div>
    </header>
  );
}

function TasfrlCaseStudy({ paragraphs }) {
  return (
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
            One connected platform across public service and internal
            operations.
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
                className="grid gap-3 border-t border-[#18201c]/25 py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="text-sm font-semibold">
                  {responsibility.label}
                </dt>
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
}

function GeneralCaseStudy({ paragraphs }) {
  return (
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
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = await getWork(slug);

  if (!work) notFound();

  const isTasfrl = work.slug === TASFRL_SLUG;
  const paragraphs = splitDescription(work.description?.description);

  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#18201c]">
      <EditorialHeader />
      <main>
        <ProjectHero work={work} isTasfrl={isTasfrl} />

        {isTasfrl ? (
          <TasfrlCaseStudy paragraphs={paragraphs} />
        ) : (
          <GeneralCaseStudy paragraphs={paragraphs} />
        )}

        <WorkGallery images={work.images} client={work.client} />

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
                href="/audit-website/"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#18201c] px-7 py-4 font-semibold text-[#fffaf2] transition hover:-translate-y-0.5 hover:bg-[#2b3731] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffaf2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c74b2f]"
              >
                Request a free website audit ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
