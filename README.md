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
```

## Structure

```
index.html                  Fonts (Anton + Lato) and the app mount
public/
  _redirects                SPA fallback — required by static hosts, do not remove
  favicon.svg
  assets/images/
    brand/                  Logo files
    photos/                 6 stock photographs (Unsplash)
    events/<slug>/          58 client-owned event photographs and posters
    icons/                  15 original SVG line icons
src/
  App.jsx                   Route table
  index.css                 Tailwind import, design tokens, all custom CSS
  data/
    content.js              All site copy, generated from `ELEVATE content.docx`
    events.js               10 events + 58 image records — GENERATED from disk
    navigation.js           Nav links (must match the routes in App.jsx)
    chatbot.js              Every answer the chat assistant can give
  components/{layout,sections,ui}/
  hooks/                    useInView, useScrollProgress
```

## Rules worth knowing before you change things

These four are the ones that have already caused a bug once each.

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

**`events.js` is generated, not hand-written.** Its `images` arrays come from
what is actually on disk under `public/assets/images/events/`, so it cannot
reference a missing file. Regenerate rather than edit those arrays by hand.

## Type and colour

Anton for display headings (one weight, condensed — the section titles in
`content.js` are already uppercase and some are long). Lato for everything
else, matching AIESEC's face. Lato has no 500 or 600, so `--font-weight-medium`
and `--font-weight-semibold` are pinned to 400 and 700: the site runs on two
weights.

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

## Images and licensing

| Set | Count | Licence |
|-----|-------|---------|
| `photos/` | 6 | [Unsplash License](https://unsplash.com/license) — free for commercial use, no attribution required, none premium |
| `events/` | 58 | Client-supplied. **Owned by ELEVATE**, no third-party rights |
| `icons/` | 15 | Original artwork drawn for this project |

Unsplash photographers, for the record: Vitaly Gariev, Ninthgrid, Natasha Hall,
saad ali, Rosalind Chang, Sergey Kotenev.

Two notes on the event photography:

- **Several sets carry a burned-in Elevate watermark.** That is fine inside the
  events gallery but collides with the header logo when used as a section
  image. The Learning Expo set is the clean one, which is why the hero and the
  About section both draw from it.
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

## Not yet built

No verified impact figures, testimonials or partner logos exist, so the
counter / testimonial / logo-wall devices the sector relies on are deliberately
absent rather than filled with invented numbers. The contact form validates and
confirms in the browser; swap the body of `handleSubmit` for a `fetch()` when an
endpoint exists.
