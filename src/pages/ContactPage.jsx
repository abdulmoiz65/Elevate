import ContactSection from "../components/sections/ContactSection";
import PageHeader from "../components/ui/PageHeader";
import { contact } from "../data/content";

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={contact.title} title={contact.lede} lede={contact.body} />
      {/* The header carries the lede and intro, so the section is calls + form. */}
      <ContactSection withHeading={false} />
    </>
  );
}
