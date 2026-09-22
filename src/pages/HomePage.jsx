import AboutIntro from "../components/sections/AboutIntro";
import BeliefMoment from "../components/sections/BeliefMoment";
import ClosingCta from "../components/sections/ClosingCta";
import HomeHero from "../components/sections/HomeHero";
import ImpactAreas from "../components/sections/ImpactAreas";
import MissionVision from "../components/sections/MissionVision";
import StatementBand from "../components/sections/StatementBand";
import WhatWeDo from "../components/sections/WhatWeDo";
import WhyElevate from "../components/sections/WhyElevate";

/**
 * Home, sequenced for rhythm rather than for document order.
 *
 * The page alternates weight deliberately: full-bleed hero, moving strip,
 * light text section, dark type-only moment, long image-led list, and so on.
 * Three light sections in a row is what made the previous version read flat,
 * regardless of how good each one was on its own.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatementBand />
      <AboutIntro />
      <BeliefMoment />
      <WhatWeDo />
      <MissionVision />
      <WhyElevate />
      <ImpactAreas />
      <ClosingCta />
    </>
  );
}
