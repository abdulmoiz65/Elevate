import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/content";

/**
 * The ABOUT ELEVATE block. Rendered as a summary on the home page and as the
 * opening of the About page, where `level` becomes h2 under that page's h1.
 */
export default function AboutIntro({ level = "h2", withImage = true, showHeading = true }) {
  return (
    <section
      className="py-16 sm:py-24"
      aria-labelledby={showHeading ? "about-heading" : undefined}
      aria-label={showHeading ? undefined : about.title}
    >
      <Container>
        <div
          className={`grid gap-10 ${withImage ? "lg:grid-cols-2 lg:items-center lg:gap-16" : ""}`}
        >
          <div>
            {showHeading && (
              <Reveal variant="left">
                <SectionHeading
                id="about-heading"
                align="left"
                  eyebrow={about.title}
                  title={about.lede}
                  level={level}
                />
              </Reveal>
            )}
            {about.body.map((paragraph, index) => (
              <Reveal
                as="p"
                key={paragraph}
                delay={120 + index * 90}
                className="mt-5 text-pretty leading-relaxed text-ink-600 first:mt-0"
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          {withImage && (
            <Reveal variant="right" delay={140}>
              <div className="img-zoom rounded-3xl shadow-lg ring-1 ring-ink-900/5">
                <img
                  src={about.image}
                  alt={about.alt}
                  width="2048"
                  height="1365"
                  loading="lazy"
                  className="aspect-[7/5] w-full rounded-3xl object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
