import { getBlogs, getWorks } from "@/lib/contentful";
import { SITE_URL } from "@/lib/site";

export default async function sitemap() {
  const [blogs, works] = await Promise.all([
    getBlogs().catch(() => []),
    getWorks().catch(() => []),
  ]);
  const staticPaths = ["", "about", "audit-website", "blogs", "brand-new-web", "contacts", "demo-coffee", "digital-team", "jasa-pembuatan-website", "jasa-pembuatan-website-di-bone", "links", "merdeka80", "refund-policy", "services", "start", "works"];
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}/${path}${path ? "/" : ""}`, changeFrequency: "monthly", priority: path ? 0.7 : 1 })),
    ...blogs.map(({ slug, date }) => ({ url: `${SITE_URL}/blogs/${slug}/`, lastModified: date, changeFrequency: "monthly", priority: 0.8 })),
    ...works.map(({ slug }) => ({ url: `${SITE_URL}/works/${slug}/`, changeFrequency: "yearly", priority: 0.7 })),
  ];
}
