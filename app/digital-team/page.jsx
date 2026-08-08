import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LayoutDashboard,
  MessageCircle,
  MousePointerClick,
  PenTool,
  Settings2,
  Sparkles,
  UsersRound,
  Workflow,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import founderImage from "@/images/generated/muhammad-zulzidan-founder-portrait-v2.png";
import brandLogo from "@/images/logoFull.png";
import { pageMetadata } from "@/lib/site";

import styles from "./digital-team.module.css";

export const metadata = pageMetadata.digitalTeam;

const whatsappNumber = "6281354789375";
const whatsappLink = (message) =>
  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

const fitCallLink = whatsappLink(
  "Hi Zulzidan, I'd like to discuss having a dedicated digital team for my organization."
);

const sprintLink = whatsappLink(
  "Hi Zulzidan, I'd like to start with the $500 Starter Sprint."
);

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Build",
    text: "Landing pages, website features, internal dashboards, portals, and event systems.",
    tags: ["Web development", "Custom systems", "Portals"],
  },
  {
    icon: Wrench,
    number: "02",
    title: "Run",
    text: "Maintenance, CMS updates, bug fixes, analytics, and ongoing technical support.",
    tags: ["CMS", "Maintenance", "Analytics"],
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Grow",
    text: "SEO improvements, newsletters, content support, and conversion-focused updates.",
    tags: ["SEO", "Content", "Newsletters"],
  },
  {
    icon: Workflow,
    number: "04",
    title: "Automate",
    text: "AI workflows, n8n automation, CRM connections, and practical API integrations.",
    tags: ["AI", "n8n", "Integrations"],
  },
];

const plans = [
  {
    name: "Digital Department",
    price: "$2,000",
    cadence: "/ month",
    label: "Full partnership",
    description: "For organizations with a continuous development, automation, and operations backlog.",
    bestFor: "Best for an embedded, long-term digital partner.",
    featured: true,
    features: [
      "Website, CMS, content, and technical support",
      "Two active workstreams at a time",
      "Priority development and new features",
      "Internal dashboards and custom portals",
      "AI automation and n8n workflows",
      "CRM, API, and event-system integrations",
      "Weekly working sessions",
      "Monthly strategy and roadmap planning",
      "Greater dedicated team capacity",
    ],
    cta: "Discuss on WhatsApp",
    href: whatsappLink(
      "Hi Zulzidan, I'd like to discuss the $2,000/month Digital Department plan."
    ),
  },
  {
    name: "Growth Team",
    price: "$1,000",
    cadence: "/ month",
    label: "Ongoing support",
    description: "For growing teams that need reliable support and steady improvements without another hire.",
    bestFor: "Best for nonprofits, startups, and growing businesses.",
    features: [
      "One active workstream at a time",
      "Website maintenance and improvements",
      "CMS management and technical support",
      "Landing pages through the work queue",
      "Basic on-page SEO",
      "AI-assisted content and newsletters",
      "Analytics reporting",
      "Light workflow improvements",
      "Weekly updates and monthly planning",
    ],
    cta: "Discuss on WhatsApp",
    href: whatsappLink(
      "Hi Zulzidan, I'd like to discuss the $1,000/month Growth Team plan."
    ),
  },
  {
    name: "Starter Sprint",
    price: "$500",
    cadence: "/ 5 days",
    label: "Low-risk pilot",
    description: "Five focused business days to solve one clear priority and experience how we work.",
    bestFor: "Best for a landing page, fixes, CMS cleanup, or launch support.",
    features: [
      "One clearly agreed outcome",
      "Short kickoff and scope confirmation",
      "Dedicated point of contact",
      "Five business days of execution",
      "Website, CMS, or small workflow work",
      "Handoff and next-step recommendations",
    ],
    cta: "Book on WhatsApp",
    href: sprintLink,
  },
];

const faqs = [
  {
    question: "Is the team dedicated exclusively to us?",
    answer:
      "You receive assigned capacity and a consistent team that learns your business. It is not an exclusive group of full-time employees unless that is separately agreed.",
  },
  {
    question: "Is the amount of work unlimited?",
    answer:
      "You can add requests to the queue at any time, but delivery capacity is not unlimited. Growth Team moves one active workstream at a time, while Digital Department can move two. Larger initiatives are split into clear milestones.",
  },
  {
    question: "How quickly will requests be completed?",
    answer:
      "Small updates can often move within a few business days. Larger features and integrations are divided into milestones, with timing agreed before each substantial piece of work begins.",
  },
  {
    question: "Can we begin with a Sprint?",
    answer:
      "Yes. The Starter Sprint is a practical, low-risk way for both sides to test the working relationship before moving into a monthly partnership.",
  },
  {
    question: "Are software and third-party costs included?",
    answer:
      "No. Hosting, paid software, API usage, advertising spend, stock assets, and other third-party fees stay separate and are approved before purchase.",
  },
  {
    question: "How does working with a team in Indonesia work?",
    answer:
      "We are based in Indonesia and structured for remote collaboration. Meeting overlap, response windows, communication channels, and delivery expectations are agreed during onboarding.",
  },
];

function PrimaryLink({ href, children, className = "" }) {
  return (
    <a className={`${styles.primaryButton} ${className}`} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy, invert = false }) {
  return (
    <div className={`${styles.sectionIntro} ${invert ? styles.sectionIntroInvert : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className={styles.sectionCopy}>{copy}</p> : null}
    </div>
  );
}

export default function DigitalTeamPage() {
  const year = new Date().getFullYear();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zulzidan Digital Team",
    description:
      "A fractional digital team for web development, automation, content, and digital operations.",
    provider: {
      "@type": "Organization",
      name: "Zulzidan",
      url: "https://zulzidan.com",
    },
    areaServed: "Worldwide",
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price.replace(/[$,]/g, ""),
      priceCurrency: "USD",
      description: plan.description,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className={styles.siteHeader}>
        <div className={styles.shell}>
          <Link className={styles.brand} href="/" aria-label="Zulzidan home">
            <Image className={styles.logo} src={brandLogo} alt="Zulzidan" priority />
            <span className={styles.brandDivider} aria-hidden="true" />
            <span>Digital team</span>
          </Link>
          <nav className={styles.nav} aria-label="Landing page navigation">
            <a href="#capabilities">What we do</a>
            <a href="#partnership">Why us</a>
            <a href="#plans">Plans</a>
          </nav>
          <a className={styles.headerCta} href={fitCallLink} target="_blank" rel="noreferrer">
            WhatsApp
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </header>

      <main>
      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>
              <span className={styles.statusDot} aria-hidden="true" />
              Your fractional digital team
            </p>
            <h1>
              Your digital department.
              <span>Without the full-time overhead.</span>
            </h1>
            <p className={styles.heroLead}>
              A coordinated team for web development, automation, content, and digital operations—moving your priority work forward for one predictable fee.
            </p>
            <div className={styles.heroActions}>
              <PrimaryLink href={fitCallLink}>Chat with us on WhatsApp</PrimaryLink>
              <a className={styles.secondaryButton} href="#plans">
                See the plans
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
            <p className={styles.reassurance}>
              <CheckCircle2 aria-hidden="true" size={16} />
              No hourly invoices. One point of contact. Clear weekly priorities.
            </p>
          </div>

          <div className={styles.workboardWrap} aria-label="Example digital team priority board">
            <div className={styles.workboardGlow} aria-hidden="true" />
            <div className={styles.workboard}>
              <div className={styles.boardHeader}>
                <div>
                  <p>Sample priority board</p>
                  <span>An example month in motion</span>
                </div>
                <span className={styles.livePill}>
                  <span aria-hidden="true" /> Sample
                </span>
              </div>

              <div className={styles.boardMetrics}>
                <div>
                  <span>Active focus</span>
                  <strong>Website conversion</strong>
                </div>
                <div>
                  <span>Next up</span>
                  <strong>Lead workflow</strong>
                </div>
              </div>

              <div className={styles.taskList}>
                <div className={`${styles.taskCard} ${styles.taskCardActive}`}>
                  <div className={styles.taskIcon}><Globe2 size={18} aria-hidden="true" /></div>
                  <div>
                    <span className={styles.taskLabel}>BUILD</span>
                    <strong>Campaign landing page</strong>
                  </div>
                  <span className={styles.progressPill}>In progress</span>
                </div>
                <div className={styles.taskCard}>
                  <div className={styles.taskIcon}><Workflow size={18} aria-hidden="true" /></div>
                  <div>
                    <span className={styles.taskLabel}>AUTOMATE</span>
                    <strong>Lead follow-up flow</strong>
                  </div>
                  <span className={styles.queuePill}>Queued</span>
                </div>
                <div className={styles.taskCard}>
                  <div className={styles.taskIcon}><Gauge size={18} aria-hidden="true" /></div>
                  <div>
                    <span className={styles.taskLabel}>IMPROVE</span>
                    <strong>Analytics dashboard</strong>
                  </div>
                  <Check aria-hidden="true" className={styles.doneIcon} size={19} />
                </div>
              </div>

              <div className={styles.boardTeam}>
                <div className={styles.avatarStack} aria-hidden="true">
                  <span>DEV</span><span>SYS</span><span>CON</span><span>OPS</span>
                </div>
                <p><strong>One coordinated team</strong><br />Shared context, fewer handoffs</p>
              </div>
            </div>
            <div className={styles.boardNote}>
              <Sparkles aria-hidden="true" size={16} />
              <span>Strategy and execution, finally in the same room.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.audienceStrip} aria-label="Who this service is for">
        <div className={styles.shell}>
          <p>Built for teams with more ideas than digital capacity</p>
          <div>
            <span>Nonprofits</span>
            <span>Associations</span>
            <span>Startups</span>
            <span>Growing businesses</span>
          </div>
        </div>
      </section>

      <section className={styles.problemSection} id="partnership">
        <div className={`${styles.shell} ${styles.problemGrid}`}>
          <SectionIntro
            eyebrow="(01) The real bottleneck"
            title="Your backlog isn’t the problem. Fragmented ownership is."
            copy="When every update, campaign, bug, and workflow needs a different freelancer or agency, progress slows before the work even begins."
          />

          <div className={styles.comparison}>
            <div className={styles.comparisonColumn}>
              <div className={styles.comparisonHeading}>
                <X aria-hidden="true" size={18} />
                <span>The scattered model</span>
              </div>
              <ul>
                <li>Brief the developer</li>
                <li>Chase the designer</li>
                <li>Find an automation specialist</li>
                <li>Coordinate content and CMS work</li>
                <li>Repeat the context every time</li>
              </ul>
            </div>
            <div className={`${styles.comparisonColumn} ${styles.comparisonColumnGood}`}>
              <div className={styles.comparisonHeading}>
                <Check aria-hidden="true" size={18} />
                <span>The embedded model</span>
              </div>
              <ul>
                <li>One priority queue</li>
                <li>One accountable project lead</li>
                <li>Multiple complementary skills</li>
                <li>Context that compounds over time</li>
                <li>Consistent weekly momentum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.capabilitiesSection} id="capabilities">
        <div className={styles.shell}>
          <div className={styles.capabilitiesHeader}>
            <SectionIntro
              eyebrow="(02) One integrated team"
              title="Build, run, grow, and automate—with one partner."
              copy="You bring the priorities. We coordinate the people, workflow, and delivery."
            />
            <a className={styles.textLink} href="#plans">
              Find your level of support <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map(({ icon: Icon, number, title, text, tags }) => (
              <article className={styles.capabilityCard} key={title}>
                <div className={styles.capabilityTop}>
                  <span>{number}</span>
                  <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={styles.tagList}>
                  {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.proofSection}>
        <div className={`${styles.shell} ${styles.proofGrid}`}>
          <div className={styles.proofCopy}>
            <p className={styles.eyebrow}>(03) Partnership in practice</p>
            <p className={styles.proofKicker}>TASFRL</p>
            <h2>Embedded in the organization—not waiting outside it.</h2>
            <p>
              What began as digital support grew into a team that understood TASFRL&apos;s content, workflows, technology, and goals. That context made every next project easier to move forward.
            </p>
            <p className={styles.proofNote}>
              This is the model: a long-term team that becomes more useful as it learns your organization.
            </p>
            <Link
              className={styles.proofLink}
              href="/works/texas-agriforestry-small-farmers-ranchers-and-landowners-tasfrl/"
            >
              Explore the TASFRL case study <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>

          <div className={styles.proofWorkstreams}>
            <p className={styles.workstreamLabel}>ONE TEAM ACROSS THE WORK</p>
            <div className={styles.workstreamGrid}>
              <div><Globe2 aria-hidden="true" /><span>Web & CMS</span></div>
              <div><PenTool aria-hidden="true" /><span>Content</span></div>
              <div><Workflow aria-hidden="true" /><span>Workflows</span></div>
              <div><LayoutDashboard aria-hidden="true" /><span>Systems</span></div>
            </div>
            <div className={styles.contextLine}>
              <span>Shared context</span>
              <div aria-hidden="true"><i /><i /><i /><i /></div>
              <span>Better momentum</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.shell}>
          <SectionIntro
            eyebrow="(04) How the partnership works"
            title="From scattered requests to steady progress."
            copy="No timesheets for you to manage and no vague promise of unlimited work—just clear priorities and visible delivery."
          />

          <div className={styles.processGrid}>
            <article>
              <span>01</span>
              <div className={styles.processIcon}><MessageCircle aria-hidden="true" size={22} /></div>
              <h3>Start with a fit conversation</h3>
              <p>We discuss your goals, current stack, backlog, and where work keeps getting stuck.</p>
            </article>
            <article>
              <span>02</span>
              <div className={styles.processIcon}><Layers3 aria-hidden="true" size={22} /></div>
              <h3>Set the first priorities</h3>
              <p>We turn the most valuable requests into one clear, manageable roadmap.</p>
            </article>
            <article>
              <span>03</span>
              <div className={styles.processIcon}><Zap aria-hidden="true" size={22} /></div>
              <h3>Ship, review, improve</h3>
              <p>Your team executes while weekly updates and monthly planning keep everything aligned.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection} id="plans">
        <div className={styles.shell}>
          <div className={styles.pricingHeader}>
            <SectionIntro
              eyebrow="(05) Simple, predictable plans"
              title="Choose the level of partnership you need."
              copy="Clear delivery capacity and one coordinated team. No hourly invoices to decode."
              invert
            />
            <div className={styles.priceAnchor}>
              <UsersRound aria-hidden="true" size={22} />
              <p><strong>More than one skill set.</strong><br />Less overhead than building a department.</p>
            </div>
          </div>

          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ""}`} key={plan.name}>
                <div className={styles.planTop}>
                  <span className={styles.planLabel}>{plan.label}</span>
                  {plan.featured ? <span className={styles.recommended}>Best partnership</span> : null}
                </div>
                <h3>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.priceLine}>
                  <strong>{plan.price}</strong>
                  <span>USD {plan.cadence}</span>
                </div>
                <div className={styles.planRule} />
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" size={17} strokeWidth={2.4} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.bestFor}>{plan.bestFor}</p>
                <a className={styles.planCta} href={plan.href} target="_blank" rel="noreferrer">
                  {plan.cta}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </article>
            ))}
          </div>

          <div className={styles.capacityNote}>
            <Settings2 aria-hidden="true" size={20} />
            <p>
              <strong>How capacity works:</strong> Growth moves one active workstream at a time; Digital Department moves two. Add as many requests as you need to the shared queue, then prioritize them with us. Complex initiatives are split into visible milestones.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={`${styles.shell} ${styles.fitGrid}`}>
          <SectionIntro
            eyebrow="(06) A good working fit"
            title="For organizations that value continuity over quick handoffs."
          />
          <div className={styles.fitLists}>
            <div>
              <p className={styles.fitLabel}><CheckCircle2 aria-hidden="true" size={18} /> A strong fit if you…</p>
              <ul>
                <li>Have recurring digital work, not just one isolated task</li>
                <li>Want one accountable partner across several disciplines</li>
                <li>Value a team that learns your business over time</li>
                <li>Want steady progress without building in-house</li>
              </ul>
            </div>
            <div>
              <p className={`${styles.fitLabel} ${styles.fitLabelMuted}`}><X aria-hidden="true" size={18} /> Probably not a fit if you need…</p>
              <ul>
                <li>Unlimited same-day requests</li>
                <li>Round-the-clock or on-call staffing</li>
                <li>A large fixed-scope app on an unrealistic deadline</li>
                <li>Anonymous production with no collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`${styles.shell} ${styles.faqGrid}`}>
          <div>
            <SectionIntro
              eyebrow="(07) Before we work together"
              title="Straight answers to sensible questions."
              copy="A good partnership starts with clear expectations."
            />
            <div className={styles.faqPrompt}>
              <Bot aria-hidden="true" size={22} />
              <p>Still unsure which plan fits?<br /><a href={fitCallLink} target="_blank" rel="noreferrer">Ask us directly.</a></p>
            </div>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className={styles.faqPlus} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={`${styles.shell} ${styles.founderCard}`}>
          <div className={styles.founderImageWrap}>
            <Image
              src={founderImage}
              alt="Muhammad Zulzidan, founder of Zulzidan"
              className={styles.founderImage}
              sizes="(max-width: 760px) 300px, 330px"
            />
          </div>
          <div className={styles.founderCopy}>
            <p className={styles.eyebrow}>(08) Meet the founder</p>
            <h2>A team relationship with a directly accountable lead.</h2>
            <p>
              I&apos;m Muhammad Zulzidan. Since 2019, I&apos;ve helped businesses and organizations turn complex digital work into clear websites, useful systems, and steady improvements. I stay close to the strategy, coordinate the team, and make sure the work keeps serving the bigger goal.
            </p>
            <div className={styles.founderSignals} aria-label="Founder experience highlights">
              <span>Working in digital since 2019</span>
              <span>International client experience</span>
              <span>Based in Indonesia, working globally</span>
            </div>
            <p className={styles.founderName}>Muhammad Zulzidan <span>Founder &amp; digital lead</span></p>
            <div className={styles.founderActions}>
              <Link className={styles.founderPrimaryLink} href="/about/">
                Learn more about me <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link className={styles.founderSecondaryLink} href="/works/">
                View selected work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalOrb} aria-hidden="true" />
        <div className={styles.shell}>
          <p className={styles.eyebrow}>(09) Your next priority starts here</p>
          <h2>Stop coordinating vendors.<br />Start moving one list forward.</h2>
          <p>Tell us what is stuck. We&apos;ll recommend the right level of support and outline the first priorities we would tackle.</p>
          <div className={styles.finalActions}>
            <PrimaryLink href={fitCallLink} className={styles.finalPrimary}>Chat with us on WhatsApp</PrimaryLink>
            <a href={sprintLink} target="_blank" rel="noreferrer" className={styles.finalSecondary}>
              Ask about the $500 Sprint <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
          <span className={styles.noPressure}>No hard sell. If we aren&apos;t the right fit, we&apos;ll tell you.</span>
        </div>
      </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <div className={styles.footerBrand}>
            <Image className={styles.logo} src={brandLogo} alt="Zulzidan" />
            <p>Your remote digital department, based in Indonesia and built for global collaboration.</p>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/about/">About</Link>
            <Link href="/works/">Work</Link>
            <Link href="/blogs/">Blog</Link>
            <Link href="/services/">Services</Link>
            <Link href="/audit-website/">Free audit</Link>
            <Link href="/refund-policy/">Refund policy</Link>
            <a href={fitCallLink} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <p className={styles.copyright}>© {year} Zulzidan</p>
        </div>
      </footer>

      <div className={styles.mobileBar}>
        <div>
          <span>Starter Sprint</span>
          <strong>$500 USD</strong>
        </div>
        <a href={fitCallLink} target="_blank" rel="noreferrer">
          WhatsApp <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </div>
  );
}
