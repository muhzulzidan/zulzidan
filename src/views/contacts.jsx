import React from "react";
import { Link } from "@/lib/gatsby-compat";

import Layout from "../components/layout";
import { SEO as Seo } from "../components/seo";

const ContactsPage = ({ location }) => (
  <Layout location={location}>
    <main className="bg-[#f4efe7] px-5 py-20 text-[#18201c] sm:px-8 md:py-28 lg:px-10">
      <div className="mx-auto grid max-w-screen-xl gap-12 border-y border-[#18201c]/20 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
            Start a conversation
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] tracking-[-0.05em]">
            Tell me what your website needs to do better.
          </h1>
        </div>

        <div className="flex flex-col justify-end md:col-span-4">
          <p className="max-w-md text-lg leading-relaxed text-[#4f5a54]">
            Email is best for project details. For a structured first step,
            request the free website audit instead.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5">
            <a
              href="mailto:mail@zulzidan.com?subject=Website%20project%20enquiry"
              className="border-b border-[#18201c] pb-1 font-semibold hover:border-[#c74b2f] hover:text-[#8f3827]"
            >
              mail@zulzidan.com
            </a>
            <Link
              to="/audit-website/"
              className="inline-flex min-h-12 items-center rounded-full bg-[#c74b2f] px-6 py-3 font-semibold text-[#fffaf2] transition-colors hover:bg-[#9f3825] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18201c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
            >
              Request a free website audit
            </Link>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default ContactsPage;

export function Head({ location }) {
  return (
    <Seo
      title="Contact Zulzidan | Discuss your website project"
      pathname={location?.pathname || "/contacts/"}
      description="Contact Muhammad Zulzidan about a business website, redesign, or website audit."
    />
  );
}
