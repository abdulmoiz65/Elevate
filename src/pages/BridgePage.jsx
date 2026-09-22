import BridgeIntro from "../components/sections/BridgeIntro";
import ClosingCta from "../components/sections/ClosingCta";
import KnowledgeFlow from "../components/sections/KnowledgeFlow";
import Pathways from "../components/sections/Pathways";
import PageHeader from "../components/ui/PageHeader";
import { bridge } from "../data/content";

export default function BridgePage() {
  return (
    <>
      <PageHeader title={bridge.title} lede={bridge.lede} />
      <BridgeIntro />
      <Pathways />
      <KnowledgeFlow />
      <ClosingCta />
    </>
  );
}
