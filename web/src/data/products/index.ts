/**
 * Single registry of every product. Add a new product by:
 *   1. Creating its data file in this folder
 *   2. Importing + adding it to RAW_PRODUCTS below
 *   3. Adding a slug → gallery index entry in PRODUCT_IMAGE_INDEX
 *   4. (Optionally) adding a nav entry in src/lib/site.ts
 *
 * `excludeFromIndex` products (Thermal Break, Alfresco) still build + are
 * reachable by URL, but are filtered out of category grids and nav.
 */

import type { Product, ProductCategory } from "@/types/product";
import { galleryImages } from "@/lib/images";

// Doors
import { slidingDoor } from "./sliding-door";
import { foldingDoor } from "./folding-door";
import { glazedDoor } from "./glazed-door";

// Windows
import { awningWindow } from "./awning-window";
import { hungWindows } from "./hung-windows";
import { casementWindow } from "./casement-window";
import { slidingWindowsCanberra } from "./sliding-windows-canberra";

// Non-product pages — reachable by URL, excluded from grids/nav
import { thermalBreakWindow } from "./thermal-break-window";
import { alfrescoWindow } from "./alfresco-window";

/** Raw product list, before gallery imagery is applied. */
const RAW_PRODUCTS: Product[] = [
  // Doors
  slidingDoor,
  foldingDoor,
  glazedDoor,
  // Windows
  awningWindow,
  slidingWindowsCanberra,
  casementWindow,
  hungWindows,
  // Non-product pages (excludeFromIndex)
  thermalBreakWindow,
  alfrescoWindow,
];

/**
 * Maps each product slug → an index in `galleryImages` (src/lib/images.ts).
 *
 * NOTE: the gallery files are named generically (cwd-edited-001 … 013), so
 * this mapping is a best-effort guess. To re-pair a product with a different
 * photo, just change its index here. Index 11 is reserved for the featured
 * project (see featured-project.ts).
 */
const PRODUCT_IMAGE_INDEX: Record<string, number> = {
  "sliding-door": 0,
  "folding-door": 1,
  "glazed-door": 2,
  "awning-window": 3,
  "sliding-windows-canberra": 7,
  "casement-window": 6,
  "hung-windows": 5,
  "thermal-break-window": 10,
  "alfresco-window": 9,
};

/** Final product list with gallery imagery applied. */
export const PRODUCTS: Product[] = RAW_PRODUCTS.map((p) => {
  const idx = PRODUCT_IMAGE_INDEX[p.slug];
  if (idx === undefined || !galleryImages[idx]) return p;
  return {
    ...p,
    image: p.image ?? galleryImages[idx],
    imageAlt:
      p.imageAlt ?? `${p.heading} — supplied by Canberra Windows & Doors`,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Category grids — excludes `excludeFromIndex` pages (Thermal Break, Alfresco). */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === category && !p.excludeFromIndex,
  );
}

/** All slugs — includes excluded pages so their routes still build. */
export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
