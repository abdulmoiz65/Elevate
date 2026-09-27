import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Picture from "../ui/Picture";
import { contactLink, navLinks } from "../../data/navigation";
import { site } from "../../data/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The header condenses and gains a shadow once the page has moved, so it
  // reads as a layer above the content rather than part of the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navigating from the panel closes it, so a tap on a link never leaves the
  // menu hanging open over the new page.
  const closeMenu = () => setMenuOpen(false);

  // Let Escape dismiss the open panel.
  useEffect(() => {
    if (!menuOpen) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `nav-link text-sm font-medium transition-colors ${
      isActive ? "text-brand-700" : "text-ink-600 hover:text-ink-900"
    }`;

  return (
    <header
      // Opaque once the page has moved. Translucent white over a dark section
      // let large display headings ghost through the bar as they scrolled
      // under it, which read as a rendering fault rather than as a layer.
      className={`sticky top-0 z-50 border-b backdrop-blur transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? "border-ink-200 bg-white shadow-sm" : "border-transparent bg-white/90"
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <Picture
            src="/assets/images/brand/elevate-logo.png"
            alt={`${site.name} logo: a human profile filled with a network of connected nodes`}
            sizes="75px"
            priority
            className={`w-auto transition-[height] duration-300 ${
              scrolled ? "h-10 sm:h-11" : "h-12 sm:h-14"
            }`}
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to={contactLink.to}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            {contactLink.label}
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl text-ink-900 ring-1 ring-ink-200 transition-colors hover:bg-ink-50 active:scale-95 lg:hidden"
        >
          <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile panel */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="panel-enter border-t border-ink-100 bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-ink-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to={contactLink.to}
              onClick={closeMenu}
              className="mt-2 rounded-full bg-brand-600 px-5 py-3 text-center text-base font-medium text-white transition-colors hover:bg-brand-700"
            >
              {contactLink.label}
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
