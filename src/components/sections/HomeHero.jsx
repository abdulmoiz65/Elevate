import Button from "../ui/Button";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { hero, site } from "../../data/content";

/**
 * Full-bleed hero.
 *
 * The promise line in content.js is four clauses separated by full stops, and
 * it is split here rather than in the data so the copy stays one sentence at
 * source. Stacked as four display lines it becomes the page's loudest object —
 * the device Enactus uses for "our / impact".
 *
 * The photograph sits behind a two-stop scrim (see `.scrim`) so white text is
 * legible over any part of it, with a very slow Ken Burns push so the section
 * is never completely still.
 */

const promiseLines = site.promise.split(". ").map((clause) => clause.replace(/\.$/, ""));

/** The four pillar colours, as a row of marks under the headline. */
const pillarDots = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
];

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[38rem] items-end overflow-hidden bg-ink-950 lg:min-h-[44rem]">
      {/* Backdrop */}
      <div className="ken-burns absolute inset-0 -z-10">
        <Picture
          src={hero.image}
          alt={hero.alt}
          sizes="100vw"
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="scrim absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="relative pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24">
        <Reveal
          as="p"
          variant="fade"
          className="text-xs font-semibold uppercase tracking-[0.34em] text-halo-200 sm:text-sm"
        >
          {site.tagline}
        </Reveal>

        <SplitReveal
          as="h1"
          lines={promiseLines}
          delay={120}
          className="display display-hero display-tight mt-6 max-w-4xl text-white"
        />

        <Reveal delay={420} className="mt-8 flex gap-2.5">
          {pillarDots.map((colour) => (
            <span key={colour} className={`h-1.5 w-12 rounded-full ${colour}`} />
          ))}
        </Reveal>

        <Reveal
          as="p"
          delay={500}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-ink-200 sm:text-lg"
        >
          {site.intro[0]}
        </Reveal>

        <Reveal delay={600} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/bridge" size="lg">
            Explore the bridge
            <Icon name="arrowRight" className="arrow-shift h-4 w-4" />
          </Button>
          <Button to="/contact" size="lg" variant="onDark">
            Work with us
          </Button>
        </Reveal>
      </Container>

      {/* Scroll affordance, as on the AIESEC hero. Decorative — the content
          below is reachable without it, so it is hidden from assistive tech. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 lg:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <Icon name="chevronDown" className="scroll-cue h-5 w-5" />
      </div>
    </section>
  );
}
