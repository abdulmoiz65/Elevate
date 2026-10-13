import Icon from "./Icon";
import { contact, social } from "../../data/content";

/**
 * The row of off-site links: email, WhatsApp, Facebook, Instagram, LinkedIn.
 *
 * Each button takes a colour on hover rather than the one flat brand blue,
 * because five identical circles read as a single grey object and nobody aims
 * at them. The colours are the site's own accent tokens, not the networks'
 * official hexes — `#1877F2` and the Instagram gradient would be the only two
 * values on the whole site that are not sampled from the logo, and they would
 * look imported. The tokens chosen still sit close enough to each brand that
 * the row reads correctly at a glance.
 *
 * The accessible name is spelled out per link ("Elevate on Instagram") because
 * the glyph carries no text and "Instagram" alone does not say whose.
 *
 * Props
 *   tone   "light" (default) for the footer's pale ground, "dark" for navy
 *   size   "md" (default) | "lg"
 */

const links = [
  {
    name: "Email",
    icon: "mail",
    href: `mailto:${contact.email}`,
    handle: contact.email,
    label: `Email Elevate at ${contact.email}`,
    external: false,
    hover: "hover:border-brand-600 hover:bg-brand-600",
  },
  {
    // WhatsApp runs on the phone number, so it is built from `contact` here
    // rather than listed in `social` — it is a way to reach the same line, not
    // a separate profile. Leaf green is the site's own green; WhatsApp's
    // #25D366 would be the one imported hex in the row.
    name: "WhatsApp",
    icon: "whatsapp",
    href: contact.whatsappHref,
    handle: contact.phone,
    label: `Message Elevate on WhatsApp at ${contact.phone}`,
    external: true,
    hover: "hover:border-leaf-600 hover:bg-leaf-600",
  },
  ...social.map((item) => ({
    ...item,
    label: `Elevate on ${item.name}`,
    external: true,
    // Facebook keeps the logo blue; Instagram takes the crimson closest to its
    // magenta; LinkedIn takes aqua, which is also the industry pillar.
    hover: {
      facebook: "hover:border-brand-600 hover:bg-brand-600",
      instagram: "hover:border-crimson-600 hover:bg-crimson-600",
      linkedin: "hover:border-aqua-600 hover:bg-aqua-600",
    }[item.icon],
  })),
];

const tones = {
  light: "border-ink-200 bg-white text-ink-600 hover:text-white",
  dark: "border-white/20 bg-white/5 text-halo-100 hover:text-white",
};

const sizes = {
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

export default function SocialLinks({ tone = "light", size = "md", className = "" }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            aria-label={link.label}
            title={link.handle}
            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`btn-motion grid place-items-center rounded-full border ${sizes[size]} ${tones[tone]} ${link.hover}`}
          >
            <Icon name={link.icon} className="h-[1.15rem] w-[1.15rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
