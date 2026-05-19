/**
 * Single registry of every product. Add a new product by:
 *   1. Creating its data file in this folder
 *   2. Importing + adding it to RAW_PRODUCTS below
 *   3. Adding a slug → URL array entry in `productImages` (src/lib/images.ts)
 *   4. (Optionally) adding a nav entry in src/lib/site.ts
 *
 * `excludeFromIndex` products (Thermal Break, Alfresco) still build + are
 * reachable by URL, but are filtered out of category grids and nav.
 */

import type { Product, ProductCategory } from "@/types/product";
import { productImages } from "@/lib/images";

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
 * Final product list with imagery applied from `productImages`
 * (src/lib/images.ts). Each product receives:
 *   • `images` — the full ordered URL array for that slug
 *   • `image`  — the cover, derived from `images[0]`
 * A product data file may still hard-code its own `image` / `images`,
 * which takes precedence over the central assignment.
 */
export const PRODUCTS: Product[] = RAW_PRODUCTS.map((p) => {
  const imgs = p.images ?? productImages[p.slug] ?? [];
  return {
    ...p,
    images: imgs,
    image: p.image ?? imgs[0],
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
