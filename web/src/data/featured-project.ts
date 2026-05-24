import { galleryImages } from "@/lib/images";

export type FeaturedProject = {
  title: string;
  location: string;
  productsUsed: string[];
  story: string;
  /** Cloudinary URL — leave undefined to render branded placeholder */
  image?: string;
  imageAlt: string;
};

export const featuredProject: FeaturedProject = {
  title: "A residence in Whitlam",
  location: "16 Chaloupka Street, Whitlam ACT",
  productsUsed: ["Awning Windows", "Sliding Doors", "Bi-Folding Doors"],
  story:
    "Full glazing replacement for a contemporary Whitlam residence — combining CWD100 thermally broken awning windows with full-height sliding doors to maximise natural light without compromising on energy performance.",
  image: galleryImages[17],
  imageAlt:
    "Residential install in Whitlam ACT featuring CW&D CWD100 awning windows and sliding doors",
};
