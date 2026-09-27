import Container from "../ui/Container";
import Parallax from "../ui/Parallax";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import SplitReveal from "../ui/SplitReveal";
import { whatWeDo } from "../../data/content";

/**
 * The four pillars, as large alternating editorial rows.
 *
 * This was a four-up card grid, which shrank each photograph to a thumbnail
 * and gave every pillar the same flat weight. Run as full rows the imagery is
 * five times the size, the numbers can be set in display type, and each pillar
 * gets its own moment on the way down the page.
 *
 * Each pillar owns one accent from the logo's idea bubbles, so its colour
 * identity is the same here as in the nav, the chat chips and the charts. The
 * class strings are written out in full because Tailwind scans source text and
 * cannot resolve names built at runtime.
 */
/*
 * `text` is deliberately the `-ink` step, not the pillar colour itself. The
 * pillar colours are FILL values: on white, industry is 2.49:1, community
 * 2.25:1 and youth 1.79:1 — all below the 3:1 a large heading needs, and youth
 * is close to unreadable. The `-ink` steps are the same hues darkened for type
 * and clear 4.7-7.5:1. The saturated value still does all the filling, on the
 * bar and the chip background, where contrast does not apply.
 */
const accents = {
  academia: { text: "text-pillar-academia-ink", bar: "bg-pillar-academia", soft: "bg-pillar-academia-soft" },
  industry: { text: "text-pillar-industry-ink", bar: "bg-pillar-industry", soft: "bg-pillar-industry-soft" },
  youth: { text: "text-pillar-youth-ink", bar: "bg-pillar-youth", soft: "bg-pillar-youth-soft" },
  community: { text: "text-pillar-community-ink", bar: "bg-pillar-community", soft: "bg-pillar-community-soft" },
};

export default function WhatWeDo() {
  return (
    <section className="overflow-hidden py-20 sm:py-28" aria-labelledby="what-we-do-heading">
      <Container>
        {/* Two columns, because the heading alone left half a screen of white
            beside it. The four areas are previewed on the right, so the space
            carries the section's index instead of nothing. Bottom-aligned, so
            the list sits on the same baseline as the last display line. */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal
              as="p"
              variant="fade"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
            >
              {whatWeDo.title}
            </Reveal>
            <SplitReveal
              as="h2"
              id="what-we-do-heading"
              lines={whatWeDo.lede.replace(/\.$/, "").split(". ")}
              delay={80}
              className="display display-section display-tight mt-5 text-ink-900"
            />
          </div>

          <div className="lg:col-span-5">
            <Reveal as="p" delay={200} className="text-pretty text-lg leading-relaxed text-ink-600">
              {whatWeDo.intro}
            </Reveal>

            <ul className="mt-7 space-y-3.5 border-l-2 border-ink-200 pl-6">
              {whatWeDo.pillars.map((pillar, index) => (
                <Reveal
                  as="li"
                  key={pillar.key}
                  delay={280 + index * 70}
                  className="flex items-baseline gap-3.5"
                >
                  <span className={`display text-base ${accents[pillar.key].text}`}>
                    {pillar.number}
                  </span>
                  <span className="text-lg font-semibold text-ink-800">{pillar.name}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <ul className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
        {whatWeDo.pillars.map((pillar, index) => {
          const accent = accents[pillar.key];
          // Alternate which side the photograph falls on, so the eye zig-zags
          // down the list instead of running down one rail.
          const imageFirst = index % 2 === 0;

          return (
            <li key={pillar.key}>
              <Container>
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <Parallax
                    strength={28}
                    className={`lg:col-span-7 ${imageFirst ? "" : "lg:order-2"}`}
                  >
                    <Reveal
                      variant={imageFirst ? "left" : "right"}
                      className="tile relative overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-ink-900/5"
                    >
                      <Picture
                        src={pillar.image}
                        alt={pillar.alt}
                        sizes="(min-width: 1024px) 640px, 100vw"
                        className="aspect-[5/4] w-full object-cover"
                      />
                      {/* The pillar number, burned into the corner of its own
                          photograph rather than floating in a chip. */}
                      <span
                        aria-hidden="true"
                        className="display absolute bottom-0 left-0 px-6 pb-2 text-[5rem] leading-none text-white/85 sm:text-[7rem]"
                      >
                        {pillar.number}
                      </span>
                      <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-1.5 ${accent.bar}`} />
                    </Reveal>
                  </Parallax>

                  <div className={`lg:col-span-5 ${imageFirst ? "" : "lg:order-1"}`}>
                    <Reveal as="div" variant={imageFirst ? "right" : "left"} delay={120}>
                      <span
                        className={`inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${accent.soft} ${accent.text}`}
                      >
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accent.bar}`} />
                        {pillar.number}
                      </span>

                      <h3 className={`display mt-5 text-4xl sm:text-5xl ${accent.text}`}>
                        {pillar.name}
                      </h3>

                      <p className="mt-5 text-pretty text-base leading-relaxed text-ink-600 sm:text-lg">
                        {pillar.body}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </Container>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
