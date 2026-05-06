/**
 * Single registry of every product. Add a new product by:
 *   1. Creating its data file in this folder
 *   2. Importing + adding it to PRODUCTS below
 *   3. (Optionally) adding a nav entry in src/lib/site.ts
 */

import type { Product, ProductCategory } from "@/types/product";

// Doors
import { slidingDoor } from "./sliding-door";
import { foldingDoor } from "./folding-door";
import { casementDoor } from "./casement-door";
import { frontDoor } from "./front-door";

// Windows
import { ht102 } from "./ht102";
import { ht76AwningWindow } from "./ht76-awning-window";
import { hungWindows } from "./hung-windows";
import { casementWindow } from "./casement-window";
import { slidingWindowsCanberra } from "./sliding-windows-canberra";
import { commercialResidentialWindow } from "./commercial-residential-window";
import { alfrescoWindow } from "./alfresco-window";
import { thermalBreakWindow } from "./thermal-break-window";

export const PRODUCTS: Product[] = [
  slidingDoor,
  foldingDoor,
  casementDoor,
  frontDoor,
  ht102,
  ht76AwningWindow,
  hungWindows,
  casementWindow,
  slidingWindowsCanberra,
  commercialResidentialWindow,
  alfrescoWindow,
  thermalBreakWindow,
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
