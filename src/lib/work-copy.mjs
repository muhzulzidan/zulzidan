// Shared English copy for the work index, case studies, and metadata.
// Keep CMS slugs stable so existing project links continue to work.
const englishCopy = {
  "abm-logistik-makassar-website-logistik": {
    title: "ABM Logistik Makassar — Logistics Website",
    description: "When I began working with ABM Logistik Makassar, the company did not yet have an official website. The challenge was to present its logistics services professionally and make them easy for customers to find.\n\nI built the website with Next.js for fast performance and chose Contentful so the team could update shipping services, pricing, and customer testimonials without technical expertise.\n\nThe design emphasizes simplicity and trust, two essentials in logistics. The result is an informative, accessible platform for prospective customers across Indonesia.",
  },
  "islamtshirt-islamic-fashion-and-dakwah": {
    title: "islamtshirt — Islamic Fashion & Outreach",
    description: "islamtshirt brings fashion and Islamic outreach together, using clothing as a creative way to share Islamic teachings. Originally built on Shopify, the website moved to GatsbyJS with Shopify providing its e-commerce functionality. Each purchase supports the project's mission to share its message through a modern, distinctive approach.",
  },
  "institut-indonesia": {
    description: "Institut Indonesia helps people develop skills in English, technology, and public speaking. I built the website to explain its programs, highlight the benefits of each course, and guide visitors through registration. The content emphasizes the value of building new skills and refreshing existing ones for today's workplace and the years ahead.",
  },
  "muhzulzidan-com-personal-blog": {
    description: "muhzulzidan.com is a personal blog covering technology, art, and perspectives on everyday life. As a contributing writer and the lead developer, I helped create its content and maintain website performance. The blog has averaged around 3,000 visitors per month, with several articles attracting thousands of views.",
  },
};

export function localizeWork(work) {
  const copy = englishCopy[work.slug];
  return {
    ...work,
    ...(copy?.title ? { title: copy.title } : {}),
    ...(copy?.description ? { description: { description: copy.description } } : {}),
    client: /^pribadi$/i.test(work.client) ? "Personal project" : work.client,
  };
}
