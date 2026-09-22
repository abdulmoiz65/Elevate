import { Fragment } from "react";
import useInView from "../../hooks/useInView";

/**
 * A heading that arrives word by word.
 *
 * `Reveal` moves a whole block; this breaks a line into words and staggers
 * them, which is what makes a large display heading feel authored rather than
 * placed. The motion lives in `.split-reveal` in index.css — this component
 * only marks up the words and numbers them.
 *
 * Two details that matter more than they look:
 *
 * - The separators are ordinary spaces rendered *outside* the animated spans.
 *   A non-breaking space would stop a long display line wrapping at all and
 *   overflow the viewport on a phone; a space inside an `inline-block` would
 *   travel with the transform.
 * - Word numbering is derived before render rather than counted inside the JSX,
 *   so nothing is mutated mid-render.
 *
 * Accessibility: the words are plain inline text inside one element, so a
 * screen reader reads the heading as a single continuous string. No per-word
 * `aria` is added — splitting a heading into `aria-hidden` spans would be the
 * mistake here.
 *
 * Props
 *   lines   a string, or an array of strings rendered as stacked lines
 *   delay   milliseconds before the first word, for sequencing against siblings
 *   as      element to render (default "h2")
 */
export default function SplitReveal({
  lines,
  as: Tag = "h2",
  delay = 0,
  className = "",
  lineClassName = "",
  style,
  ...props
}) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const rows = (Array.isArray(lines) ? lines : [lines]).map((row) => row.split(" "));

  // Where each line's numbering starts, so a multi-line heading keeps one
  // continuous cascade instead of restarting the stagger on every row.
  const lineStart = rows.reduce(
    (starts, words) => [...starts, starts[starts.length - 1] + words.length],
    [0],
  );

  return (
    <Tag
      ref={ref}
      className={`split-reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { ...style, "--reveal-delay": `${delay}ms` } : style}
      {...props}
    >
      {rows.map((words, rowNumber) => (
        <span key={rowNumber} className={`block ${lineClassName}`}>
          {words.map((word, columnNumber) => (
            <Fragment key={`${rowNumber}-${columnNumber}`}>
              <span className="word" style={{ "--word-index": lineStart[rowNumber] + columnNumber }}>
                {word}
              </span>
              {columnNumber < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </span>
      ))}
    </Tag>
  );
}
