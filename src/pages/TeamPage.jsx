import ClosingCta from "../components/sections/ClosingCta";
import TeamProfile from "../components/sections/TeamProfile";
import PageHeader from "../components/ui/PageHeader";
import { team } from "../data/content";

/**
 * Meet the Team.
 *
 * Two blocks: the standard navy page header, and the profile — text left,
 * photograph right. It uses `PageHeader` like every other inner page, rather
 * than the bespoke banner it had while it was a founder page, because with the
 * portrait now down in the profile there is nothing for a second header column
 * to hold.
 *
 * `PageHeader` takes no `lede` here on purpose: the client supplied three
 * biography paragraphs and a photograph, and an introductory sentence would
 * have to be written rather than quoted.
 */
export default function TeamPage() {
  return (
    <>
      <PageHeader title={team.title} />
      <TeamProfile />
      <ClosingCta />
    </>
  );
}
