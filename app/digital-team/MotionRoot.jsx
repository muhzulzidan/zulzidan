"use client";

import { useEffect, useRef } from "react";

export default function MotionRoot({ children, className }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!root || reduceMotion) return undefined;

    const revealItems = Array.from(root.querySelectorAll("[data-reveal]"));
    root.dataset.motionReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className} data-motion-root>
      {children}
    </div>
  );
}
