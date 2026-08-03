import Link from "next/link";

import styles from "./EditorialChrome.module.css";

const exploreLinks = [
  { label: "Work", href: "/works/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about/" },
  { label: "Free website audit", href: "/audit-website/" },
];

const connectLinks = [
  { label: "Email", href: "mailto:mail@zulzidan.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhzulzidan/" },
  { label: "Instagram", href: "https://www.instagram.com/muhzulzidan/" },
];

export default function EditorialFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerIntroduction}>
            <Link href="/" className={styles.footerWordmark}>
              Zulzidan
            </Link>
            <p>
              Clearer, more credible websites for service businesses ready to
              turn attention into better enquiries.
            </p>
          </div>

          <nav className={styles.footerColumn} aria-label="Footer navigation">
            <p className={styles.footerLabel}>Explore</p>
            <ul>
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footerColumn}>
            <p className={styles.footerLabel}>Connect</p>
            <ul>
              {connectLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
              <li>
                <Link href="/jasa-pembuatan-website/">Bahasa Indonesia</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {year} Muhammad Zulzidan M.</p>
          <div className={styles.footerLegal}>
            <Link href="/refund-policy/">Refund and support policy</Link>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
