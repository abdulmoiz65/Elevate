import { useEffect, useState } from "react";
import Icon from "./Icon";

/**
 * Back-to-top button.
 *
 * Appears once the reader is roughly a screenful down and returns them to the
 * top of the page. Ringed in the four pillar colours so it reads as part of the
 * brand rather than a stray browser control.
 *
 * It has no position of its own — ChatWidget places it in the floating stack
 * directly above the chat launcher, and hides the whole stack while the chat
 * panel is open so the two never overlap.
 */

/** Far enough down that the button is a shortcut, not clutter over the hero. */
const SHOW_AFTER = 400;

export default function ScrollToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!shown) return null;

  // Same rule as ScrollManager: readers who prefer reduced motion get an
  // instant jump rather than a long glide up the page.
  const toTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? "instant" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className="fab-in btn-motion relative grid h-11 w-11 place-items-center rounded-full bg-white shadow-lg"
    >
      <span className="pillar-ring absolute inset-0 rounded-full" aria-hidden="true" />
      <span className="absolute inset-[3px] rounded-full bg-white" aria-hidden="true" />
      <Icon name="chevronUp" className="relative h-5 w-5 text-ink-700" />
    </button>
  );
}
