import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

/**
 * Full-screen image viewer for an event gallery.
 *
 * RENDERED IN A PORTAL ON document.body, and it has to be. Its natural place
 * in the tree is inside the routed <main>, which carries `.page-enter` —
 * `animation: page-enter ... both`, whose keyframes touch `transform`. A filled
 * transform animation makes that element a containing block for
 * fixed-position descendants, permanently. So `fixed inset-0` resolved against
 * <main> rather than the viewport: the overlay began below the header, and the
 * stage inherited the full scroll height of the page, which parked the
 * vertically-centred image thousands of pixels below the fold. The portal
 * sidesteps every transformed ancestor, now and in future.
 *
 * Modal, unlike the chat panel, so it takes the full set of obligations:
 *
 *   - `aria-modal="true"` with a label naming the gallery and the position
 *   - focus moves in on open and is trapped while it is open
 *   - Escape closes; Left/Right move through the set, wrapping
 *   - the page behind is scroll-locked, and the previous value is restored
 *   - focus returns to the thumbnail that opened it (handled by the caller)
 *
 * The image is `object-contain`, never cropped — a poster is unreadable
 * cropped, and at this size a photograph does not need to fill the frame.
 *
 * Props
 *   images      [{ src, w, h, alt }]
 *   index       which image is showing
 *   label       accessible name for the dialog, e.g. the event title
 *   onNavigate  (nextIndex) => void
 *   onClose     () => void
 */
export default function Lightbox({ images, index, label, onNavigate, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const count = images.length;
  const image = images[index];

  /** Move by delta, wrapping at both ends. */
  const go = useCallback(
    (delta) => onNavigate((index + delta + count) % count),
    [index, count, onNavigate],
  );

  // Focus the close button on open, so the first Tab lands somewhere sensible
  // and a screen reader announces the dialog rather than the page behind it.
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Lock the page behind. Restoring the previous value rather than clearing it
  // means this cannot stomp on a lock some other component set.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
        return;
      }
      if (event.key !== "Tab") return;

      // Trap: wrap focus between the first and last control in the dialog.
      const focusable = dialogRef.current?.querySelectorAll("button");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [go, onClose]);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} — image ${index + 1} of ${count}`}
      className="fixed inset-0 z-[70] flex flex-col bg-ink-950/95 backdrop-blur-sm"
    >
      {/* Top bar */}
      <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="min-w-0 text-sm text-ink-300">
          <span className="block truncate font-semibold text-white">{label}</span>
          <span>
            {index + 1} / {count}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close the gallery"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      {/* Stage. `min-h-0` lets this flex child shrink below its content so the
          image is bounded by the viewport instead of overflowing it.

          Clicking the surround closes; clicking the image does not, so a
          mis-click on the photograph is not a dismissal. This is a mouse
          affordance only, which is fine — Escape and the close button are the
          keyboard paths, so no interactive role belongs on this div. */}
      <div
        onClick={onClose}
        className="flex min-h-0 flex-1 cursor-zoom-out items-center justify-center px-4 sm:px-6"
      >
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.w}
          height={image.h}
          onClick={(event) => event.stopPropagation()}
          className="media-in max-h-full w-auto max-w-full cursor-default rounded-lg object-contain shadow-2xl"
        />
      </div>

      {/* Caption + controls */}
      <div className="shrink-0 px-4 pb-5 pt-4 sm:px-6">
        <p className="mx-auto max-w-3xl text-pretty text-center text-xs leading-relaxed text-ink-400">
          {image.alt}
        </p>

        {count > 1 && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Icon name="chevronLeft" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Icon name="chevronRight" className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
