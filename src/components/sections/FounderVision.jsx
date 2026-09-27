import Container from "../ui/Container";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { founder } from "../../data/content";

/**
 * The founder's vision, given a full-bleed section.
 *
 * This is the page's loudest moment and it lands on a photograph rather than
 * on flat navy, because the sections either side of it are already flat navy
 * and a gradient CTA follows immediately after. The photograph is Synergy
 * Summit — "Academia Meets Industry" — which is the sentence above it, held.
 *
 * Two layers over the image, not one: `ink-950/80` flattens it to a tinted
 * ground so white type clears contrast anywhere in the section (the `.scrim`
 * alone only guarantees that near the bottom edge), then `.scrim` adds the
 * house floor and brand wash on top so this reads like the rest of the site's
 * full-bleed sections.
 */

const { vision } = founder;

// Display headings on this site never carry a trailing full stop — the home
// hero and the belief moment both strip theirs the same way. Stripped here
// rather than in content.js so the sentence stays a sentence at source.
const statement = vision.statement.replace(/\.$/, "");

/** A coloured rule per tile, cycling the four pillars plus the two accents. */
const ruleTones = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
  "bg-grape-500",
  "bg-crimson-500",
];

export default function FounderVision() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28"
      aria-labelledby="founder-vision-heading"
    >
      <div className="ken-burns absolute inset-0 -z-20">
        <Picture
          src={vision.image}
          alt=""
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/85" />
      <div aria-hidden="true" className="scrim absolute inset-0 -z-10" />

      <Container className="relative">
        <Reveal
          as="p"
          variant="fade"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-halo-300"
        >
          {vision.title}
        </Reveal>

        <SplitReveal
          as="h2"
          id="founder-vision-heading"
          lines={statement}
          delay={100}
          className="display display-hero display-tight mt-6 max-w-4xl text-white"
        />

        <Reveal
          as="p"
          delay={380}
          className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-halo-200"
        >
          {vision.intro}
        </Reveal>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vision.opportunities.map((item, index) => (
            <Reveal
              as="li"
              key={item}
              delay={420 + index * 80}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-colors duration-300 hover:border-white/35 hover:bg-white/10"
            >
              <span
                aria-hidden="true"
                className={`block h-1 w-10 rounded-full ${ruleTones[index % ruleTones.length]}`}
              />
              <p className="mt-4 text-pretty text-lg font-semibold leading-snug text-white">
                {item}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" delay={900} className="mt-10 text-xl font-semibold text-gold-500 sm:text-2xl">
          {vision.audience}
        </Reveal>
      </Container>
    </section>
  );
}
