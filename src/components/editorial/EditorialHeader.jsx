"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./EditorialChrome.module.css";

const navigation = [
  { label: "Work", href: "/works/", route: "/works" },
  { label: "Services", href: "/#services", route: "/services" },
  { label: "About", href: "/about/", route: "/about" },
];

function isCurrentRoute(pathname, route) {
  return pathname === route || pathname.startsWith(`${route}/`);
}

export default function EditorialHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);

  const closeMenu = useCallback(({ restoreFocus = false } = {}) => {
    setIsOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu({ restoreFocus: true });
      return;
    }

    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 0);
    const desktopQuery = window.matchMedia("(min-width: 48rem)");

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu({ restoreFocus: true });
        return;
      }

      if (event.key !== "Tab") return;

      const panelElements = Array.from(
        panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
      const focusableElements = menuButtonRef.current
        ? [menuButtonRef.current, ...panelElements]
        : panelElements;

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handleBreakpointChange = (event) => {
      if (event.matches) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [closeMenu, isOpen]);

  return (
    <header id="top" className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          className={styles.wordmark}
          href="/"
          aria-label="Zulzidan home"
          onClick={() => closeMenu()}
        >
          <span aria-hidden="true">
            Zulzidan<sup>©</sup>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul className={styles.desktopNavList}>
            {navigation.map(({ label, href, route }) => {
              const isActive = isCurrentRoute(pathname, route);

              return (
                <li key={href}>
                  <Link
                    className={`${styles.desktopNavLink} ${isActive ? styles.activeNavLink : ""}`}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/audit-website/"
            className={styles.auditButton}
            aria-current={
              isCurrentRoute(pathname, "/audit-website") ? "page" : undefined
            }
          >
            Get a free audit
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          id="editorial-mobile-navigation-trigger"
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="editorial-mobile-navigation"
          aria-expanded={isOpen}
        >
          <svg
            aria-hidden="true"
            className={styles.menuIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {isOpen ? (
              <>
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        <div
          id="editorial-mobile-navigation"
          className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ""}`}
          aria-hidden={!isOpen}
        >
          <button
            type="button"
            className={styles.mobileBackdrop}
            onClick={() => closeMenu({ restoreFocus: true })}
            tabIndex={-1}
            aria-label="Close navigation menu"
          />

          <div
            ref={panelRef}
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <p className={styles.mobileEyebrow}>Explore Zulzidan</p>

            <nav aria-label="Mobile navigation">
              <ul className={styles.mobileNavList}>
                {navigation.map(({ label, href, route }, index) => {
                  const isActive = isCurrentRoute(pathname, route);

                  return (
                    <li key={href}>
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        className={`${styles.mobileNavLink} ${isActive ? styles.activeMobileLink : ""}`}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => closeMenu({ restoreFocus: true })}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        <span>{label}</span>
                        <span aria-hidden="true" className={styles.mobileArrow}>
                          ↗
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.mobileCallout}>
              <p>Find the gaps costing your website trust and enquiries.</p>
              <Link
                href="/audit-website/"
                className={styles.mobileAuditButton}
                onClick={() => closeMenu({ restoreFocus: true })}
                tabIndex={isOpen ? 0 : -1}
              >
                Get a free audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
