import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import EditorialFooter from "@/components/editorial/EditorialFooter";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import { createMetadata } from "@/lib/site";
import styles from "./portfolio.module.css";

export const metadata = createMetadata({
  title: "Websites for businesses and creatives",
  description:
    "Selected websites by independent developer Muhammad Zulzidan. Explore TASFRL in Texas, creative portfolios, and interactive demos, then let's talk about your website.",
  path: "/",
  image: "/social/zulzidan-portfolio-v1.png",
});

const tasfrlPath =
  "/works/texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl/";

const projects = [
  {
    name: "Ayom Satrio",
    type: "Client work · Designer portfolio",
    description:
      "A home for a visual identity designer's work, expertise, and personal brand.",
    image: "/work/ayomsatrio.png",
    alt: "Ayom Satrio website preview with visual identity projects and designer portfolio",
    href: "/works/ayomsatrio-com-sales-page/",
    action: "View project",
  },
  {
    name: "MOOI Filters",
    type: "Client work · E-commerce",
    description:
      "A clean product website that brings the brand story and shopping journey together.",
    image: "/work/mooi-filters.webp",
    alt: "MOOI Filters website preview showing its shower filters and product presentation",
    href: "/works/mooi-filters-premium-and-affordable-shower-filter-in-bali/",
    action: "View project",
  },
  {
    name: "3D interaction lab",
    type: "Concept demo · Interactive 3D",
    description:
      "An experimental playground for visual storytelling and cursor-driven 3D interactions.",
    image: "/demos/demo-kala-senja.jpg",
    alt: "Interactive 3D concept with a cluster of blue, black, and white sculptural objects",
    href: "https://kala-senja-atelier.vercel.app/",
    action: "Open live demo",
    external: true,
  },
];

const services = [
  ["01", "Websites & portfolios", "A clear, memorable home for your business or creative work, designed around your brand and built for phones and larger screens."],
  ["02", "Interactive experiences", "Creative landing pages, motion, and 3D experiments for projects that need a more expressive presence."],
  ["03", "Ongoing digital support", "Website improvements, content, and useful workflows for organizations with work to keep moving."],
];

export default function HomePage() {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <EditorialHeader />
      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Independent web developer · Working worldwide</p>
            <h1 id="hero-title">Good work deserves a <em>great website.</em></h1>
            <p className={styles.lead}>I'm Zulzidan. I build websites for businesses, creatives, and organizations that want their online presence to feel as good as the work they do.</p>
            <div className={styles.actions}>
              <a className={styles.button} href="#selected-work">See selected work <ArrowDown size={18} aria-hidden="true" /></a>
              <Link className={styles.textLink} href="/free-website/">Request a free starter website <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <p className={styles.heroNote}>Based in Indonesia. Building for people here and abroad.</p>
          </div>

          <article className={styles.flagship}>
            <Link className={styles.projectLink} href={tasfrlPath} aria-label="Explore TASFRL, a client project in Texas, USA">
              <div className={styles.featuredImage}>
                <Image src="/work/tasfrl.webp" alt="TASFRL website and land-service intake previews for a Texas nonprofit" width={1448} height={1086} sizes="(min-width: 1280px) 640px, (min-width: 900px) 52vw, calc(100vw - 40px)" priority />
                <span className={styles.imageLabel}>Featured client project</span>
              </div>
              <div className={styles.featuredCaption}>
                <div><p className={styles.eyebrow}>Texas, USA · Ongoing partnership</p><h2>TASFRL <ArrowUpRight size={26} aria-hidden="true" /></h2></div>
                <p>A website and digital platform for farmers, ranchers, and landowners.</p>
              </div>
            </Link>
            <p className={styles.featuredDetail}>Texas AgriForestry Small Farmers, Ranchers, and Landowners. Public website, service intake, member accounts, and ongoing support.</p>
          </article>
        </section>

        <section className={styles.work} id="selected-work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>01 / A closer look</p><h2 id="work-title">Different businesses.<br /><em>Distinct websites.</em></h2></div>
            <Link className={styles.textLink} href="/works/">Explore all selected work <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article key={project.name} className={styles.project}>
                <Link className={styles.projectLink} href={project.href} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined} aria-label={`${project.action}: ${project.name}${project.external ? " (opens in a new tab)" : ""}`}>
                  <div className={styles.projectImage}><Image src={project.image} alt={project.alt} width={1448} height={1086} sizes="(min-width: 1280px) 400px, (min-width: 760px) 31vw, calc(100vw - 40px)" /></div>
                  <p className={styles.projectType}>{project.type}</p>
                  <h3>{project.name} <ArrowUpRight size={22} aria-hidden="true" /></h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <span className={styles.projectAction}>{project.action} <ArrowUpRight size={16} aria-hidden="true" /></span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.services} id="services" aria-labelledby="services-title">
          <div className={styles.servicesIntro}>
            <p className={styles.eyebrow}>02 / How I can help</p>
            <h2 id="services-title">A useful website.<br /><em>A direct collaboration.</em></h2>
            <p>You work with me from the first conversation through the build and handoff. We start with what you need, then agree on the scope and next steps.</p>
            <Link className={styles.textLink} href="/start/">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <ol className={styles.serviceList}>{services.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title">
          <div><p className={styles.eyebrow}>03 / Let's make an introduction</p><h2 id="contact-title">Have something<br /><em>in mind?</em></h2><p>Send me a little about your work and the website you'd like to build. A conversation is a good place to start.</p><a className={styles.button} href="mailto:mail@zulzidan.com">Let's talk about your website <ArrowUpRight size={19} aria-hidden="true" /></a></div>
          <aside className={styles.starter}><p className={styles.eyebrow}>Starting small?</p><h3>The free starter<br />website program.</h3><p>A focused one-page website for service businesses and independent creatives. Tell me what you have in mind, and we'll see whether the scope and timing fit.</p><Link className={styles.textLink} href="/free-website/">Request a free starter website <ArrowUpRight size={18} aria-hidden="true" /></Link><p className={styles.starterNote}>Available by project fit and capacity. Domain, hosting, and paid tools are separate.</p></aside>
        </section>
      </main>
      <EditorialFooter />
    </div>
  );
}
