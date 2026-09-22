import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { mission, vision } from "../../data/content";

/**
 * Mission and vision, as a two-part statement spread.
 *
 * These were two equal cards with a coloured bar on top — the most generic
 * shape on the site, for the two sentences that define the organization. The
 * boxes are gone: a rule, a display label and the sentence set large enough to
 * actually read as a statement. Nothing else competes with the words.
 *
 * Accent steps are -700, never the -500 fills (see README.md); the saturated
 * colour only does the rule.
 */
const statements = [
  { ...mission, text: "text-brand-700", rule: "bg-brand-500", wash: "bg-brand-500/10" },
  { ...vision, text: "text-aqua-700", rule: "bg-aqua-500", wash: "bg-aqua-500/10" },
];

export default function MissionVision() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface-subtle py-20 sm:py-28"
      aria-labelledby="mission-vision-heading"
    >
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-aqua-500/10 blur-3xl"
      />

      <Container>
        <h2 id="mission-vision-heading" className="sr-only">
          Our mission and vision
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {statements.map((statement, index) => (
            <Reveal
              as="article"
              key={statement.title}
              variant={index === 0 ? "left" : "right"}
              delay={index * 140}
              className={index === 1 ? "md:border-l md:border-ink-200 md:pl-16" : ""}
            >
              <span aria-hidden="true" className={`block h-1 w-16 rounded-full ${statement.rule}`} />

              <SplitReveal
                as="h3"
                lines={statement.title}
                delay={index * 140 + 80}
                className={`display mt-6 text-3xl sm:text-4xl ${statement.text}`}
              />

              <p className="mt-6 text-pretty text-xl leading-relaxed text-ink-800 sm:text-2xl">
                {statement.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
