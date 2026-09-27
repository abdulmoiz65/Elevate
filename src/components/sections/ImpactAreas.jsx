import AssetIcon from "../ui/AssetIcon";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { impact } from "../../data/content";

/**
 * The six impact areas, as a numbered editorial index.
 *
 * This was a six-up card grid with small icon chips — the same shape as the
 * program areas, which made two different sections read as the same section.
 * It is deliberately NOT another bento: the programs page owns tinted tiles,
 * so impact gets ruled rows instead. Large index numbers, a rule per item, and
 * no tile background at all.
 *
 * The note about figures is treated as content, not small print. Every
 * competitor in this category leads with counters, and Elevate has none
 * published yet — saying so plainly in a proper callout is more credible than
 * an italic line at 12px hoping nobody reads it, and far more credible than
 * inventing numbers.
 *
 * Accent steps are -700/-800, never the -500 fills. See README.md.
 */
const accents = [
  { text: "text-brand-700", rule: "bg-brand-500", icon: "bg-brand-700" },
  { text: "text-aqua-700", rule: "bg-aqua-500", icon: "bg-aqua-700" },
  { text: "text-grape-700", rule: "bg-grape-500", icon: "bg-grape-700" },
  { text: "text-gold-800", rule: "bg-gold-500", icon: "bg-gold-800" },
  { text: "text-crimson-700", rule: "bg-crimson-500", icon: "bg-crimson-700" },
  { text: "text-leaf-700", rule: "bg-leaf-500", icon: "bg-leaf-700" },
];

export default function ImpactAreas() {
  return (
    <section className="bg-surface-subtle py-20 sm:py-28" aria-labelledby="impact-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal
              as="p"
              variant="fade"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
            >
              {impact.title}
            </Reveal>
            <SplitReveal
              as="h2"
              id="impact-heading"
              lines={impact.lede.replace(/\.$/, "")}
              delay={80}
              className="display display-section display-tight mt-5 text-ink-900"
            />
          </div>

          <div className="lg:col-span-5">
            <Reveal as="p" delay={200} className="text-pretty text-lg leading-relaxed text-ink-600">
              {impact.body}
            </Reveal>
            <Reveal
              as="p"
              delay={280}
              className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-ink-500"
            >
              {impact.intro}
            </Reveal>
          </div>
        </div>

        <ol className="mt-14 grid gap-x-12 gap-y-10 sm:mt-16 sm:grid-cols-2">
          {impact.areas.map((area, index) => {
            const accent = accents[index];

            return (
              <Reveal as="li" key={area.name} delay={index * 80} className="group">
                <span aria-hidden="true" className={`block h-1 w-full rounded-full ${accent.rule}`} />

                <div className="mt-5 flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className={`display shrink-0 text-3xl leading-none sm:text-4xl ${accent.text}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-ink-200 transition-transform duration-500 group-hover:scale-110">
                        <AssetIcon src={area.icon} colorClass={accent.icon} className="h-6 w-6" />
                      </span>
                      <h3 className="display text-xl text-ink-900 sm:text-2xl">{area.name}</h3>
                    </div>

                    <p className="mt-3 text-pretty leading-relaxed text-ink-600">{area.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* The honesty note, given weight rather than hidden in small print. */}
        <Reveal
          delay={120}
          className="mt-16 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-200 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50"
          >
            <span className="display text-lg text-brand-700">!</span>
          </span>
          <p className="text-pretty leading-relaxed text-ink-700">{impact.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
