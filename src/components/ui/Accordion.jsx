import { useId, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

/**
 * Accessible disclosure list used by the FAQ.
 *
 * Each row is a real <button> that owns its panel through aria-controls /
 * aria-expanded, and the panel is labelled back by aria-labelledby. Rows open
 * independently so a reader can compare two answers side by side.
 *
 * The open/close animation is the 0fr -> 1fr grid trick in index.css, which
 * reaches the answer's natural height without measuring it in JavaScript. A
 * closed panel is `visibility: hidden`, so it stays out of the tab order and
 * away from screen readers.
 */
export default function Accordion({ items }) {
  const baseId = useId();
  const [open, setOpen] = useState(() => new Set());

  function toggle(index) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-ink-200 overflow-hidden rounded-2xl bg-white ring-1 ring-ink-200">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <Reveal key={item.question} delay={index * 60}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-ink-50 sm:px-7"
              >
                <span className="text-base font-semibold text-ink-900 transition-colors group-hover:text-brand-700 sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-[transform,background-color] duration-300 group-hover:bg-brand-100 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Icon name="chevronDown" className="h-4 w-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-open={isOpen}
              className="accordion-panel"
            >
              {/* Inner wrapper is what actually collapses, so the padding
                  animates away with the text instead of jumping. */}
              <div>
                <p className="max-w-3xl px-5 pb-6 text-pretty leading-relaxed text-ink-600 sm:px-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
