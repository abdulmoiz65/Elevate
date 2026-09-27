import { useCallback, useRef, useState } from "react";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Lightbox from "../ui/Lightbox";
import Parallax from "../ui/Parallax";
import Picture from "../ui/Picture";
import Reveal from "../ui/Reveal";
import { eventImageCount, eventItems, eventPartners } from "../../data/events";
import { events } from "../../data/content";

/**
 * The events archive: ten real events, 58 real photographs and posters.
 *
 * Laid out as large alternating editorial rows on white, the same shape as the
 * pillar rows on the home page. It was previously a dark navy field, which
 * fought the photographs instead of presenting them — event photography is
 * warm and busy, and it needs a quiet ground, not a competing one.
 *
 * Every event uses the same row shape even though the image counts are wildly
 * uneven (one poster at one end, sixteen photographs at the other). A layout
 * that changed shape per event would read as broken rather than as varied; the
 * variety comes from the alternating side, the accent, and the gallery
 * adapting to what it actually has.
 *
 * Two media types, handled differently:
 *   posters  contained on a tinted panel, never cropped — a cropped poster
 *            loses the text that is the whole point of it
 *   photos   cropped to fill their frame
 *
 * The lightbox is opened from any thumbnail and focus returns to that
 * thumbnail on close, which is why the trigger node is stashed in a ref.
 */

/*
 * One accent per event. `text` is the -700 step, never the -500: the saturated
 * accents are fill values and sit at 1.8-2.5:1 on white, far below the 3:1 a
 * large heading needs. Every -700 here clears 4.7:1, and gold uses -800
 * because -700 only reaches 4.40:1 against its own tint.
 */
const accents = [
  { text: "text-gold-800", bar: "bg-gold-500", soft: "bg-gold-50", dot: "bg-gold-500" },
  { text: "text-brand-700", bar: "bg-brand-500", soft: "bg-brand-50", dot: "bg-brand-500" },
  { text: "text-aqua-700", bar: "bg-aqua-500", soft: "bg-aqua-50", dot: "bg-aqua-500" },
  { text: "text-leaf-700", bar: "bg-leaf-500", soft: "bg-leaf-50", dot: "bg-leaf-500" },
  { text: "text-grape-700", bar: "bg-grape-500", soft: "bg-grape-50", dot: "bg-grape-500" },
  { text: "text-ember-700", bar: "bg-ember-500", soft: "bg-ember-50", dot: "bg-ember-500" },
  { text: "text-steel-700", bar: "bg-steel-500", soft: "bg-steel-50", dot: "bg-steel-500" },
  { text: "text-crimson-700", bar: "bg-crimson-500", soft: "bg-crimson-50", dot: "bg-crimson-500" },
  { text: "text-brand-700", bar: "bg-brand-500", soft: "bg-brand-50", dot: "bg-brand-500" },
  { text: "text-aqua-700", bar: "bg-aqua-500", soft: "bg-aqua-50", dot: "bg-aqua-500" },
];

/** Thumbnails shown before the grid collapses into a "+N more" tile. */
const THUMB_LIMIT = 5;

export default function EventGallery() {
  // Which gallery is open, and at which image. `null` means closed.
  const [viewer, setViewer] = useState(null);
  // The element that opened the lightbox, so focus can go back to it.
  const triggerRef = useRef(null);

  const open = useCallback((eventIndex, imageIndex, element) => {
    triggerRef.current = element;
    setViewer({ eventIndex, imageIndex });
  }, []);

  const close = useCallback(() => {
    setViewer(null);
    // The lightbox unmounts in this same commit, so hand focus back after it
    // has gone rather than fighting its own focus effect.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const active = viewer === null ? null : eventItems[viewer.eventIndex];

  return (
    <section className="overflow-hidden py-20 sm:py-28" aria-labelledby="events-heading">
      <Container>
        <h2 id="events-heading" className="sr-only">
          {events.title}
        </h2>
        <Reveal as="p" variant="fade" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
          {eventItems.length} events &middot; {eventImageCount} photographs and posters
        </Reveal>
      </Container>

      <ul className="mt-14 space-y-20 sm:mt-16 sm:space-y-28">
        {eventItems.map((item, eventIndex) => {
          const accent = accents[eventIndex];
          const isPoster = item.kind === "poster";
          const [cover, ...rest] = item.images;
          const thumbs = rest.slice(0, THUMB_LIMIT);
          const overflow = rest.length - thumbs.length;
          // Alternate which side the gallery falls on, as the pillar rows do.
          const galleryFirst = eventIndex % 2 === 0;

          return (
            <li key={item.slug}>
              <Container>
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  {/* ---- Gallery ---- */}
                  <div className={`lg:col-span-7 ${galleryFirst ? "" : "lg:order-2"}`}>
                    <Parallax strength={22}>
                      <Reveal variant={galleryFirst ? "left" : "right"}>
                        <button
                          type="button"
                          onClick={(event) => open(eventIndex, 0, event.currentTarget)}
                          className="tile group relative block w-full overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-ink-900/5"
                        >
                          {isPoster ? (
                            // Contained on a tint: a cropped poster is a poster
                            // with its own details cut off.
                            <span className={`flex items-center justify-center p-6 ${accent.soft}`}>
                              <Picture
                                src={cover.src}
                                alt={cover.alt}
                                sizes="(min-width: 640px) 336px, 70vw"
                                className="max-h-[30rem] w-auto rounded-lg object-contain shadow-lg"
                              />
                            </span>
                          ) : (
                            <Picture
                              src={cover.src}
                              alt={cover.alt}
                              sizes="(min-width: 1024px) 640px, 100vw"
                              className="aspect-[5/4] w-full object-cover sm:aspect-[16/10]"
                            />
                          )}

                          {!isPoster && (
                            <span
                              aria-hidden="true"
                              className="display absolute bottom-0 left-0 px-6 pb-2 text-[5rem] leading-none text-white/85 sm:text-[7rem]"
                            >
                              {String(eventIndex + 1).padStart(2, "0")}
                            </span>
                          )}
                          <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-1.5 ${accent.bar}`} />
                        </button>
                      </Reveal>
                    </Parallax>

                    {rest.length > 0 && (
                      <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
                        {thumbs.map((image, offset) => (
                          <li key={image.src}>
                            <button
                              type="button"
                              onClick={(event) => open(eventIndex, offset + 1, event.currentTarget)}
                              className="tile block w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-ink-200 hover:ring-ink-300"
                            >
                              <Picture
                                src={image.src}
                                alt={image.alt}
                                sizes="(min-width: 1024px) 100px, (min-width: 640px) 15vw, 30vw"
                                className="aspect-square w-full object-cover"
                              />
                            </button>
                          </li>
                        ))}

                        {overflow > 0 && (
                          <li>
                            <button
                              type="button"
                              onClick={(event) => open(eventIndex, THUMB_LIMIT + 1, event.currentTarget)}
                              className={`grid aspect-square w-full place-items-center gap-1 rounded-xl ring-1 ring-ink-200 transition-colors hover:ring-ink-300 ${accent.soft}`}
                            >
                              <Icon name="expand" className={`h-5 w-5 ${accent.text}`} />
                              <span className={`text-xs font-semibold ${accent.text}`}>+{overflow}</span>
                              <span className="sr-only">more photographs from {item.title}</span>
                            </button>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>

                  {/* ---- Meta ---- */}
                  <div className={`lg:col-span-5 ${galleryFirst ? "" : "lg:order-1"}`}>
                    <Reveal variant={galleryFirst ? "right" : "left"} delay={120}>
                      <span
                        className={`inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${accent.soft} ${accent.text}`}
                      >
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                        <time dateTime={item.date}>{item.dateLabel}</time>
                      </span>

                      <h3 className={`display mt-5 text-3xl sm:text-4xl ${accent.text}`}>{item.title}</h3>

                      {item.tagline && (
                        <p className="mt-2 text-lg font-semibold text-ink-700">{item.tagline}</p>
                      )}

                      {item.venue && <p className="mt-4 leading-relaxed text-ink-600">{item.venue}</p>}

                      {item.speaker && (
                        <p className="mt-2 text-ink-600">
                          Speaker: <span className="font-semibold text-ink-900">{item.speaker}</span>
                        </p>
                      )}

                      {item.blurb && (
                        <p className="mt-4 text-pretty leading-relaxed text-ink-600">{item.blurb}</p>
                      )}

                      {item.partners.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {item.partners.map((partner) => (
                            <li
                              key={partner}
                              className="rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700 ring-1 ring-ink-200"
                            >
                              {partner}
                            </li>
                          ))}
                        </ul>
                      )}

                      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-ink-500">
                        {item.images.length} {isPoster ? "poster" : "photograph"}
                        {item.images.length === 1 ? "" : "s"}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </Container>
            </li>
          );
        })}
      </ul>

      {/* ---- Institutions ----
          Not a logo wall — we have names, not marks — so it is set
          typographically rather than faked with placeholder boxes. */}
      {eventPartners.length > 0 && (
        <Container>
          <div className="mt-24 border-t border-ink-200 pt-12">
            <Reveal as="p" variant="fade" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Hosted and supported with
            </Reveal>
            <ul className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
              {eventPartners.map((partner, index) => (
                <Reveal as="li" key={partner} delay={index * 60} className="display text-xl text-ink-500 sm:text-2xl">
                  {partner}
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      )}

      {active && (
        <Lightbox
          images={active.images}
          index={viewer.imageIndex}
          label={active.title}
          onNavigate={(imageIndex) => setViewer((current) => ({ ...current, imageIndex }))}
          onClose={close}
        />
      )}
    </section>
  );
}
