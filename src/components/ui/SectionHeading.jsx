/**
 * Shared section headline. `level` keeps the heading hierarchy correct — page
 * titles are <h1>, so most sections pass h2 and nested blocks pass h3.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  level: Heading = "h2",
  align = "center",
  tone = "light",
  className = "",
}) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";
  const titleTone = tone === "dark" ? "text-white" : "text-ink-900";
  const ledeTone = tone === "dark" ? "text-ink-300" : "text-ink-500";
  const eyebrowTone = tone === "dark" ? "text-halo-300" : "text-brand-600";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowTone}`}>
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={`mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl ${titleTone}`}
      >
        {title}
      </Heading>
      {lede && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${ledeTone}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
