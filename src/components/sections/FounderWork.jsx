import Container from "../ui/Container";
import Parallax from "../ui/Parallax";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { founder } from "../../data/content";

/**
 * What the founder has worked on.
 *
 * The source paragraph names five kinds of initiative in a single run-on
 * clause, which is unreadable at speed, so they are set as five numbered
 * cards instead — the same numeral device the WHAT WE DO pillars use, so the
 * page borrows a shape the site already has rather than inventing one.
 *
 * The photograph is a real Elevate session from the Learning Expo set. It is
 * *not* captioned as the founder: nobody has identified the people in the
 * client's photographs, and labelling a face with a name on the strength of a
 * guess is the one mistake on this page that would actually matter.
 */

const { work } = founder;

/** One accent per card. These are the `-ink` steps, which clear 4.5:1 on white. */
const numeralTones = [
  "text-pillar-academia-ink",
  "text-pillar-industry-ink",
  "text-pillar-youth-ink",
  "text-pillar-community-ink",
  "text-grape-700",
];

const borderTones = [
  "hover:border-pillar-academia",
  "hover:border-pillar-industry",
  "hover:border-pillar-youth",
  "hover:border-pillar-community",
  "hover:border-grape-500",
];

export default function FounderWork() {
  return (
    <section className="bg-ink-50 py-16 sm:py-24" aria-labelledby="founder-work-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal variant="left">
              <SectionHeading
                id="founder-work-heading"
                align="left"
                eyebrow={work.title}
                title={work.lede}
              />
            </Reveal>
          </div>

          <Parallax strength={26} className="lg:col-span-6">
            <Reveal variant="right" delay={140}>
              <div className="img-zoom rounded-3xl shadow-lg ring-1 ring-ink-900/5">
                <Picture
                  src={work.image}
                  alt={work.alt}
                  sizes="(min-width: 1024px) 512px, 100vw"
                  className="aspect-[8/5] w-full rounded-3xl object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
        </div>

        <Reveal
          as="p"
          delay={120}
          className="mt-14 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
        >
          {work.intro}
        </Reveal>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {work.items.map((item, index) => (
            <Reveal
              as="li"
              key={item}
              delay={index * 90}
              // The hover border is the card's own accent, so a pointer landing
              // on it picks that colour up rather than turning everything blue.
              className={`tile rounded-2xl border border-ink-200 bg-white p-6 shadow-sm hover:shadow-lg ${borderTones[index % borderTones.length]}`}
            >
              <span
                aria-hidden="true"
                className={`display block text-4xl leading-none ${numeralTones[index % numeralTones.length]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-pretty font-semibold leading-snug text-ink-900">{item}</p>
            </Reveal>
          ))}
        </ul>

        {/* Who the work is for. A quiet strip rather than another card grid —
            three stacked grids in one section would flatten it out. */}
        <Reveal
          delay={200}
          className="mt-12 flex flex-col gap-4 border-t border-ink-200 pt-8 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.3em] text-ink-500">
            {work.audiencesLabel}
          </p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {work.audiences.map((audience, index) => (
              <li key={audience} className="flex items-center gap-3">
                <span className="text-base font-semibold text-ink-900">{audience}</span>
                {index < work.audiences.length - 1 && (
                  <span aria-hidden="true" className="text-ink-300">
                    &bull;
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
