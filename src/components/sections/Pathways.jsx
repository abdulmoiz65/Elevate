import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { bridge } from "../../data/content";

/**
 * Who the bridge is for: seven audiences and what it opens up for each.
 *
 * This was seven identical white cards in a stack — a table wearing card
 * costume. It is now a proper directory: full-width ruled rows, the audience
 * set large in display type, the outcome beside it, and an accent per row.
 * Nothing boxed, so seven rows read as one index rather than seven objects.
 *
 * The arrow is decorative; the two-column layout and the reading order already
 * carry "audience -> outcome" without it.
 *
 * Accent steps are -700/-800, never the -500 fills (see README.md).
 */
const accents = [
  { text: "text-brand-700", rule: "bg-brand-500", hover: "group-hover:bg-brand-50" },
  { text: "text-aqua-700", rule: "bg-aqua-500", hover: "group-hover:bg-aqua-50" },
  { text: "text-grape-700", rule: "bg-grape-500", hover: "group-hover:bg-grape-50" },
  { text: "text-gold-800", rule: "bg-gold-500", hover: "group-hover:bg-gold-50" },
  { text: "text-steel-700", rule: "bg-steel-500", hover: "group-hover:bg-steel-50" },
  { text: "text-ember-700", rule: "bg-ember-500", hover: "group-hover:bg-ember-50" },
  { text: "text-leaf-700", rule: "bg-leaf-500", hover: "group-hover:bg-leaf-50" },
];

export default function Pathways() {
  return (
    <section className="bg-surface-subtle py-20 sm:py-28" aria-labelledby="pathways-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
          >
            {bridge.pathways.length} audiences
          </Reveal>
          <SplitReveal
            as="h2"
            id="pathways-heading"
            lines={bridge.pathwaysIntro.replace(/:$/, "")}
            delay={80}
            className="display display-section display-tight mt-5 text-ink-900"
          />
        </div>

        <ul className="mt-14 border-t border-ink-200">
          {bridge.pathways.map((pathway, index) => {
            const accent = accents[index];

            return (
              <Reveal
                as="li"
                key={pathway.audience}
                delay={index * 60}
                className={`group relative border-b border-ink-200 transition-colors duration-300 ${accent.hover}`}
              >
                {/* Accent rule, drawn in from the left on hover. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${accent.rule}`}
                />

                <div className="grid gap-3 px-2 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4">
                  <span
                    aria-hidden="true"
                    className={`display text-sm sm:col-span-1 ${accent.text}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className={`display text-2xl sm:col-span-4 sm:text-3xl ${accent.text}`}>
                    {pathway.audience}
                  </h3>

                  <p className="flex items-start gap-3 text-pretty leading-relaxed text-ink-700 sm:col-span-7 sm:text-lg">
                    <Icon
                      name="arrowRight"
                      className="arrow-shift mt-1.5 hidden h-4 w-4 shrink-0 text-ink-400 sm:block"
                    />
                    <span>{pathway.outcome}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
