export const SITE_URL = "https://zulzidan.com";

export const SITE = {
  name: "Zulzidan",
  title: "Zulzidan — Conversion-focused websites for service businesses",
  description:
    "I help service businesses turn unclear or outdated websites into credible sales assets with clearer messaging, stronger mobile UX, and an easier path to enquiry.",
  url: SITE_URL,
  image: "/meCircle.png",
  twitter: "@muhzulzidan",
};

export function createMetadata({ title, description = SITE.description, path = "/", image = SITE.image, noIndex = false }) {
  const canonical = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image || SITE.image, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      images: [{ url: imageUrl }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: SITE.twitter,
      images: [imageUrl],
    },
  };
}

export const pageMetadata = {
  home: createMetadata({
    title: "Conversion-focused websites for service businesses",
    description:
      "I help service businesses turn unclear or outdated websites into credible sales assets with clearer messaging, stronger mobile UX, and an easier path to enquiry.",
  }),
  about: createMetadata({
    title: "About Muhammad Zulzidan — Independent Web Specialist",
    description:
      "Meet Muhammad Zulzidan, an independent web specialist helping service businesses turn complex work into clear websites, useful systems, and stronger paths to enquiry.",
    path: "/about/",
  }),
  blogs: createMetadata({
    title: "Blog by Muhammad Zulzidan",
    description: "Articles and practical insights about web development and digital marketing.",
    path: "/blogs/",
  }),
  works: createMetadata({
    title: "Case Studies and Selected Work",
    description:
      "Selected website and digital-system work across service businesses, logistics, nonprofits, and consumer brands.",
    path: "/works/",
  }),
  services: createMetadata({
    title: "Website and Digital Team Services",
    description:
      "Conversion-focused websites and ongoing digital-team support for organizations that need clearer systems and steady execution.",
    path: "/services/",
  }),
  digitalTeam: createMetadata({
    title: "Your Dedicated Digital Team",
    description:
      "A coordinated remote team for web development, automation, content, CMS, and digital operations—for one predictable monthly fee.",
    path: "/digital-team/",
  }),
  contacts: createMetadata({ title: "Contact Muhammad Zulzidan", path: "/contacts/" }),
  links: createMetadata({ title: "Links and Contact", path: "/links/" }),
  auditWebsite: createMetadata({
    title: "Free Website Audit",
    description: "Audit website gratis untuk kecepatan, SEO, UX, dan keamanan.",
    path: "/audit-website/",
  }),
  brandNewWeb: createMetadata({
    title: "Are You Ready for a Brand New Web?",
    description: "Migrate your WordPress site to a faster Next.js setup.",
    path: "/brand-new-web/",
  }),
  demoCoffee: createMetadata({
    title: "CoffeeFest Merdeka Landing Page Demo",
    description: "Demo landing page satu halaman untuk promo event.",
    path: "/demo-coffee/",
  }),
  jasaWebsite: createMetadata({
    title: "Bangun Toko Online Profesionalmu Bersama Kami!",
    path: "/jasa-pembuatan-website/",
  }),
  jasaBone: createMetadata({
    title: "Jasa Pembuatan Website di Bone",
    description: "Jasa pembuatan website di Bone dengan desain kustom dan optimisasi SEO.",
    path: "/jasa-pembuatan-website-di-bone/",
  }),
  merdeka80: createMetadata({
    title: "Promo Landing Page Merdeka 80%",
    path: "/merdeka80/",
  }),
  refundPolicy: createMetadata({
    title: "Kebijakan Pengembalian Dana",
    description: "Kebijakan pengembalian dana untuk layanan Zulzidan.",
    path: "/refund-policy/",
  }),
};
