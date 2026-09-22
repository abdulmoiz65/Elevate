const paths = {
  arrowRight: "M5 12h14m-6-6 6 6-6 6",
  chevronDown: "m6 9 6 6 6-6",
  check: "m5 13 4 4 10-10",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  mail: "M3.5 6.5h17v11h-17zM3.5 7l8.5 6 8.5-6",
  chevronUp: "m6 15 6-6 6 6",
  chevronLeft: "m15 6-6 6 6 6",
  chevronRight: "m9 6 6 6-6 6",
  expand: ["M4 9V4h5", "M20 15v5h-5", "M4 4l6 6", "M20 20l-6-6"],
  // Multi-path glyphs: the speech bubble and its three dots, the paper plane
  // and its fold, the restart arc and its arrowhead.
  chat: ["M20.5 11.6a7.5 7.5 0 0 1-7.5 7.5H9.4L4.5 22.2v-5.5a7.5 7.5 0 0 1 6.6-11.3h1.9a7.5 7.5 0 0 1 7.5 7.5Z", "M9.2 11.6h.01", "M12.5 11.6h.01", "M15.8 11.6h.01"],
  send: ["M21.5 3.4 2.8 10.9l7.1 2.7 2.7 7.1 8.9-17.3Z", "M9.9 13.6 21.5 3.4"],
  restart: ["M20 12a8 8 0 1 1-2.7-6", "M20.2 4.2v4.4h-4.4"],
};

/** Small inline UI glyphs (arrows, chevrons, the hamburger). Decorative by default. */
export default function Icon({ name, className = "h-5 w-5" }) {
  const d = paths[name];
  if (!d) return null;

  // A glyph is one path or several; normalising here keeps every call site the same.
  const shapes = Array.isArray(d) ? d : [d];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {shapes.map((shape) => (
        <path key={shape} d={shape} />
      ))}
    </svg>
  );
}
