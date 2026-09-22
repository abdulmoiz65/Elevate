import Button from "../ui/Button";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { contact } from "../../data/content";
import { contactLink } from "../../data/navigation";

/**
 * Closing band that hands the reader on to the Contact page.
 *
 * It appears at the foot of every page, so it is the last thing anyone sees —
 * it was a flat brand-600 rectangle with a 24px heading, which is not the note
 * to end on. It now carries the same `brand-700 -> brand-600 -> ink-900`
 * diagonal the chat panel header uses, so the gradient reads as a house
 * device rather than a one-off, with the drifting accent washes from the page
 * headers layered over it.
 *
 * White text clears 5.31:1 at the lightest point of that gradient (brand-600)
 * and 14.26:1 at the darkest, so the copy is legible across the whole sweep.
 */

/** The four pillar colours, as a rule under the heading. */
const pillarDots = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
];

export default function ClosingCta() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-ink-900 py-16 text-white sm:py-20"
      aria-labelledby="closing-cta-heading"
    >
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-halo-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -bottom-28 right-0 -z-10 h-80 w-80 rounded-full bg-grape-500/25 blur-3xl"
      />

      <Container className="relative flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-halo-200"
          >
            {contact.lede}
          </Reveal>

          <SplitReveal
            as="h2"
            id="closing-cta-heading"
            lines={contact.closing.replace(/\.$/, "")}
            delay={80}
            className="display display-tight mt-5 text-4xl sm:text-5xl lg:text-6xl"
          />

          <Reveal delay={300} className="mt-7 flex gap-2">
            {pillarDots.map((colour) => (
              <span key={colour} className={`h-1.5 w-10 rounded-full ${colour}`} />
            ))}
          </Reveal>
        </div>

        <Reveal variant="right" delay={220} className="shrink-0">
          <Button to={contactLink.to} variant="onDark" size="lg">
            {contactLink.label}
            <Icon name="arrowRight" className="arrow-shift h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
