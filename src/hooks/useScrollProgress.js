import { useEffect, useRef, useState } from "react";

/**
 * How far an element has travelled through the viewport, as 0 to 1.
 *
 * 0 when its top edge first reaches the bottom of the viewport, 1 once its
 * bottom edge has passed the top. Drives the LEARN -> IMPACT progress rail and
 * the parallax offsets — anything that should move *with* the scroll rather
 * than fire once on entry, which is what `useInView` is for.
 *
 * Reads are coalesced into one rAF per frame, so several of these on a page
 * still only measure once per frame. Returns 1 (finished) when there is no
 * IntersectionObserver or the reader prefers reduced motion, so callers get a
 * settled value rather than a stuck-at-zero one.
 */
export default function useScrollProgress() {
  const ref = useRef(null);
  // Resolved at init rather than in the effect: a reader who prefers reduced
  // motion should never see the pre-scroll state, and setting it from inside an
  // effect would render once at 0 before correcting itself.
  const [progress, setProgress] = useState(() => {
    if (typeof window === "undefined") return 1;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Already settled at 1 by the initialiser; nothing to track.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Total distance the element travels from "just below the fold" to
      // "just above it". Guarded so a zero-height node cannot divide by zero.
      const distance = rect.height + viewport || 1;
      const travelled = viewport - rect.top;
      setProgress(Math.min(1, Math.max(0, travelled / distance)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, progress];
}
