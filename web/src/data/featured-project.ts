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
  productsUsed: ["Awning Windows", "Sliding Doors", "Glazed Doors"],
  story:
    "Full glazing replacement for a contemporary Whitlam residence — combining HT102 thermal-break awning windows with full-height sliding doors to maximise natural light without compromising on energy performance.",
  image: galleryImages[11],
  imageAlt:
    "Residential install in Whitlam ACT featuring CW&D HT102 awning windows and sliding doors",
};
