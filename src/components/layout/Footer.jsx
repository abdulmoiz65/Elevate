import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img
              src="/assets/images/brand/elevate-logo.png"
              alt={`${site.name} logo`}
              width="340"
              height="256"
              loading="lazy"
              className="h-20 w-auto"
            />
            <p className="display mt-5 text-2xl text-ink-900 sm:text-3xl">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-ink-600">
              {site.promise}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav-heading" className="lg:col-span-4">
            <h2
              id="footer-nav-heading"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600"
            >
              Explore
            </h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[...navLinks, contactLink].map((link) => (
                <li key={link.to}>
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

          {/* Hand-off */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Work with us
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-ink-600">{contact.lede}</p>
            <Link
              to={contactLink.to}
              className="group mt-5 inline-flex items-center gap-2 font-semibold text-brand-700 transition-colors hover:text-brand-800"
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
