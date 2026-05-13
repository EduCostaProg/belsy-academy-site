"use client";

import { useEffect } from "react";

const NAV_OFFSET = 80;

export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest(
        "a[href^='#']",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (href === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
        history.replaceState(null, "", location.pathname + location.search);
        return;
      }

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      e.preventDefault();

      const top =
        target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      window.scrollTo({
        top,
        behavior: reduced ? "auto" : "smooth",
      });

      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
