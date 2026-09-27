import ClosingCta from "../components/sections/ClosingCta";
import FounderHero from "../components/sections/FounderHero";
import FounderVision from "../components/sections/FounderVision";
import FounderWork from "../components/sections/FounderWork";

/**
 * Meet the Founder.
 *
 * Sequenced the same way the home page is — navy portrait banner, light
 * working section, full-bleed photographic moment, gradient hand-off — so the
 * page alternates weight instead of running three pale sections together.
 *
 * `FounderHero` carries the <h1>, which is why this page does not use
 * `PageHeader` like the other inner pages do.
 */
export default function FounderPage() {
  return (
    <>
      <FounderHero />
      <FounderWork />
      <FounderVision />
      <ClosingCta />
    </>
  );
}
