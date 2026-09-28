import Container from "../ui/Container";
import Parallax from "../ui/Parallax";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import { team } from "../../data/content";

/**
 * The whole of the Meet the Team page below its header: text on the left,
 * photograph on the right, one block per person in `team.members`.
 *
 * There is deliberately nothing else here. The previous version turned the
 * three supplied paragraphs into chips, numbered cards, an audiences strip and
 * a separate vision section, none of which the client wrote. The paragraphs
 * are printed as they were given, and the page carries its weight through the
 * type scale and the photograph rather than through manufactured structure.
 *
 * The prose is capped at `62ch`: three paragraphs across a full seven-column
 * span would run past 100 characters a line, which is where continuous text
 * starts being hard to track back from at the end of a line.
 */

/** The four pillar colours, as a foot rule under the photograph. */
const pillars = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
];

export default function TeamProfile() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="team-profile-heading">
      <Container>
        <ul className="space-y-24 sm:space-y-32">
          {team.members.map((member, index) => (
            <li key={member.name} className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
              {/* Text, left */}
              <div className="lg:col-span-7">
                <Reveal
                  as="p"
                  variant="fade"
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
                >
                  {member.role}
                </Reveal>

                <Reveal
                  as="h2"
                  // One <h2> per member; the page <h1> is in the header above.
                  id={index === 0 ? "team-profile-heading" : undefined}
                  delay={80}
                  className="display display-tight mt-4 text-4xl text-ink-900 sm:text-5xl"
                >
                  {member.name}
                </Reveal>

                <div className="mt-8 max-w-[62ch] space-y-6">
                  {member.bio.map((paragraph, paragraphIndex) => (
                    <Reveal
                      as="p"
                      key={paragraph.slice(0, 32)}
                      delay={160 + paragraphIndex * 110}
                      className="text-pretty text-lg leading-relaxed text-ink-600"
                    >
                      {paragraph}
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Photograph, right */}
              <Parallax strength={26} className="lg:col-span-5">
                <Reveal variant="right" delay={140}>
                  <figure className="img-zoom relative overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-ink-900/5">
                    <Picture
                      src={member.portrait}
                      alt={member.portraitAlt}
                      sizes="(min-width: 1024px) 440px, 100vw"
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-1.5">
                      {pillars.map((colour) => (
                        <span key={colour} className={`flex-1 ${colour}`} />
                      ))}
                    </span>
                  </figure>
                </Reveal>
              </Parallax>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
