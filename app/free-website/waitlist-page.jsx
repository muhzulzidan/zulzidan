import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import WaitlistForm from "./waitlist-form";
import styles from "./waitlist.module.css";

const faqs = [
  ["Is the website really free?", "Yes. If your application is selected, I design and build the agreed one-page website without a development fee. You cover your domain and any hosting or third-party services you choose. We agree on those costs before work starts. There is no required support subscription."],
  ["Why are you doing this?", "I'm Zulzidan, an independent web developer. Free website projects have helped me meet people who later introduced me to paying clients. This program is a way to build more of those relationships and show my work. Recommendations are welcome, but a referral, testimonial, or promotional post is not a condition of the free build."],
  ["Who is this for?", "Service businesses, consultants, independent professionals, and creative businesses that need a focused online home. You should have a real service to offer and be able to provide your logo, photos, service details, and feedback. You can apply with an existing website, a social profile, or no website yet."],
  ["Does joining guarantee a website?", "No. This is an application waitlist, not a reservation or a first-come, first-served queue. I review the scope, readiness, and available capacity. I'll contact you by email if there's a fit. There is no guaranteed selection date or launch date."],
  ["What if I need more than one page?", "The free program covers a focused one-page site. Online stores, booking systems, membership areas, custom integrations, ongoing edits, and larger websites need a separate scope. If you want additional paid work, we'll discuss it first. You're free to keep the agreed starter site without buying upgrades."],
  ["Will I own the website?", "You'll receive the agreed website files or repository and a handoff explaining the setup. Your domain should be registered in your own account. Any third-party tools remain subject to their own terms. We'll confirm the hosting arrangement and handoff before starting."],
];

export default function WaitlistPage() {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="Zulzidan home"><Image src="/wordmark.svg" width={114} height={36} alt="" priority /></Link>
        <nav aria-label="Main navigation">
          <a href="#the-work">The work</a><a href="#how-it-works">How it works</a><a href="#questions">Questions</a>
        </nav>
        <a className={styles.headerCta} href="#apply">Join the waitlist <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> The free website program</p>
            <h1 id="hero-title">Your next website.<br /><em>Built for free.</em></h1>
            <p className={styles.lead}>You do good work. Let’s give it a proper home online. I build focused, professional websites for selected service businesses—without a build fee.</p>
            <a className={styles.button} href="#apply">Apply for a free website <ArrowUpRight size={20} aria-hidden="true" /></a>
            <p className={styles.heroNote}>One page. Your brand. A clear next step for your customers.</p>
          </div>
          <aside className={styles.offer} aria-label="Offer at a glance">
            <div className={styles.offerTop}><span>THE STARTING POINT</span><ArrowDown size={18} aria-hidden="true" /></div>
            <p className={styles.price}>$0<span>design & build fee</span></p>
            <div className={styles.offerBody}>
              <p>A useful website.<br />A new connection.</p>
              <ul><li><Check size={16} aria-hidden="true" /> A custom one-page website</li><li><Check size={16} aria-hidden="true" /> Built for mobile and desktop</li><li><Check size={16} aria-hidden="true" /> Your files and a practical handoff</li></ul>
            </div>
            <p className={styles.offerFoot}>Selected applications. Domain, hosting, and paid tools are separate. No required subscription.</p>
          </aside>
        </section>

        <div className={styles.audience}><p>FOR PEOPLE WHO MAKE A LIVING HELPING OTHERS</p><div><span>Consultants</span><span>Creatives</span><span>Local services</span><span>Independent professionals</span></div></div>

        <section className={styles.work} id="the-work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>01 / Real work, real people</p><h2 id="work-title">A free build can be<br /><em>the start of something.</em></h2></div>
          <div className={styles.workGrid}>
            <a className={styles.projectImage} href="https://ayomsatrio.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Ayom Satrio's website (opens in a new tab)">
              <Image src="/work/ayomsatrio.png" alt="Selected website work for Ayom Satrio, showing his visual identity projects and personal brand." width={1448} height={1086} sizes="(max-width: 760px) 100vw, 62vw" />
              <span>Ayom Satrio <ArrowUpRight size={20} aria-hidden="true" /></span>
            </a>
            <div className={styles.workCopy}>
              <span className={styles.smallLabel}>THE IDEA BEHIND THE PROGRAM</span>
              <h3>Good work travels<br />through good people.</h3>
              <p>I’m Zulzidan, a web developer. I’ve built free websites for people including Ayom Satrio and Iksan Bangsawan. Those relationships have led to projects through their clients.</p>
              <p>I’m opening that approach to more service businesses. You get a useful website; I get to show what I can do and meet people I might work with in the future.</p>
              <p className={styles.workHonesty}>No referral quota. No required promotional post. Just a clear project and a chance to work together.</p>
              <a className={styles.textLink} href="https://iksanbangsawan.com" target="_blank" rel="noopener noreferrer">Visit Iksan Bangsawan’s website <ArrowUpRight size={16} aria-hidden="true" /></a>
              <Link className={styles.textLink} href="/works/">Explore more of my work <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.scope} aria-labelledby="scope-title">
          <div><p className={styles.eyebrow}>02 / A clear, focused offer</p><h2 id="scope-title">Small in scope.<br /><em>Properly put together.</em></h2><p>A clear introduction, your services, proof of your work, and an easy way to get in touch. Enough to give your business a credible home online.</p></div>
          <div className={styles.scopeDetails}>
            <div><h3>The free build includes</h3><ul><li>One page designed around your existing brand</li><li>Responsive development for phones and larger screens</li><li>Service, portfolio, or testimonial sections using your content</li><li>A clear contact action and basic page metadata</li><li>One consolidated revision round and a handoff</li></ul></div>
            <div><h3>What you bring</h3><p>Your business details, logo, images, content, and timely feedback. You pay for your domain and any hosting or paid tools. Any extra pages, integrations, or ongoing support are optional, separately agreed work.</p></div>
          </div>
        </section>

        <section className={styles.process} id="how-it-works" aria-labelledby="process-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>03 / From application to launch</p><h2 id="process-title">Start with a little<br /><em>about your business.</em></h2></div>
          <ol><li><span>01</span><h3>Tell me what you need.</h3><p>Share your business, what you do, and what a useful website would help you do next.</p></li><li><span>02</span><h3>Let’s check the fit.</h3><p>I review applications as capacity allows. If yours is a fit, I’ll email you to agree on scope, content, and timing.</p></li><li><span>03</span><h3>Build, review, hand over.</h3><p>We work through the agreed one-page site, one round of feedback, and the handoff. No paid upgrade required.</p></li></ol>
        </section>

        <section className={styles.application} id="apply" aria-labelledby="apply-title">
          <div className={styles.applicationIntro}><p className={styles.eyebrow}>04 / Make an introduction</p><h2 id="apply-title">Let’s put your<br /><em>business out there.</em></h2><p>Tell me a little about your business and the website you have in mind. I read the applications myself.</p><div className={styles.applicationNote}><strong>A waitlist, with a clear promise.</strong><p>Applying is free. Selection depends on fit and capacity, and isn’t guaranteed. You won’t be charged or added to a newsletter by joining.</p></div><a className={styles.textLink} href="mailto:mail@zulzidan.com">A question before you apply? <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <WaitlistForm enabled={Boolean(process.env.LEADS_DATABASE_URL && process.env.ADMIN_SESSION_SECRET)} />
        </section>

        <section className={styles.faq} id="questions" aria-labelledby="questions-title"><div><p className={styles.eyebrow}>05 / Before you apply</p><h2 id="questions-title">Fair questions.<br /><em>Straight answers.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      </main>

      <footer className={styles.footer}><div><Link className={styles.logo} href="/" aria-label="Zulzidan home"><Image src="/wordmark.svg" width={114} height={36} alt="" /></Link><p>Independent web developer.<br />Good websites. Lasting connections.</p></div><nav aria-label="Footer navigation"><Link href="/works/">Selected work</Link><Link href="/start/">Discuss a paid project</Link><Link href="/privacy/">Privacy</Link><a href="mailto:mail@zulzidan.com">mail@zulzidan.com</a></nav><p className={styles.copyright}>© {new Date().getFullYear()} Zulzidan</p></footer>
    </div>
  );
}
