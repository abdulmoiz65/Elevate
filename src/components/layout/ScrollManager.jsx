import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route-aware scrolling.
 *
 * - A plain navigation lands at the top of the new page.
 * - A navigation carrying a #hash smooth-scrolls to that element instead, which
 *   is what makes same-page anchor links glide rather than jump. (The CSS
 *   `scroll-behavior: smooth` in index.css covers plain in-page <a href="#..">;
 *   this covers links that arrive through the router.)
 * - Readers who prefer reduced motion get an instant jump.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
