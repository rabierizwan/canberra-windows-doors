import type { Product } from "@/types/product";

export const alfrescoWindow: Product = {
  slug: "alfresco-window",
  category: "windows",
  // Not a product — this is a glazing *service* (patio/sunroom conversions).
  // Reachable by link, kept out of product grids + nav.
  excludeFromIndex: true,
  heading: "Alfresco Window",
  subheading: "Custom alfresco and sunroom glazing solutions",
  metaTitle: "Alfresco Window for Outdoor Living | Sunroom Glazing ACT",
  metaDescription:
    "Custom glazing solutions to convert open patios into weather-resistant alfresco spaces or light-filled sunrooms that work year-round.",
  intro: [
    "An exposed patio, deck or covered outdoor area becomes a room you can use through the year — sealed in, properly glazed, no draughts.",
    "We design and supply the glazing system, match it to the existing structure, and install it as a single, considered enclosure.",
  ],
  benefits: [
    {
      title: "A room you actually use.",
      body: "From three months of the year to twelve. Sheltered from wind and rain, warm enough to sit in through winter.",
    },
    {
      title: "Light, with control.",
      body: "Floor-to-ceiling glazing where it counts, with proper seals so the room doesn't draw in heat or noise.",
    },
    {
      title: "Matched to the house.",
      body: "Framing detailed to your existing structure. Sliding or bi-folding doors where you want access, fixed glass where you don't.",
    },
  ],
  sections: [
    {
      heading: "What we cover.",
      body: [
        "Alfresco conversions — patio or deck enclosures that sit cleanly against the existing roofline.",
        "Sunrooms — purpose-built glazed rooms with double-glazed insulated units for year-round comfort.",
        "Custom glazing — door and window combinations sized to the opening, finished to match the rest of the house.",
      ],
    },
  ],
  ctaLabel: "Contact Us",
};
