export const SITE_URL = "https://zulzidan.com";

export const SITE = {
  name: "Zulzidan",
  title: "zulzidan, jasa pembuatan web",
  description:
    "Layanan pembuatan website profesional yang disesuaikan dengan kebutuhan Anda. Dapatkan website yang menarik dan fungsional yang mewakili bisnis Anda.",
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
    title: SITE.title,
    description:
      "Beberapa hal yang menggambarkan Zulzidan adalah pembuatan web, jasa pembuatan web di Bone, Digital Marketer, dan Web Developer.",
  }),
  about: createMetadata({
    title: "About Muhammad Zulzidan",
    description: "Web developer and digital marketer based in Bone, Indonesia.",
    path: "/about/",
  }),
  blogs: createMetadata({
    title: "Blog by Muhammad Zulzidan",
    description: "Articles and practical insights about web development and digital marketing.",
    path: "/blogs/",
  }),
  works: createMetadata({
    title: "Selected Works by Muhammad Zulzidan",
    description: "A showcase of web projects and designs by Muhammad Zulzidan.",
    path: "/works/",
  }),
  services: createMetadata({
    title: "Services by Muhammad Zulzidan",
    description: "Website development and digital marketing services for growing businesses.",
    path: "/services/",
  }),
  digitalTeam: createMetadata({
    title: "Your Dedicated Digital Team",
    description:
      "A coordinated remote team for web development, automation, content, CMS, and digital operations—for one predictable monthly fee.",
    path: "/digital-team/",
  }),
  contacts: createMetadata({ title: "Contacts | Zulzidan", path: "/contacts/" }),
  links: createMetadata({ title: "Muhammad Zulzidan — Links", path: "/links/" }),
  auditWebsite: createMetadata({
    title: "Audit Website - Zulzidan",
    description: "Audit website gratis untuk kecepatan, SEO, UX, dan keamanan.",
    path: "/audit-website/",
  }),
  brandNewWeb: createMetadata({
    title: "Are You Ready for a Brand New Web?",
    description: "Migrate your WordPress site to a faster Next.js setup.",
    path: "/brand-new-web/",
  }),
  demoCoffee: createMetadata({
    title: "Demo CoffeeFest Merdeka — Zulzidan",
    description: "Demo landing page satu halaman untuk promo event.",
    path: "/demo-coffee/",
  }),
  jasaWebsite: createMetadata({
    title: "Bangun Toko Online Profesionalmu Bersama Kami!",
    path: "/jasa-pembuatan-website/",
  }),
  jasaBone: createMetadata({
    title: "Jasa Pembuatan Website di Bone - Zulzidan",
    description: "Jasa pembuatan website di Bone dengan desain kustom dan optimisasi SEO.",
    path: "/jasa-pembuatan-website-di-bone/",
  }),
  merdeka80: createMetadata({
    title: "Promo Landing Page Merdeka 80% — Zulzidan",
    path: "/merdeka80/",
  }),
  refundPolicy: createMetadata({
    title: "Kebijakan Pengembalian Dana - Zulzidan",
    description: "Kebijakan pengembalian dana untuk layanan Zulzidan.",
    path: "/refund-policy/",
  }),
};
