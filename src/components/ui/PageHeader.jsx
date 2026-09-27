import Container from "./Container";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";

/**
 * Navy banner at the top of every inner page. Carries the page <h1>, so each
 * page has exactly one top-level heading.
 *
 * The titles in content.js are already uppercase and some of them are long
 * ("THE ACADEMIA-INDUSTRY BRIDGE", "EVENTS & INITIATIVES HIGHLIGHTS"), which
 * is exactly what a condensed display face is for — they only fit at this size
 * because Anton is narrow. The heading reveals word by word, matching the home
 * hero, so an inner page arrives with the same weight as the front door.
 *
 * Padding is deliberately generous at the top: the header above is sticky, and
 * a display heading needs clear air beneath it before it starts sliding under
 * the bar on scroll.
 */

/** The four pillar colours, as a rule under the title. */
const pillarDots = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
];

export default function PageHeader({ eyebrow, title, lede, children }) {
  return (
    <header className="relative isolate overflow-hidden bg-ink-900 pb-16 pt-20 text-white sm:pb-20 sm:pt-28">
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -bottom-40 -left-20 -z-10 h-80 w-80 rounded-full bg-grape-500/20 blur-3xl"
      />

      <Container className="relative">
        {eyebrow && (
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-halo-300"
          >
            {eyebrow}
          </Reveal>
        )}

        <SplitReveal
          as="h1"
          lines={title}
          delay={80}
          className={`display display-hero display-tight max-w-4xl ${eyebrow ? "mt-5" : ""}`}
        />

        <Reveal delay={320} className="mt-7 flex gap-2">
          {pillarDots.map((colour) => (
            <span key={colour} className={`h-1.5 w-10 rounded-full ${colour}`} />
          ))}
        </Reveal>

        {lede && (
          <Reveal
            as="p"
            delay={400}
            className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-halo-100"
          >
            {lede}
          </Reveal>
        )}
        {children}
      </Container>
    </header>
  );
}
