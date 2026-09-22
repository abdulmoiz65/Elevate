import AssetIcon from "../ui/AssetIcon";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { programs } from "../../data/content";

/**
 * The nine program areas, as an asymmetric bento grid.
 *
 * The grid itself was right and is unchanged — nine identical tiles in a 3x3
 * is what made this page look templated, and varied spans fixed that. What
 * changed is the ground: it was deep navy, which left the site running two
 * different treatments once the home and events pages settled on light rows.
 *
 * It is not converted to rows, though. These are nine icon-and-text items with
 * no photography; as full-width rows they would be nine tall, empty bands. A
 * bento is the right shape for this content, so the layout stays and only the
 * palette moves. That keeps a real difference between the pages — rows where
 * there are photographs, tiles where there are not — rather than a cosmetic one.
 *
 * Each tile is tinted in its own accent rather than left white, so the section
 * carries colour without any of it landing on type: titles are ink-900 on a
 * -50 tint (12.3:1 at worst) and body copy ink-600 (6.4:1 at worst). The
 * accent itself only ever does chrome — icon, rule, watermark, ring.
 */

/** One entry per program, in the order they appear in content.js. */
const accents = [
  { tile: "bg-gold-50", ring: "ring-gold-500/25", rule: "bg-gold-500", icon: "bg-gold-800", mark: "text-gold-500/25" },
  { tile: "bg-brand-50", ring: "ring-brand-500/25", rule: "bg-brand-500", icon: "bg-brand-700", mark: "text-brand-500/25" },
  { tile: "bg-steel-50", ring: "ring-steel-500/25", rule: "bg-steel-500", icon: "bg-steel-700", mark: "text-steel-500/25" },
  { tile: "bg-aqua-50", ring: "ring-aqua-500/25", rule: "bg-aqua-500", icon: "bg-aqua-700", mark: "text-aqua-500/25" },
  { tile: "bg-grape-50", ring: "ring-grape-500/25", rule: "bg-grape-500", icon: "bg-grape-700", mark: "text-grape-500/25" },
  { tile: "bg-ember-50", ring: "ring-ember-500/25", rule: "bg-ember-500", icon: "bg-ember-700", mark: "text-ember-500/25" },
  { tile: "bg-crimson-50", ring: "ring-crimson-500/25", rule: "bg-crimson-500", icon: "bg-crimson-700", mark: "text-crimson-500/25" },
  { tile: "bg-brand-50", ring: "ring-brand-500/25", rule: "bg-brand-500", icon: "bg-brand-700", mark: "text-brand-500/25" },
  { tile: "bg-leaf-50", ring: "ring-leaf-500/25", rule: "bg-leaf-500", icon: "bg-leaf-700", mark: "text-leaf-500/25" },
];

/** 3+3 / 2+2+2 / 2+2+2 / 6 — four exact rows of a six-column grid. */
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6",
];

export default function ProgramGrid() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="programs-heading">
      <Container>
        {/* The PageHeader above already carries this as the page <h1>, so the
            section heading exists for structure without repeating it on screen. */}
        <h2 id="programs-heading" className="sr-only">
          {programs.title}
        </h2>

        <Reveal as="p" variant="fade" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
          {programs.items.length} program areas
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {programs.items.map((program, index) => {
            const accent = accents[index];
            const isWide = spans[index] === "lg:col-span-6";
            const isFeature = spans[index] === "lg:col-span-3";

            return (
              <Reveal
                as="li"
                key={program.name}
                delay={index * 70}
                className={`tile group relative isolate overflow-hidden rounded-[1.5rem] shadow-sm ring-1 hover:shadow-xl ${accent.tile} ${accent.ring} ${spans[index]}`}
              >
                {/* Accent rule across the top, drawn in on hover. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${accent.rule}`}
                />
                {/* The index, as a watermark rather than a badge. */}
                <span
                  aria-hidden="true"
                  className={`display pointer-events-none absolute -bottom-6 right-4 -z-10 text-[6.5rem] leading-none ${accent.mark}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={`flex h-full gap-6 p-7 sm:p-8 ${isWide ? "flex-col lg:flex-row lg:items-center" : "flex-col"}`}>
                  {/* White chip so the icon reads cleanly off its own tint. */}
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                    <AssetIcon src={program.icon} colorClass={accent.icon} className="h-7 w-7" />
                  </span>

                  <div className={isWide ? "lg:flex-1" : ""}>
                    <h3
                      className={`display text-ink-900 ${isWide ? "text-3xl sm:text-4xl" : isFeature ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
                    >
                      {program.name}
                    </h3>
                    <p
                      className={`mt-3 text-pretty leading-relaxed text-ink-600 ${isFeature || isWide ? "text-base" : "text-sm"}`}
                    >
                      {program.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
