import manifest from "../../data/image-manifest.json";

/**
 * A photograph, served at the size it is actually painted.
 *
 * Every raster image on the site goes through here. `scripts/optimize-images.mjs`
 * writes WebP copies of each source at 320/640/1280/1920 and records which of
 * those exist in `image-manifest.json`; this component turns that record into a
 * `srcset` so the browser can pick the smallest file that fills the slot. The
 * original JPEG or PNG stays as the `<img>` fallback for the ~3% of browsers
 * with no WebP support.
 *
 * ## `sizes` is not optional in practice
 *
 * `srcset` alone tells the browser what exists, not how big the slot is — so
 * without `sizes` it assumes the image fills the viewport and downloads the
 * 1920 file for a 90px thumbnail, which is the exact bug this component was
 * written to fix. **Pass `sizes` describing the CSS width of the slot at each
 * breakpoint.** The default of `100vw` is correct only for the full-bleed
 * sections. Get it wrong in the generous direction and the page is merely
 * slower than it should be; there is no visual symptom, which is why it is
 * worth checking against the layout rather than guessing.
 *
 * ## Dimensions
 *
 * `width` and `height` come from the manifest, which read them off the file,
 * so they are always the true intrinsic size and always present — that is what
 * reserves the right box before the bytes arrive and keeps the page from
 * jumping. Pass them explicitly only for a source that has no manifest entry.
 *
 * `display: contents` on the `<picture>` is deliberate: it takes the wrapper
 * out of layout entirely, so the `<img>` remains the direct layout child of
 * whatever the call site put it in and rules like `h-full` and `object-cover`
 * behave exactly as they did before this component existed.
 *
 * Props
 *   src           path under /assets/images — the manifest key
 *   sizes         CSS width of the slot; see above
 *   priority      true for an image above the fold (eager + high fetchpriority)
 *   className     goes on the <img>, not on the wrapper
 */
export default function Picture({
  src,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
  width,
  height,
  ...rest
}) {
  const entry = manifest[src];

  const srcSet = entry?.widths.map((w) => `${entry.base}-${w}.webp ${w}w`).join(", ");

  const img = (
    <img
      src={src}
      alt={alt}
      width={width ?? entry?.width}
      height={height ?? entry?.height}
      loading={priority ? "eager" : "lazy"}
      // Off the main thread. The one case where it is worth being synchronous
      // is an LCP image, and that one is already eager and high priority.
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
      {...rest}
    />
  );

  // No derivatives — an SVG, or a source too small to be worth resizing.
  if (!srcSet) return img;

  return (
    <picture className="contents">
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      {img}
    </picture>
  );
}
