import useInView from "../../hooks/useInView";

/**
 * Scroll-reveal wrapper — the single entry point for entrance animation.
 *
 * Every animated block on the site goes through this component so that timing,
 * distance and easing stay identical everywhere. The motion itself lives in
 * index.css under `.reveal`, which also carries the reduced-motion guard.
 *
 * Props
 *   variant  up | fade | scale | left | right   (default "up")
 *   delay    milliseconds, used to stagger items in a grid
 *   as       element to render (default "div")
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { ...style, "--reveal-delay": `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  );
}
