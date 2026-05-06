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
};
