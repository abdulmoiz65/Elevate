import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  navy: "bg-ink-900 text-white hover:bg-ink-800",
  outline: "bg-white text-ink-900 ring-1 ring-ink-200 hover:bg-ink-50",
  onDark: "bg-white text-ink-900 hover:bg-halo-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

/**
 * One button, three shapes: a router <Link> when `to` is given, an <a> when
 * `href` is given, otherwise a real <button>.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `btn-motion group inline-flex items-center justify-center gap-2 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
