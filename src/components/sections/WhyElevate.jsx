import Container from "../ui/Container";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { whyElevate } from "../../data/content";

export default function WhyElevate() {
  return (
    <section className="bg-ink-50 py-16 sm:py-24" aria-labelledby="why-elevate-heading">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal variant="left">
            <SectionHeading
              id="why-elevate-heading"
              align="left"
              eyebrow={whyElevate.title}
              title={whyElevate.lede}
            />
          </Reveal>

          <ul className="mt-8 space-y-4">
            {whyElevate.points.map((point, index) => (
              <Reveal as="li" key={point} delay={index * 80} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600"
                />
                <span className="text-pretty leading-relaxed text-ink-700">{point}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal
            as="p"
            delay={520}
            className="mt-8 text-pretty text-lg font-semibold text-ink-900"
          >
            {whyElevate.closing}
          </Reveal>
        </div>

        <Reveal variant="right" delay={160}>
          <div className="img-zoom rounded-3xl shadow-lg ring-1 ring-ink-900/5">
            <Picture
              src={whyElevate.image}
              alt={whyElevate.alt}
              sizes="(min-width: 1024px) 512px, 100vw"
              className="aspect-[8/5] w-full rounded-3xl object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
