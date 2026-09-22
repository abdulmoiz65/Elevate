import ClosingCta from "../components/sections/ClosingCta";
import ProgramGrid from "../components/sections/ProgramGrid";
import PageHeader from "../components/ui/PageHeader";
import { programs } from "../data/content";

export default function ProgramsPage() {
  return (
    <>
      <PageHeader title={programs.title} lede={programs.lede} />
      <ProgramGrid />
      <ClosingCta />
    </>
  );
}
