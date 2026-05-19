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
] as const;

export type GalleryImage = (typeof galleryImages)[number];
