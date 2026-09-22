import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import ContactForm from "./ContactForm";
import { contact } from "../../data/content";

export default function ContactSection({ withHeading = true }) {
  return (
    <section
      className="relative py-16 sm:py-24"
      aria-labelledby={withHeading ? "contact-heading" : undefined}
      aria-label={withHeading ? undefined : "Ways to work with Elevate"}
    >
      {/* Warm, low-contrast backdrop; purely decorative. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-72 overflow-hidden">
        <img
          src={contact.image}
          alt=""
          width="1800"
          height="680"
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>

      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          {withHeading && (
            <>
              <Reveal
                as="h2"
                id="contact-heading"
                className="text-balance text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl"
              >
                {contact.lede}
              </Reveal>
              <Reveal
                as="p"
                delay={110}
                className="mt-5 text-pretty text-lg leading-relaxed text-ink-700"
              >
                {contact.body}
              </Reveal>
            </>
          )}

          <ul className="mt-9 space-y-3 first:mt-0">
            {contact.calls.map((call, index) => (
              <Reveal
                as="li"
                key={call}
                variant="left"
                delay={index * 90}
                className="flex items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-white"
                >
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-base font-semibold text-ink-900">{call}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal
            as="p"
            delay={480}
            className="mt-9 text-2xl font-semibold text-brand-700 sm:text-3xl"
          >
            {contact.closing}
          </Reveal>
        </div>

        <Reveal variant="right" delay={180}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
