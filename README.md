# ELEVATE

Marketing site for ELEVATE, a non-profit working across academia, industry,
youth and community.

React 19 + Vite + Tailwind 4. **No other runtime dependencies** — the motion,
the chat assistant and the image lightbox are all hand-rolled rather than
pulled from a library.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run lint
npm run images   # rebuild the responsive image derivatives (see below)
```

## Structure

```
index.html                  Fonts (Anton + Lato) and the app mount
netlify.toml                Build command and cache headers
scripts/
  optimize-images.mjs       Writes the WebP derivatives — GENERATES the two
                            paths marked GENERATED below
public/
  _redirects                SPA fallback — required by static hosts, do not remove
  favicon.svg
  assets/images/
    brand/                  Logo files
    events/<slug>/          58 client-owned event photographs and posters
    icons/                  15 original SVG line icons
  assets/derived/           GENERATED — WebP copies of the above at 320/640/1280/native
src/
  App.jsx                   Route table
  index.css                 Tailwind import, design tokens, all custom CSS
  data/
    image-manifest.json     GENERATED — which derivative widths exist per source
    content.js              All site copy, generated from `ELEVATE content.docx`,
                            plus the founder biography, the email address and
                            the social links the client supplied separately
    events.js               10 events + 58 image records — GENERATED from disk
    navigation.js           Nav links (must match the routes in App.jsx)
    chatbot.js              Every answer the chat assistant can give
  components/{layout,sections,ui}/
  hooks/                    useInView, useScrollProgress
```

## Rules worth knowing before you change things

These five are the ones that have already caused a bug once each.

**Accent colours are fills, not text.** On white, `gold-500` is 1.79:1,
`community` 2.25:1, `industry` 2.49:1 — all below the 3:1 a large heading
needs. Use the `-700` step for type (`-800` for gold, which only reaches 4.40:1
on its own `gold-50` tint). The saturated value does bars, dots, chip
backgrounds and glows, where contrast does not apply. Verified steps on white:
brand-700 7.48, aqua-700 5.82, leaf-700 5.64, gold-800 5.65, grape-700 11.32,
crimson-700 9.00, ember-700 8.33, steel-700 7.80. Neutral text: `ink-500` 5.00,
`ink-600` 7.36, `ink-700` 10.34. `ink-400` and `ink-300` are **not** text
colours.

**Full-screen overlays must be portalled to `document.body`.** The routed
`<main>` carries `.page-enter`, whose filled `transform` animation makes it a
containing block for fixed-position descendants — permanently. A modal rendered
in place resolves `fixed` against the page, not the viewport. See `Lightbox.jsx`.

**Tailwind variants do not apply to component classes.** `lg:rail-fill` on a
class declared in `@layer components` compiles to *nothing* — silently. If a
component class needs to change at a breakpoint, put the media query inside the
CSS rule (see `.rail-fill`).

**Photographs go through `<Picture>`, and `sizes` is not optional.** A bare
`srcset` tells the browser what exists, not how big the slot is, so without
`sizes` it assumes the image fills the viewport and downloads the 1920px file
for a 90px thumbnail — which is exactly the bug the derivatives were built to
fix. There is no visual symptom when `sizes` is wrong, only a slow page, so
check it against the layout rather than guessing. See the next section.

**`events.js` is generated, not hand-written.** Its `images` arrays come from
what is actually on disk under `public/assets/images/events/`, so it cannot
reference a missing file. Regenerate rather than edit those arrays by hand.

## Type and colour

Anton for display headings (one weight, condensed — the section titles in
`content.js` are already uppercase and some are long). Lato for everything
else, matching AIESEC's face. Lato has no 500 or 600, so `--font-weight-medium`
and `--font-weight-semibold` are pinned to 400 and 700: the site runs on two
weights.

**Display headings use the fluid scale, not `text-*` classes.** `.display-hero`,
`.display-section` and `.display-name` in `index.css` are `clamp()` sizes that
track the viewport. Anton is condensed but a single word still runs up to 7.5x
its font size, and `SplitReveal` makes every word an unbreakable inline-block —
so a fixed mobile size picked to look right on a 414px phone collapses to one
word per line on a 360px one, which is what the belief section was doing. The
maximum of each clamp is what the old `lg:` class produced, so desktop is
unchanged. Never put a Tailwind `text-*` class on the same element: Tailwind's
utilities layer beats the components layer, so a leftover `sm:text-6xl` wins
silently.

Colour tokens are sampled from the logo and live in the `@theme` block in
`src/index.css`. The house gradient —
`bg-gradient-to-br from-brand-700 via-brand-600 to-ink-900` — is used in three
places (closing CTA, chat panel header, the bridge "span" panel). Keep the same
stops and direction if you add a fourth; a gradient only reads as a system when
it is literally the same gradient.

## Motion

Most animation fires once on entry via `Reveal` + `useInView`. Two devices
track the scroll continuously through `useScrollProgress`: the LEARN → IMPACT
rail on the Bridge page, and `Parallax` on the image rows. Everything is plain
CSS driven by one custom property or an `.is-visible` class, and everything is
switched off under `prefers-reduced-motion` — including the two JS scrolls,
which read the preference directly because an explicit `behavior` in JS
overrides the stylesheet.

## Chat assistant

Not an AI: no model, no API key, no network call. Every reply is a node in
`src/data/chatbot.js`, reached either by tapping a chip or by keyword-matching
typed text. Anything that matches nothing returns a short refusal plus the menu,
so it only ever answers questions about Elevate. Long answers are imported from
`content.js` so the bot cannot drift from the pages it links to.

One node exists specifically to decline: `details-not-published` covers fees,
dates, duration and eligibility, which the site does not publish. **Keep that
behaviour** — inventing a fee or a start date would be worse than declining.

## Images and performance

Every photograph in `assets/images/` is around 2048px wide and 150-330 KB, and
the site used to serve those files to every slot that used them — including the
90px square thumbnails on the events page. A first visit to `/events` pulled
**5.4 MB** for 41 images, most of it to paint areas smaller than a postage
stamp. That is a sizing problem, not a hosting one: it would have been just as
slow on any host.

`npm run images` fixes it. `scripts/optimize-images.mjs` writes WebP copies of
each raster source at 320/640/1280/1920 into `public/assets/derived/`,
mirroring the source tree, and records which widths exist in
`src/data/image-manifest.json`. `<Picture>` reads that manifest and emits a
`srcset`, so the browser downloads the smallest file that can fill the slot.

Measured against the production build:

| Page | Before | After |
|------|--------|-------|
| `/events`, scrolled through | 5,440 KB | 389 KB (−93%) |
| `/` (home), scrolled through | 1,040 KB | 222 KB (−79%) |

Things to know:

- **Originals are never touched.** They are the client's photographs and the
  only copies in the repo; everything generated goes to a parallel tree. That
  also keeps `events.js` honest, since it is generated by scanning
  `assets/images/events/` and must not see derivatives.
- **Derivatives are committed, not built on deploy.** Encoding takes minutes and
  a static host should not spend build minutes regenerating bytes that never
  change. The script is idempotent — it skips anything newer than its source —
  so adding one photograph costs seconds. Run it and commit what it writes.
- **WebP, not AVIF.** AVIF is another ~25% smaller but doubles what has to be
  stored and is much slower to encode. The win here is overwhelmingly the
  right-sizing, not the codec. Adding an AVIF tier is a two-line change in the
  script and one more `<source>` in `Picture.jsx` if it is ever worth it.
- **`netlify.toml` carries the cache headers.** Netlify serves everything
  `max-age=0, must-revalidate` by default, so without it a returning visitor
  re-downloads every photograph. Fingerprinted bundles get a year; the
  photographs get a week with revalidation, because replacing a photograph
  keeps its filename and a year of `immutable` would strand viewers on the old
  one.

Still on the table if the site needs to get faster: route-level code splitting
(`React.lazy`), which would cut the 112 KB gzipped bundle down for a first
visit, and an AVIF tier.

## Images and licensing

| Set | Count | Licence |
|-----|-------|---------|
| `events/` | 58 | Client-supplied. **Owned by ELEVATE**, no third-party rights |
| `icons/` | 15 | Original artwork drawn for this project |
| `derived/` | 207 | Generated from the above — same licence as their sources |

**There is no stock photography on this site any more.** It used to carry six
Unsplash photographs — a lecture hall, an office meeting, a volunteer with
children — and every one of them was shot in a Western or African setting. Next
to an organization whose work is in Karachi they read as imported, which the
client said plainly. They were replaced with frames from the client's own event
sets, so every photograph on the site is now of the actual students,
facilitators and professionals Elevate works with. That is both more honest and
more persuasive, and it costs nothing in licensing. The originals are in git
history if one is ever wanted back.

Two notes on the event photography:

- **Several sets carry a burned-in Elevate watermark** — a logo block in one
  corner and a wordmark across the middle. That is fine inside the events
  gallery but unusable as a section image. Check before promoting a frame:
  Learning Expo, Synergy Summit, World Entrepreneurship Day and the 1280px half
  of the Saudabad set are clean; the 1848px and 2048px Saudabad frames are
  not.
- **Alt text needs a human pass.** Four images have real descriptions; the other
  54 fall back to event context ("Photograph from the Learning Expo, 14 January
  2025"). That is accurate but not descriptive, and these are photographs of
  real people — someone who can see them should write proper alt text.

## Accessibility

Semantic landmarks, one `<h1>` per page with no skipped levels, a skip link,
labelled form controls, visible focus rings, descriptive alt text on content
images and `alt=""` on decorative ones. The lightbox is a real modal: focus
trapped, Escape to close, arrow keys to move, scroll locked, focus returned to
the thumbnail that opened it. Colour pairings are contrast-checked — see the
rules above.

## Meet the Founder

`/meet-founder` is the one page that does not use `PageHeader`: a founder page
needs a second column for a face, so `FounderHero` is the page header written
out, and it carries the `<h1>`.

**No photograph of the founder has been supplied.** Rather than leave a grey
rectangle where a portrait goes, the hero renders a monogram medallion — her
initials on navy inside the logo's four pillar colours, turning slowly
(`.orbit-ring`). Set `founder.portrait` and `founder.portraitAlt` in
`content.js` to an image path and the photograph takes its place inside the
same ring; nothing else changes.

The three supplied biography paragraphs are **not** printed whole. Each is
split into the sentence that carries it and the list it contains, so the page
enumerates the expertise, the work and the opportunities instead of running
them together in prose. The words are the client's throughout — see the
comment above `founder` in `content.js` for which fragment came from which
paragraph.

The photographs on that page are real Elevate events and are **not** captioned
as the founder. Nobody has identified the people in the client's photographs,
and putting a name to a face on the strength of a guess is the one mistake on
that page that would actually matter.

## Not yet built

No verified impact figures, testimonials or partner logos exist, so the
counter / testimonial / logo-wall devices the sector relies on are deliberately
absent rather than filled with invented numbers. The contact form validates and
confirms in the browser; swap the body of `handleSubmit` for a `fetch()` when an
endpoint exists. No founder portrait exists either — see above.
