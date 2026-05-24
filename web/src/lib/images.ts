/**
 * Cloudinary-hosted imagery, kept in one place so components import a
 * named constant instead of pasting raw upload URLs.
 */

export const CLOUDINARY_CLOUD_NAME = "drlrwvdta";

// USAGE
// import { heroImage, galleryImages, cadImages, productImages } from "@/lib/images";

/** Home hero image. */
export const heroImage =
  //"https://res.cloudinary.com/drlrwvdta/image/upload/v1779071068/CW_D_hero_pregyr.png";
  // "https://res.cloudinary.com/drlrwvdta/image/upload/v1778122363/CW_D-hero_t370mt.png";
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779240866/CW_D-Hero_em6taf.png";

/**
 * Legacy flat gallery — frozen at 17 items (indices 0-16) for backward
 * compatibility. Existing references (featured-project.ts, productImages)
 * use these by numeric index, so do NOT reorder or remove items here.
 *
 * For NEW imagery, prefer the named collections below (cadImages, etc).
 */
export const galleryImages = [
  // ── Project photography (cwd-edited-001…013) ──
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086180/cwd-edited-001_znychs.png", // 0
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086182/cwd-edited-002_skngum.png", // 1
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086179/cwd-edited-003_ldxyou.png", // 2
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-004_ye85by.png", // 3
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086181/cwd-edited-005_gzz3ab.png", // 4
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086183/cwd-edited-006_cuincc.png", // 5
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086179/cwd-edited-007_k1tf2r.png", // 6
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-008_rvy1rc.png", // 7
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-009_a997lw.png", // 8
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086213/cwd-edited-010_ogk6ev.png", // 9
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086182/cwd-edited-011_z0gkj8.png", // 10
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086220/cwd-edited-012_d5cnzl.png", // 11
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086180/cwd-edited-013_rcgz3m.png", // 12

  // ── AI-generated product shots ──
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779188584/CW_D_AW_xbdxni.png", // 13  Awning
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779193276/CW_D_SW_ehtdji.png", // 14  Sliding window
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779193459/CW_D_CW_gyn0t4.png", // 15  Casement window
  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779194030/CW_D_HW_vtjpw1.png", // 16  Hung window

  "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086214/cwd-edited-009_a997lw.png" // Whitlam
] as const;

export type GalleryImage = (typeof galleryImages)[number];

/**
 * CAD renderings, grouped by window type.
 *
 * Replaces the previous flat-array approach (which forced everything into
 * `galleryImages` and made it impossible to tell which index belonged to
 * which product). Add new CAD URLs straight into the relevant array —
 * no index counting, no off-by-ones.
 *
 *   cadImages.awningWindow[0]   // clearly an awning CAD
 *   cadImages.slidingWindow[2]  // clearly a sliding-window CAD
 *
 * Future additions: just append a URL to the relevant array. The first
 * entry is treated as the "lead" CAD and surfaces first in the slider.
 */
export const cadImages = {
  // ── Doors ──
  stackerDoor: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779517815/StD-cad1_r7yw4y.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779517814/StD-cad5_ytlagf.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779517813/StD-cad3_jtsnep.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779517813/StD-cad4_agkl2i.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779517813/StD-cad2_ni0syh.png",
  ],
  casementDoor: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779584412/Casement-door-opening_rlylhd.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518025/CD-cad1_kuvkzc.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518016/CD-cad3_j5efzx.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518015/CD-cad2_qlnp2k.png",
  ],
  bifoldingDoor: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779584599/Bifold-door-opening_jf4ipg.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518088/biFD-cad1_srgxrb.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518076/biFD-cad2_dvc6jn.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518076/biFD-cad3_oobcts.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518083/biFD-cad4_uwpdld.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518076/biFD-cad5_mqrvz0.png",
  ],
  slidingDoor: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779086179/cwd-edited-003_ldxyou.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518167/SD-cad1_raywib.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518156/SD-cad2_dewb9w.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518157/SD-cad3_mtvvea.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518158/SD-cad4_rn5ipx.png",
  ],

  // ── Windows ──
  awningWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518394/AW-cad1_nq671b.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518394/AW-cad2_pyrx11.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518393/AW-cad3_knlkd7.png",
  ],
  slidingWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518353/SW-cad1_doy8ct.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518351/SW-cad2_x2cdfr.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518354/SW-cad3_zi8tyw.png",
  ],
  casementWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518245/CW-cad1_jq3rpj.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518244/CW-cad2_u08sm5.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518244/CW-cad3_gka9yd.png",
  ],
  hungWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518293/HW-cad1_mhak7m.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518293/HW-cad2_utzw5r.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779518294/HW-cad3_ms2xtl.png",
  ],
} satisfies Record<string, readonly string[]>;

/**
 * Per-product image sets — keyed by product slug.
 *
 * Each value is an ordered array of Cloudinary URLs:
 *   • index 0 is the COVER image (used on cards, hero, related lists)
 *   • the remaining entries power the slider on the detail page
 *
 * Mix `galleryImages[N]` (lead shots) with `cadImages.{type}[N]`
 * (CAD detail renders) as needed. The registry
 * (src/data/products/index.ts) reads from here automatically.
 */
export const productImages: Record<string, string[]> = {
  // ── Doors (CAD-led, no AI lead shot yet) ──
  "sliding-door": [...cadImages.slidingDoor],
  "folding-door": [...cadImages.bifoldingDoor],
  "stacker-door": [...cadImages.stackerDoor],
  "casement-door": [...cadImages.casementDoor],

  // ── Windows (AI lead shot + CAD details) ──
  "awning-window": [
    galleryImages[13], // CW_D_AW (lead shot)
    ...cadImages.awningWindow,
  ],
  "sliding-windows-canberra": [
    galleryImages[14], // CW_D_SW (lead shot)
    ...cadImages.slidingWindow,
  ],
  "casement-window": [
    galleryImages[15], // CW_D_CW (lead shot)
    ...cadImages.casementWindow,
  ],
  "hung-windows": [
    galleryImages[16], // CW_D_HW (lead shot)
    ...cadImages.hungWindow,
  ],

  // ── Non-product pages ──
  "thermal-break-window": [galleryImages[10]],
  "alfresco-window": [galleryImages[9]],
};
