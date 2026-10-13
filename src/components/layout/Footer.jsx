import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Picture from "../ui/Picture";
import SocialLinks from "../ui/SocialLinks";
import { contactLink, navLinks } from "../../data/navigation";
import { contact, site } from "../../data/content";

/**
 * Site footer.
 *
 * It stays light rather than going dark to match the gradient CTA above it:
 * the logo is a full-colour mark with a navy wordmark and there is no white
 * variant on file, so a dark footer would either lose the wordmark or need the
 * logo boxed in a white chip, which looks worse than a light footer. Ask the
 * client for a reversed logo and this can go dark.
 *
 * The four pillar colours run across the very top as a hairline, which both
 * ties the footer to the rest of the system and gives the gradient band above
 * it a clean edge to land on.
 */

const pillarStrip = [
  "bg-pillar-academia",
  "bg-pillar-industry",
  "bg-pillar-youth",
  "bg-pillar-community",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-50">
      {/* Four equal bands, so the strip reads as the pillars rather than as a
          random rainbow rule. */}
      <div aria-hidden="true" className="flex h-1">
        {pillarStrip.map((colour) => (
          <span key={colour} className={`flex-1 ${colour}`} />
        ))}
      </div>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Picture
              src="/assets/images/brand/elevate-logo.png"
              alt={`${site.name} logo`}
              sizes="107px"
              className="h-20 w-auto"
            />
            <p className="display mt-5 text-2xl text-ink-900 sm:text-3xl">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-ink-600">
              {site.promise}
            </p>
          </div>

          {/* Navigation.
              A CSS multi-column list, not a two-column grid. In a grid the
              rows are shared between the columns, so "Academia-Industry
              Bridge" wrapping to two lines pushed a gap into the column beside
              it and the links stopped lining up. Multi-column has no shared
              rows: each column packs tight whatever the item heights are. From
              `lg` it collapses to one column, which is wide enough that the
              longest label fits on a single line. */}
          <nav aria-labelledby="footer-nav-heading" className="lg:col-span-3">
            <h2
              id="footer-nav-heading"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
            >
              Explore
            </h2>
            <ul className="mt-5 columns-2 gap-x-8 sm:columns-1">
              {[...navLinks, contactLink].map((link) => (
                <li key={link.to} className="mb-3 break-inside-avoid last:mb-0">
                  <Link
                    to={link.to}
                    className="text-ink-600 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hand-off. The address, the social row and the Contact link are one
              column rather than spread across two: they are all the same
              thing, and splitting them left the right-hand column stranded
              with two lines of text in it. */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Work with us
            </h2>
            <p className="mt-5 max-w-xs text-pretty leading-relaxed text-ink-600">{contact.lede}</p>

            {/* Spelled out rather than hidden behind "email us" — an address a
                reader can copy is worth more here than a tidier label. The
                phone number sits directly under it on its own line: the two
                side by side wrapped mid-number on narrow screens. */}
            <div className="mt-5 flex flex-col items-start gap-2.5">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 text-ink-700 transition-colors hover:text-brand-700"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-600" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex items-center gap-2.5 text-ink-700 transition-colors hover:text-brand-700"
              >
                <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-600" />
                {contact.phone}
              </a>
            </div>

            <SocialLinks className="mt-5" />

            <Link
              to={contactLink.to}
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              {contactLink.label}
              <Icon name="arrowRight" className="arrow-shift h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-7 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. A non-profit organization.
          </p>
          <p className="text-ink-500">{contact.closing}</p>
        </div>
      </Container>
    </footer>
  );
}
