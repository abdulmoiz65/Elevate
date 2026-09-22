import ClosingCta from "../components/sections/ClosingCta";
import EventGallery from "../components/sections/EventGallery";
import PageHeader from "../components/ui/PageHeader";
import { events } from "../data/content";

export default function EventsPage() {
  return (
    <>
      <PageHeader title={events.title} lede={events.lede} />
      <EventGallery />
      <ClosingCta />
    </>
  );
}
