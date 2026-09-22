import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { bridge } from "../../data/content";

/**
 * The two banks and the span between them.
 *
 * The copy is already a bridge: universities on one side, industry on the
 * other, Elevate joining them. It was laid out as three equal cards in a row —
 * Universities, Industry, then Elevate tacked on the end — which is the one
 * arrangement that does not show the relationship the sentences describe.
 *
 * Reordered so Elevate sits BETWEEN the two banks, with a rule running through
 * all three. The span is the only filled panel, so the eye lands on it; the
 * banks are tinted in their own accents and set back.
 *
 * On mobile the row becomes a column and the connector turns vertical, so the
 * sequence still reads bank -> span -> bank rather than collapsing into a list.
 */
export default function BridgeIntro() {
  const [statement, universities, industry, connects] = bridge.body;

  return (
    <section className="py-20 sm:py-28" aria-labelledby="bridge-intro-heading">
      <Container>
        <div className="max-w-3xl">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
          >
            {bridge.title}
          </Reveal>
          <SplitReveal
            as="h2"
            id="bridge-intro-heading"
            lines={statement.replace(/\.$/, "")}
            delay={80}
            className="display display-tight mt-5 text-3xl text-ink-900 sm:text-4xl lg:text-5xl"
          />
        </div>

        {/* The rule the three panels sit on. Horizontal from lg, vertical below. */}
        <div className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-200 via-ink-300 to-aqua-200 lg:left-0 lg:top-1/2 lg:h-0.5 lg:w-full lg:-translate-x-0 lg:-translate-y-1/2 lg:bg-gradient-to-r"
          />

          <div className="relative grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
            <Reveal variant="left" className="rounded-2xl bg-brand-50 p-7 ring-1 ring-brand-500/20">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                One bank
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-ink-700">{universities}</p>
            </Reveal>

            {/* The span. The only filled panel, and the only one in display type. */}
            <Reveal
              variant="scale"
              delay={200}
              className="grid place-items-center rounded-2xl bg-gradient-to-br from-brand-700 via-brand-600 to-ink-900 p-8 text-center shadow-xl"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-halo-200">
                  The span
                </p>
                <p className="display mt-3 text-2xl text-white sm:text-3xl">
                  {connects.replace(/\.$/, "")}
                </p>
              </div>
            </Reveal>

            <Reveal
              variant="right"
              delay={100}
              className="rounded-2xl bg-aqua-50 p-7 ring-1 ring-aqua-500/20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua-700">
                The other
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-ink-700">{industry}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
