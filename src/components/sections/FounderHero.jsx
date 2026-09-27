import Container from "../ui/Container";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { founder } from "../../data/content";

/**
 * The top of the Meet the Founder page.
 *
 * It does not use `PageHeader` like the other inner pages do. A founder page
 * is a portrait page: the name has to carry it, and the banner needs a second
 * column to put a face in. So this is the page header, written out — same navy
 * ground, same drifting washes, same pillar rule, so it still belongs to the
 * set — with the name stacked over two lines at hero scale instead of one.
 *
 * **No photograph of the founder has been supplied.** Rather than leave a grey
 * rectangle where a face goes, the second column is a monogram medallion: her
 * initials on deep navy inside the logo's four pillar colours, turning slowly.
 * It is a deliberate object rather than an obvious gap, and the moment
 * `founder.portrait` is set to an image path the photograph takes its place
 * inside the same ring with nothing else to change.
 */

const pillarDots = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
];

/** One pillar colour per expertise chip, cycled so the row reads as the set. */
const chipDots = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
  "bg-grape-500",
];

export default function FounderHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pb-20 pt-20 text-white sm:pb-24 sm:pt-28">
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -bottom-40 -left-20 -z-10 h-80 w-80 rounded-full bg-grape-500/20 blur-3xl"
      />

      <Container className="relative grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal
            as="p"
            variant="fade"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-halo-300"
          >
            {founder.title}
          </Reveal>

          <SplitReveal
            as="h1"
            lines={founder.nameLines}
            delay={80}
            className="display display-name display-tight mt-5"
          />

          <Reveal
            as="p"
            delay={300}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-gold-500"
          >
            {founder.role}
          </Reveal>

          <Reveal delay={360} className="mt-7 flex gap-2">
            {pillarDots.map((colour) => (
              <span key={colour} className={`h-1.5 w-10 rounded-full ${colour}`} />
            ))}
          </Reveal>

          <Reveal
            as="p"
            delay={420}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-halo-100"
          >
            {founder.lede}
          </Reveal>

          {/* The five fields named in the source paragraph, listed rather than
              run together — a reader scanning the page gets them in one look. */}
          <div className="mt-10">
            <Reveal
              as="p"
              delay={480}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-300"
            >
              {founder.expertiseLabel}
            </Reveal>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {founder.expertise.map((area, index) => (
                <Reveal
                  as="li"
                  key={area}
                  variant="scale"
                  delay={540 + index * 70}
                  className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-halo-100 backdrop-blur"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full ${chipDots[index % chipDots.length]}`}
                  />
                  {area}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Portrait column */}
        <Reveal variant="scale" delay={220} className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[22rem]">
            <div
              aria-hidden="true"
              className="drift absolute -inset-6 -z-10 rounded-full bg-brand-500/20 blur-3xl"
            />

            {/* The ring is the frame in both cases: a turning band of the four
                pillar colours with the subject sitting in a navy well inside
                it. `p-[3px]` is what makes it a ring rather than a disc. */}
            <div className="orbit-ring pillar-ring absolute inset-0 rounded-full p-[3px]">
              <div className="h-full w-full rounded-full bg-ink-900" />
            </div>

            <div className="absolute inset-[3px] overflow-hidden rounded-full bg-ink-950">
              {founder.portrait ? (
                <Picture
                  src={founder.portrait}
                  alt={founder.portraitAlt}
                  sizes="352px"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="relative grid h-full w-full place-items-center">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-700/45 to-transparent"
                  />
                  <span className="display relative text-[5.5rem] leading-none text-white sm:text-[7rem]">
                    {founder.initials}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
