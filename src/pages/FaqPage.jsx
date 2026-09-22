import ClosingCta from "../components/sections/ClosingCta";
import Accordion from "../components/ui/Accordion";
import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import { faq } from "../data/content";

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow={faq.title} title="Questions people ask us" />

      <section className="py-16 sm:py-24" aria-label={faq.title}>
        <Container className="max-w-4xl">
          <Accordion items={faq.items} />
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
