import Marquee from "../ui/Marquee";
import { site } from "../../data/content";

/**
 * The four-part statement from the source copy, running as a marquee.
 *
 * It used to sit as a single static line under the hero, where a long
 * uppercase sentence just read as a caption. Split into its clauses and set
 * moving in display type it becomes the beat between the hero and the page —
 * the strip device all three competitor sites use to break up full-bleed
 * sections.
 *
 * Split here rather than in content.js so the copy stays one sentence at
 * source.
 */

const clauses = site.statement.split(". ").map((clause) => clause.replace(/\.$/, ""));

export default function StatementBand() {
  return <Marquee items={clauses} duration={38} tone="dark" />;
}
