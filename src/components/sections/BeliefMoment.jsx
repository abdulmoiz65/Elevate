import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { about } from "../../data/content";

/**
 * The belief line, given the whole viewport.
 *
 * "Academia creates knowledge. Industry creates opportunity. Elevate brings
 * them together." is the sharpest sentence in the source copy and it was set
 * as a small heading inside a card on the About page. Here it is the page's
 * second-loudest object after the hero.
 *
 * Deliberately no photograph. Every section around it is image-led, so a
 * type-only moment on deep navy changes the rhythm — and it means the section
 * costs nothing in bandwidth and cannot be let down by a weak stock choice.
 * The colour comes from the logo's accents instead, as two soft drifting washes.
 */

const [premiseOne, premiseTwo, conclusion] = about.belief.highlight
  .split(". ")
  .map((clause) => clause.replace(/\.$/, ""));

export default function BeliefMoment() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32"
      aria-labelledby="belief-heading"
    >
      {/* Accent washes, drifting at different rates so the field never settles. */}
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-grape-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute bottom-10 left-1/3 -z-10 h-64 w-64 rounded-full bg-aqua-500/15 blur-3xl"
      />

      <Container>
        <Reveal
          as="p"
          variant="fade"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-halo-300"
        >
          {about.belief.title}
        </Reveal>

        {/* The two premises are stated flat and the conclusion is the payoff,
            so it takes the accent colour and the others do not. */}
        <SplitReveal
          as="h2"
          id="belief-heading"
          lines={[premiseOne, premiseTwo]}
          delay={100}
          className="display display-tight mt-7 text-[2.5rem] text-white sm:text-6xl lg:text-7xl"
        />
        <SplitReveal
          as="p"
          lines={[conclusion]}
          delay={520}
          className="display display-tight mt-1 text-[2.5rem] text-gold-500 sm:text-6xl lg:text-7xl"
        />

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 sm:gap-10">
          {about.belief.body.map((paragraph, index) => (
            <Reveal
              as="p"
              key={paragraph}
              delay={620 + index * 110}
              className="text-pretty leading-relaxed text-ink-300"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
