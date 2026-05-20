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
  awningWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779244055/AW-cad_mwpvtq.png",
    //"https://res.cloudinary.com/drlrwvdta/image/upload/v1779245294/AW-cad-collection_iymejo.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255959/AW-cad2_gqmzo4.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255957/AW-cad3_wykswp.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255957/AW-cad4_rcmjcz.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255958/AW-cad5_quozby.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255958/AW-cad6_cfhnlm.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255959/AW-cad7_vynd5r.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255959/AW-cad8_sdk7w2.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255959/AW-cad9_hlkygx.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255959/AW-cad10_j7qcqd.png",
  ],
  slidingWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779244055/SW-cad1_dedamx.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779244057/SW-cad2_w6ytmg.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779245295/SW-cad-collection_cudfaq.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257024/SW-cad2_wxkbaa.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257023/SW-cad3_dttqn0.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257024/SW-cad6_d5k9rz.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257025/SW-cad7_obiyia.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257026/SW-cad8_d3znra.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257026/SW-cad10_n52gzw.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257026/SW-cad11_zxyiyx.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779257026/SW-cad12_bcne4n.png",
  ],
  casementWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255669/CW-cad_sr9zml.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255669/CW-cad2_pqurzd.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255669/CW-cad3_lcaozp.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255670/CW-cad4_aon0fm.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255671/CW-cad5_ylwq1a.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255670/CW-cad6_jkz0ke.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255671/CW-cad7_k1dyxs.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255671/CW-cad8_n8geok.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255671/CW-cad9_vtqv8r.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255672/CW-cad10_oxc7ux.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779255669/CW-cad11_cd0q72.png",
  ],
  hungWindow: [
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256863/HW-cad1_ogewtz.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256863/HW-cad2_u6srr7.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256862/HW-cad3_kttohe.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256862/HW-cad4_l3cefk.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256862/HW-cad5_vh4iit.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256862/HW-cad6_iaimce.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256861/HW-cad7_cbu2so.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256861/HW-cad8_gclaxc.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256861/HW-cad9_uj33yn.png",
    "https://res.cloudinary.com/drlrwvdta/image/upload/v1779256863/HW-cad10_dnkodr.png",
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
  // ── Doors ──
  "sliding-door": [galleryImages[2]],
  "folding-door": [galleryImages[1]],
  "glazed-door": [galleryImages[2]],

  // ── Windows ──
  "awning-window": [
    galleryImages[13], // CW_D_AW (lead shot)
    cadImages.awningWindow[0],
    cadImages.awningWindow[1],
  ],
  "sliding-windows-canberra": [
    galleryImages[14], // CW_D_SW (lead shot)
    cadImages.slidingWindow[0],
    cadImages.slidingWindow[1],
    cadImages.slidingWindow[2],
    cadImages.slidingWindow[3],
  ],
  "casement-window": [
    galleryImages[15], // CW_D_CW (lead shot)
    galleryImages[6], // project photo
    cadImages.casementWindow[0],
    cadImages.casementWindow[1],
  ],
  "hung-windows": [
    galleryImages[16], // CW_D_HW (lead shot)
    galleryImages[5], // project photo
    cadImages.hungWindow[0],
    cadImages.hungWindow[1],
  ],

  // ── Non-product pages ──
  "thermal-break-window": [galleryImages[10]],
  "alfresco-window": [galleryImages[9]],
};
