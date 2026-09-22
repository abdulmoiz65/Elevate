/**
 * An endlessly scrolling strip.
 *
 * The track holds `items` twice and animates to -50%, so the second copy is
 * exactly where the first started and the loop is seamless. The duplicate is
 * `aria-hidden`, so the strip reads once to a screen reader rather than
 * stuttering through the same words twice.
 *
 * It pauses on hover and on focus within (see `.marquee` in index.css) so a
 * reader can finish a line, and it stops moving entirely under reduced motion.
 *
 * Props
 *   items      array of strings
 *   duration   seconds for one full pass (default 34)
 *   reverse    scroll right-to-left instead
 *   tone       "dark" (default) | "light" | "brand"
 */

const tones = {
  dark: "bg-ink-950 text-white",
  light: "bg-surface-subtle text-ink-900",
  brand: "bg-brand-600 text-white",
};

const separatorTones = {
  dark: "text-gold-500",
  light: "text-brand-500",
  brand: "text-halo-200",
};

export default function Marquee({
  items,
  duration = 34,
  reverse = false,
  tone = "dark",
  className = "",
}) {
  const run = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center whitespace-nowrap">
          <span className="display px-6 text-2xl sm:px-9 sm:text-3xl lg:text-4xl">{item}</span>
          <span className={`text-xl ${separatorTones[tone]}`} aria-hidden="true">
            &bull;
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""} ${tones[tone]} py-5 ${className}`}>
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` }}>
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
