/**
 * Shape of a product (window or door) on the marketing site.
 * One template renders all 12 product pages from this data.
 */

export type ProductCategory = "doors" | "windows";

export type ProductSpec = {
  model?: string;
  openingStyle?: string;
  profileThickness?: string;
  profileWidth?: string;
  glassOptions?: string;
  glassStandard?: string;
  extrusionProfile?: string;
  standardHardware?: string;
  warranty?: string;
};

export type ProductBenefit = {
  title: string;
  body: string;
};

export type Product = {
  /** URL slug — must match the [slug] route param */
  slug: string;
  /** Marketing category */
  category: ProductCategory;
  /** Page <h1> */
  heading: string;
  /** Optional sub-heading */
  subheading?: string;
  /** SEO meta title (falls back to heading) */
  metaTitle?: string;
  /** SEO meta description */
  metaDescription: string;
  /** Hero / opening paragraphs */
  intro: string[];
  /** "Why Choose..." benefit list */
  benefits?: ProductBenefit[];
  /** Structured spec table — optional (not all products have one) */
  spec?: ProductSpec;
  /** Glass type / configuration list */
  glassTypes?: string[];
  glassColors?: string[];
  /** Profile color options */
  profileColors?: string[];
  /** Hardware brand options */
  hardwareBrands?: string[];
  /** Flyscreen options */
  flyscreens?: string[];
  /** Industry applications row */
  applications?: string[];
  /** Performance feature row */
  performance?: string[];
  /** Additional free-form sections after the spec table */
  sections?: { heading: string; body: string[] }[];
  /** CTA label shown in the hero */
  ctaLabel?: string;
  /**
   * Cover image (Cloudinary URL) — used on cards, hero and related lists.
   * Derived automatically from `images[0]` by the registry; leave undefined
   * to render a branded placeholder.
   */
  image?: string;
  imageAlt?: string;
  /**
   * Full ordered image set for this product (Cloudinary URLs). Index 0 is
   * the cover. Assigned from `productImages` in src/lib/images.ts.
   * Ready to power a product image gallery on the detail page.
   */
  images?: string[];
  /**
   * When true, the page still builds + is reachable by URL, but the product
   * is excluded from category grids, nav menus and "related" lists.
   * Used for pages that aren't sibling products — e.g. the Thermal-Broken
   * series explainer and the Alfresco glazing service.
   */
  excludeFromIndex?: boolean;
};
