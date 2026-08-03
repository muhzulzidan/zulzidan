"use client";

import dynamic from "next/dynamic";

const pages = {
  home: dynamic(() => import("@/views/index")),
  about: dynamic(() => import("@/views/about")),
  auditWebsite: dynamic(() => import("@/views/audit-website")),
  blogs: dynamic(() => import("@/views/blogs")),
  brandNewWeb: dynamic(() => import("@/views/brand-new-web")),
  contacts: dynamic(() => import("@/views/contacts")),
  demoCoffee: dynamic(() => import("@/views/demo-coffee")),
  jasaBone: dynamic(() => import("@/views/jasa-pembuatan-website-di-bone")),
  jasaWebsite: dynamic(() => import("@/views/jasa-pembuatan-website")),
  links: dynamic(() => import("@/views/links")),
  merdeka80: dynamic(() => import("@/views/merdeka80")),
  refundPolicy: dynamic(() => import("@/views/refund-policy")),
  services: dynamic(() => import("@/views/services")),
  works: dynamic(() => import("@/views/works")),
  blog: dynamic(() => import("@/templates/blog")),
  work: dynamic(() => import("@/templates/workTemplate")),
  notFound: dynamic(() => import("@/views/404")),
};

export default function LegacyPage({ page, ...props }) {
  const Component = pages[page];
  if (!Component) return null;
  return <Component {...props} />;
}
