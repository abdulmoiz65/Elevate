import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { about } from "../../data/content";

export default function BeliefBlock() {
  return (
    <section className="bg-ink-900 py-16 text-white sm:py-24" aria-labelledby="belief-heading">
      <Container>
        <Reveal
          as="h2"
          id="belief-heading"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-halo-300"
        >
          {about.belief.title}
        </Reveal>

        <Reveal
          as="p"
          delay={100}
          className="mt-5 max-w-4xl text-balance text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl"
        >
          {about.belief.highlight}
        </Reveal>

        <div className="mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
          {about.belief.body.map((paragraph, index) => (
            <Reveal
              as="p"
              key={paragraph}
              delay={220 + index * 110}
              className="text-pretty leading-relaxed text-ink-300"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
