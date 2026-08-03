import Image from "next/image";
import Link from "next/link";

import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import { getWorks } from "@/lib/contentful";
import { createMetadata } from "@/lib/site";

const TASFRL_SLUG =
  "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl";
const TASFRL_DISPLAY_TITLE = "TASFRL digital operating platform";
const TASFRL_SUMMARY =
  "I design, build, and support TASFRL's digital operating platform across land-service intake, member accounts, case and email workflows, events, publishing, SEO, and social content.";

export const metadata = createMetadata({
  title: "Selected Works by Muhammad Zulzidan",
  description:
    "Selected website and digital product projects created by Muhammad Zulzidan from 2019 to the present.",
  path: "/works/",
});

export const revalidate = 3600;

const removeEmDash = (text = "") => text.replace(/\s*\u2014\s*/g, ", ");

const yearFromDate = (date = "") => date.match(/\b\d{4}\b/)?.[0] || date;

function sortWorks(works) {
  return [...works].sort((a, b) => {
    if (a.slug === TASFRL_SLUG) return -1;
    if (b.slug === TASFRL_SLUG) return 1;
    return 0;
  });
}

export default async function WorksPage() {
  const works = sortWorks(await getWorks().catch(() => []));

  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#18201c]">
      <EditorialHeader />
      <main>
        <header className="border-b border-[#18201c]/20">
          <div className="mx-auto grid max-w-screen-xl gap-10 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-12 md:items-end md:pb-28 md:pt-20 lg:px-10">
            <div className="md:col-span-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f3827]">
                Selected work · 2019 to present
              </p>
              <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.6rem,8vw,8rem)] leading-[0.88] tracking-[-0.055em]">
                Systems built to earn trust and move work forward.
              </h1>
            </div>
            <p className="border-l border-[#18201c]/25 pl-6 text-lg leading-relaxed text-[#4f5a54] md:col-span-3">
              Websites and digital products for service businesses, nonprofits,
              logistics, education, construction, and consumer brands.
            </p>
          </div>
        </header>

        <section
          className="mx-auto max-w-screen-xl px-5 py-20 sm:px-8 md:py-28 lg:px-10"
          aria-label="Case studies"
        >
          {works.length ? (
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
              {works.map((work) => {
              const isTasfrl = work.slug === TASFRL_SLUG;
              const image = work.images?.[0];

              return (
                <article
                  key={work.slug}
                  className={
                    isTasfrl
                      ? "border-b border-[#18201c]/25 pb-16 md:col-span-2 md:pb-24"
                      : "border-b border-[#18201c]/25 pb-12"
                  }
                >
                  <Link
                    href={`/works/${work.slug}/`}
                    className={
                      isTasfrl
                        ? "group grid gap-8 lg:grid-cols-12 lg:items-start"
                        : "group block"
                    }
                    aria-label={`Read the ${work.client} case study`}
                  >
                    <div
                      className={`relative aspect-[4/3] overflow-hidden bg-[#d9d0c3] ${
                        isTasfrl ? "lg:col-span-7" : ""
                      }`}
                    >
                      {image?.url ? (
                        <Image
                          src={image.url}
                          alt={`${work.client} case study preview`}
                          fill
                          sizes={
                            isTasfrl
                              ? "(min-width: 1280px) 43rem, (min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                              : "(min-width: 768px) 46vw, calc(100vw - 2.5rem)"
                          }
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                        />
                      ) : null}
                    </div>

                    <div className={isTasfrl ? "lg:col-span-5" : "mt-6"}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f3827]">
                          {isTasfrl
                            ? "Flagship ongoing partnership"
                            : work.client}
                        </p>
                        <p className="text-sm text-[#4f5a54]">
                          {isTasfrl
                            ? "2025 to present"
                            : yearFromDate(work.date)}
                        </p>
                      </div>
                      <h2
                        className={`mt-4 font-serif leading-[0.98] tracking-[-0.035em] transition-colors group-hover:text-[#8f3827] ${
                          isTasfrl
                            ? "text-[clamp(2.8rem,5vw,5rem)]"
                            : "text-4xl"
                        }`}
                      >
                        {isTasfrl
                          ? TASFRL_DISPLAY_TITLE
                          : removeEmDash(work.title)}
                      </h2>
                      <p
                        className={`mt-5 leading-relaxed text-[#4f5a54] ${
                          isTasfrl ? "max-w-xl text-lg" : "line-clamp-3"
                        }`}
                      >
                        {isTasfrl
                          ? TASFRL_SUMMARY
                          : removeEmDash(work.description?.description)}
                      </p>
                      <span className="mt-7 inline-flex border-b border-[#18201c] pb-1 font-semibold group-hover:border-[#c74b2f] group-hover:text-[#8f3827]">
                        Read case study ↗
                      </span>
                    </div>
                  </Link>
                </article>
              );
              })}
            </div>
          ) : (
            <div className="border-y border-[#18201c]/25 py-14 md:grid md:grid-cols-12 md:items-end md:gap-8 md:py-20">
              <div className="md:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
                  Portfolio temporarily unavailable
                </p>
                <h2 className="mt-5 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
                  The case-study feed could not be loaded.
                </h2>
              </div>
              <div className="mt-8 md:col-span-4 md:mt-0">
                <p className="leading-relaxed text-[#4f5a54]">
                  Please try again shortly, or request a free audit to discuss
                  the work your website needs now.
                </p>
                <Link
                  href="/audit-website/"
                  className="mt-6 inline-flex min-h-11 items-center border-b border-[#18201c] py-2 font-semibold hover:border-[#c74b2f] hover:text-[#8f3827]"
                >
                  Request a free website audit ↗
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
