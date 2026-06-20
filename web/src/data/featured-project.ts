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
  title: "Whitlam, in a new light.",
  location: "Whitlam, ACT",
  productsUsed: ["Awning Windows", "Sliding Doors", "Bi-Folding Doors"],
  story:
    "We replaced the glazing throughout a contemporary Whitlam home: CWD100 thermally broken awning windows alongside full-height sliding doors. The house gained light from end to end, and lost none of its warmth.",
  image: galleryImages[17],
  imageAlt:
    "Contemporary Whitlam home with CWD100 thermally broken awning windows and full-height sliding doors",
};
