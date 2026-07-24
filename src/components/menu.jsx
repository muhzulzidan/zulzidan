import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

const navigation = [
  { label: "Work", to: "/works/" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/about/" },
]

const Menu = ({ isOpen, onClose }) => {
  const panelRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 0)

    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose({ restoreFocus: true })
        return
      }

      if (event.key !== "Tab") {
        return
      }

      const panelFocusableElements = Array.from(
        panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      )
      const menuTrigger = document.getElementById("mobile-navigation-trigger")
      const focusableElements = menuTrigger
        ? [...panelFocusableElements, menuTrigger]
        : panelFocusableElements

      if (!focusableElements.length) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-0 z-40 transition-[visibility] md:hidden ${
        isOpen
          ? "visible pointer-events-auto delay-0"
          : "invisible pointer-events-none delay-300"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 cursor-default bg-[#18201c]/45 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => onClose({ restoreFocus: true })}
        tabIndex={-1}
        aria-label="Close navigation menu"
      />

      <nav
        ref={panelRef}
        className={`absolute inset-y-0 right-0 flex w-[min(88vw,26rem)] flex-col border-l border-[#18201c]/15 bg-[#f4efe7] px-6 pb-8 pt-28 text-[#18201c] shadow-[-16px_0_48px_rgba(24,32,28,0.14)] transition-transform duration-300 ease-out sm:px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
      >
        <p className="mb-6 font-body text-xs uppercase tracking-[0.2em] text-[#18201c]/60">
          Explore Zulzidan
        </p>

        <ul className="border-t border-[#18201c]/15">
          {navigation.map(({ label, to }, index) => (
            <li key={to} className="border-b border-[#18201c]/15">
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                partiallyActive
                activeClassName="text-[#8f3827]"
                className="group flex items-center justify-between py-5 font-heading text-2xl font-semibold tracking-[-0.025em] transition-colors duration-200 hover:text-[#8f3827] focus:outline-none focus-visible:text-[#8f3827]"
                to={to}
                onClick={() => onClose()}
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
                <span
                  aria-hidden="true"
                  className="font-body text-base font-normal transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10">
          <p className="mb-4 max-w-xs font-body text-sm leading-6 text-[#18201c]/70">
            Find the gaps costing your website trust and enquiries.
          </p>
          <Link
            partiallyActive
            to="/audit-website/"
            className="flex w-full items-center justify-center rounded-full bg-[#c74b2f] px-5 py-3.5 font-heading text-sm font-semibold tracking-[0.01em] text-[#f4efe7] transition-colors duration-200 hover:bg-[#18201c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
            onClick={() => onClose()}
            tabIndex={isOpen ? 0 : -1}
          >
            Get a free audit
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Menu
