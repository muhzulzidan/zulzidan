import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#f4efe7]/15 bg-[#18201c] px-5 py-14 text-[#f4efe7] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center font-serif text-4xl tracking-[-0.04em] hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]"
            >
              Zulzidan
            </Link>
            <p className="mt-4 max-w-md leading-relaxed text-[#cfc8bd]">
              Clearer, more credible websites for service businesses ready to
              turn attention into better enquiries.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e78b6c]">
              Explore
            </p>
            <ul className="mt-4">
              <li><Link to="/works/" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">Work</Link></li>
              <li><Link to="/#services" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">Services</Link></li>
              <li><Link to="/about/" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">About</Link></li>
              <li><Link to="/audit-website/" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">Free website audit</Link></li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e78b6c]">
              Connect
            </p>
            <ul className="mt-4">
              <li><a href="mailto:mail@zulzidan.com" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">Email</a></li>
              <li><a href="https://www.linkedin.com/in/muhzulzidan/" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/muhzulzidan/" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">Instagram</a></li>
              <li><Link to="/jasa-pembuatan-website/" className="-ml-1 inline-flex min-h-11 items-center px-1 hover:text-[#f3a388] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]">Bahasa Indonesia</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#f4efe7]/15 pt-6 text-sm text-[#a9aaa3] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Muhammad Zulzidan M.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/refund-policy/"
              className="inline-flex min-h-11 items-center border-0 bg-transparent p-0 hover:text-[#f4efe7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]"
            >
              Refund and support policy
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex min-h-11 items-center border-0 bg-transparent p-0 hover:text-[#f4efe7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e78b6c]"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
