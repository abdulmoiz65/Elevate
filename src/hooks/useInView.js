import { useEffect, useRef, useState } from "react";

/**
 * Tells you when an element has scrolled into view.
 *
 * Fires once and then stops observing — content should settle after it appears,
 * not replay every time the reader scrolls past. Elements already on screen at
 * mount resolve immediately, so above-the-fold content animates in on load.
 *
 * If IntersectionObserver is missing, everything is reported visible rather
 * than left hidden.
 */
export default function useInView({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  // Without IntersectionObserver there is nothing to wait for, so start visible
  // rather than leaving content hidden.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
