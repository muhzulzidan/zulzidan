import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEOHead from "../components/head";

const TASFRL_SLUG =
  "texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl";
const TASFRL_DISPLAY_TITLE = "TASFRL digital operating platform";
const TASFRL_SUMMARY =
  "I design, build, and support TASFRL's digital operating platform across land-service intake, member accounts, case and email workflows, events, publishing, SEO, and social content.";

const removeEmDash = (text = "") => text.replace(/\s*\u2014\s*/g, ", ");

const WorksPage = ({ data, location }) => {
  const works = [...data.allContentfulZulzidanWorks.nodes].sort((a, b) => {
    if (a.slug === TASFRL_SLUG) return -1;
    if (b.slug === TASFRL_SLUG) return 1;
    return new Date(b.dateValue) - new Date(a.dateValue);
  });

  return (
    <Layout location={location}>
      <main className="bg-[#f4efe7] text-[#18201c]">
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
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
            {works.map((work, index) => {
              const isTasfrl = work.slug === TASFRL_SLUG;
              const image = getImage(work.images?.[0]);

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
                    to={`/works/${work.slug}/`}
                    className={
                      isTasfrl
                        ? "group grid gap-8 lg:grid-cols-12 lg:items-start"
                        : "group block"
                    }
                    aria-label={`Read the ${work.client} case study`}
                  >
                    <div
                      className={`overflow-hidden bg-[#d9d0c3] ${
                        isTasfrl ? "lg:col-span-7" : ""
                      }`}
                    >
                      {image ? (
                        <GatsbyImage
                          image={image}
                          alt={`${work.client} case study preview`}
                          sizes={
                            isTasfrl
                              ? "(min-width: 1280px) 43rem, (min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                              : "(min-width: 768px) 46vw, calc(100vw - 2.5rem)"
                          }
                          className="aspect-[4/3] w-full transition duration-700 ease-out group-hover:scale-[1.025]"
                          imgStyle={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          className="aspect-[4/3] w-full"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className={isTasfrl ? "lg:col-span-5" : "mt-6"}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f3827]">
                          {isTasfrl ? "Flagship ongoing partnership" : work.client}
                        </p>
                        <p className="text-sm text-[#4f5a54]">
                          {isTasfrl ? "2025 to present" : work.date}
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
                          : removeEmDash(work.description.description)}
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
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query WorksPageQuery {
    allContentfulZulzidanWorks {
      nodes {
        description {
          description
        }
        date(formatString: "YYYY")
        dateValue: date
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
`;

export const Head = () => {
  return (
    <SEOHead
      title="Selected Works by Muhammad Zulzidan"
      description="Selected website and digital product projects created by Muhammad Zulzidan from 2019 to the present."
    />
  );
};

export default WorksPage;
