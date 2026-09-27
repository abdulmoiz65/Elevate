import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import useScrollProgress from "../../hooks/useScrollProgress";
import { bridge } from "../../data/content";

/**
 * LEARN -> CONNECT -> COLLABORATE -> INNOVATE -> IMPACT, as a scroll-linked
 * journey.
 *
 * This was five identical boxes in a row on navy, which stated the sequence
 * without ever showing it — the whole point of the line is that it is a
 * progression, and a static grid is the one shape that cannot express that.
 *
 * Now a rail fills as the section crosses the viewport and each stop lights up
 * as the fill reaches it, so the reader watches knowledge travel to impact
 * rather than reading a list of five words. That is what `.rail-fill` and
 * `useScrollProgress` were built for.
 *
 * The axis switch is in the CSS, not a `lg:` variant — see `.rail-fill` in
 * index.css for why that distinction matters.
 *
 * Horizontal on desktop, vertical on mobile — the rail is the same element
 * either way, scaled on a different axis.
 *
 * Accessibility: the fill is decorative. The list is a real <ol> in source
 * order, every stop is always in the DOM and readable, and the sr-only line
 * still carries the whole sequence as one string. Under reduced motion
 * `useScrollProgress` reports 1 immediately, so every stop renders lit.
 */

/** One accent per stop, from the logo's idea bubbles. Text steps, not fills. */
const stops = [
  { text: "text-brand-700", dot: "bg-brand-500" },
  { text: "text-aqua-700", dot: "bg-aqua-500" },
  { text: "text-gold-800", dot: "bg-gold-500" },
  { text: "text-grape-700", dot: "bg-grape-500" },
  { text: "text-leaf-700", dot: "bg-leaf-500" },
];

export default function KnowledgeFlow() {
  const [ref, progress] = useScrollProgress();

  // The raw 0-1 covers the element entering and leaving the viewport entirely.
  // Trimming the ends means the rail starts filling once the section is
  // properly on screen and is full well before it leaves, rather than only
  // completing as it disappears.
  const filled = Math.min(1, Math.max(0, (progress - 0.18) / 0.44));
  const lastIndex = bridge.flow.length - 1;

  return (
    <section
      ref={ref}
      className="bg-surface-subtle py-20 sm:py-28"
      aria-labelledby="flow-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
          >
            {bridge.title}
          </Reveal>
          <SplitReveal
            as="h2"
            id="flow-heading"
            lines={bridge.flowTitle}
            delay={80}
            className="display display-section display-tight mt-5 text-ink-900"
          />
        </div>

        <div className="relative mt-16">
          {/* Rail track, and the fill that rides the scroll over it. Horizontal
              from lg, vertical below — the same element on a different axis. */}
          <span
            aria-hidden="true"
            className="absolute left-7 top-0 h-full w-0.5 rounded-full bg-ink-200 lg:left-0 lg:top-7 lg:h-0.5 lg:w-full"
          />
          <span
            aria-hidden="true"
            style={{ "--progress": filled }}
            className="rail-fill absolute left-7 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-brand-500 via-gold-500 to-leaf-500 transition-transform duration-300 ease-out lg:left-0 lg:top-7 lg:h-0.5 lg:w-full lg:bg-gradient-to-r"
          />

          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
            {bridge.flow.map((step, index) => {
              const stop = stops[index];
              // Lit once the fill reaches this stop's position on the rail.
              const lit = filled >= index / lastIndex - 0.001;

              return (
                <li key={step} className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-0">
                  <span
                    aria-hidden="true"
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ring-4 ring-surface-subtle transition-all duration-500 ${
                      lit ? `${stop.dot} scale-100` : "scale-90 bg-ink-200"
                    }`}
                  >
                    <span className={`display text-lg ${lit ? "text-white" : "text-ink-400"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <div className="lg:mt-6">
                    <p
                      className={`display text-2xl transition-colors duration-500 sm:text-3xl ${
                        lit ? stop.text : "text-ink-300"
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal
          as="p"
          delay={200}
          className="mt-14 max-w-2xl text-pretty text-lg leading-relaxed text-ink-600"
        >
          {bridge.body[3]}
        </Reveal>

        {/* The whole sequence as one string, for anyone not seeing the rail. */}
        <p className="sr-only">{bridge.flowLine}</p>
      </Container>
    </section>
  );
}
