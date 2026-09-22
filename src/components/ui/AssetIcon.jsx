/**
 * Renders one of the SVG line icons from /assets/images/icons.
 *
 * The icons are drawn with `stroke="currentColor"`, but an <img> gives an
 * external SVG no colour to inherit — it would come out black. Painting the
 * file as a CSS mask over a coloured box keeps the artwork and lets the theme
 * supply the colour, so `colorClass` can be any token (brand, pillar, accent).
 *
 * Icons here are always decorative: the heading beside them names the item, so
 * they are hidden from assistive technology rather than given duplicate labels.
 */
export default function AssetIcon({ src, colorClass = "bg-brand-600", className = "h-6 w-6" }) {
  return (
    <span
      aria-hidden="true"
      className={`block ${colorClass} ${className}`}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
