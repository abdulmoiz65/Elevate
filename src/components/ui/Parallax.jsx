import useScrollProgress from "../../hooks/useScrollProgress";

/**
 * Moves its child slightly against the scroll.
 *
 * The outer element is the measured one and stays put; the inner element
 * carries the transform. That split matters — measuring an element you are
 * also transforming feeds its own offset back into the next measurement.
 *
 * Keep `strength` small. Past about 60px the image visibly detaches from the
 * text beside it, which reads as a bug rather than as depth. The transform is
 * dropped entirely under reduced motion by `.parallax` in index.css.
 *
 * Props
 *   strength   peak offset in px, applied as -strength at the bottom of the
 *              viewport through to +strength at the top (default 40)
 */
export default function Parallax({ strength = 40, className = "", innerClassName = "", children }) {
  const [ref, progress] = useScrollProgress();

  // progress runs 0 -> 1 as the element crosses the viewport; centre it so the
  // element sits at its natural position halfway through.
  const offset = (progress - 0.5) * 2 * strength;

  return (
    <div ref={ref} className={className}>
      <div className={`parallax ${innerClassName}`} style={{ "--parallax": `${offset.toFixed(1)}px` }}>
        {children}
      </div>
    </div>
  );
}
