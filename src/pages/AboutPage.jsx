import AboutIntro from "../components/sections/AboutIntro";
import BeliefBlock from "../components/sections/BeliefBlock";
import ClosingCta from "../components/sections/ClosingCta";
import MissionVision from "../components/sections/MissionVision";
import PageHeader from "../components/ui/PageHeader";
import { about } from "../data/content";

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={about.title} title={about.lede} />
      {/* The header owns the page heading, so the section below is body only. */}
      <AboutIntro showHeading={false} />
      <BeliefBlock />
      <MissionVision />
      <ClosingCta />
    </>
  );
}
