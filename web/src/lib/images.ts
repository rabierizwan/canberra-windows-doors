/**
 * Cloudinary-hosted imagery, kept in one place so components import a
 * named constant instead of pasting raw upload URLs.
 */

export const CLOUDINARY_CLOUD_NAME = "drlrwvdta";

// USAGE
// import { heroImage, galleryImages } from "@/lib/images";

// <Image src={heroImage} alt="..." width={1600} height={900} />
// {galleryImages.map((url) => <Image key={url} src={url} ... />)}

/** Home hero image. */
export const heroImage =
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779071068/CW_D_hero_pregyr.png";

/**
 * Edited project gallery, ordered cwd-edited-001 … 013.
 * Index 0 is image 001, so `galleryImages[n - 1]` gives image n.
 */
export const galleryImages = [
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086180/cwd-edited-001_znychs.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086182/cwd-edited-002_skngum.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086179/cwd-edited-003_ldxyou.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-004_ye85by.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086181/cwd-edited-005_gzz3ab.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086183/cwd-edited-006_cuincc.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086179/cwd-edited-007_k1tf2r.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-008_rvy1rc.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-009_a997lw.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086213/cwd-edited-010_ogk6ev.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086182/cwd-edited-011_z0gkj8.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086220/cwd-edited-012_d5cnzl.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086180/cwd-edited-013_rcgz3m.png",
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779188584/CW_D_AW_xbdxni.png",
] as const;

export type GalleryImage = (typeof galleryImages)[number];

/**
 * Per-product image sets — keyed by product slug.
 *
 * Each value is an ordered array of Cloudinary URLs:
 *   • index 0 is the COVER image (used on cards, hero, related lists)
 *   • the remaining entries are extra shots, ready to power a product
 *     image gallery on the detail page
 *
 * To assign photography to a product, just paste its Cloudinary URLs into
 * the array below. The registry (src/data/products/index.ts) reads from
 * here automatically — no other file needs editing.
 *
 * Current arrays are seeded with one image each from `galleryImages`;
 * replace / extend them with real product photography as it's uploaded.
 */
export const productImages: Record<string, string[]> = {
  // ── Doors ──
  "sliding-door": [galleryImages[0]],
  "folding-door": [galleryImages[1]],
  "glazed-door": [galleryImages[2]],

  // ── Windows ──
  "awning-window": [galleryImages[13], galleryImages[3]],
  "sliding-windows-canberra": [galleryImages[7]],
  "casement-window": [galleryImages[6]],
  "hung-windows": [galleryImages[5]],

  // ── Non-product pages ──
  "thermal-break-window": [galleryImages[10]],
  "alfresco-window": [galleryImages[9]],
};
