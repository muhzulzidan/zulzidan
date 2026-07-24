import React, { useCallback, useRef, useState } from "react"
import { Link } from "gatsby"

import Menu from "./menu"
import LogoFull from "../svg/logoFull.svg"

const navigation = [
  { label: "Work", to: "/works/" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/about/" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = useCallback(({ restoreFocus = false } = {}) => {
    setIsOpen(false)

    if (restoreFocus && typeof window !== "undefined") {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus())
    }
  }, [])

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu({ restoreFocus: true })
      return
    }

    setIsOpen(true)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#18201c]/15 bg-[#f4efe7] text-[#18201c]">
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          className="relative z-50 flex min-h-11 shrink-0 items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7] [&_path]:fill-[#18201c]"
          activeClassName="active"
          to="/"
          aria-label="Zulzidan home"
          onClick={() => closeMenu()}
        >
          <LogoFull />
        </Link>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-7">
            {navigation.map(({ label, to }) => (
              <li key={to}>
                <Link
                  partiallyActive
                  activeClassName="text-[#8f3827]"
                  className="border-b border-transparent py-3 font-heading text-[0.95rem] font-medium tracking-[0.01em] transition-colors duration-200 hover:border-[#c74b2f] hover:text-[#8f3827] focus:outline-none focus-visible:border-[#c74b2f] focus-visible:text-[#8f3827]"
                  to={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            partiallyActive
            to="/audit-website/"
            className="rounded-full bg-[#c74b2f] px-5 py-3 font-heading text-sm font-semibold tracking-[0.01em] text-[#f4efe7] transition-colors duration-200 hover:bg-[#18201c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
          >
            Get a free audit
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          id="mobile-navigation-trigger"
          type="button"
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-[#18201c]/25 text-[#18201c] transition-colors duration-200 hover:border-[#c74b2f] hover:text-[#8f3827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe7] md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
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

        <Menu isOpen={isOpen} onClose={closeMenu} />
      </div>
    </header>
  )
}

export default Header
