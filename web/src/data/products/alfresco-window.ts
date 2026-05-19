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
    "We specialise in custom glazing, window and door solutions to help homeowners convert open patios into weather-resistant spaces or create light-filled sunrooms that function year-round.",
  ],
  sections: [
    {
      heading: "Exquisite Alfresco Conversions",
      body: [
        "We transform open-air patios, decks and covered outdoor areas into weather-resistant alfresco window spaces using premium glazed enclosures.",
        "What we provide: custom double-glazed windows for thermal control · sliding or bi-fold glass doors for flexible access · framing systems matching your existing home structure.",
      ],
    },
    {
      heading: "Why Convert Your Alfresco",
      body: [
        "Enjoy the space all year · Protect outdoor furniture from the elements · Add extra living or dining area · Increase energy efficiency and home value.",
      ],
    },
    {
      heading: "Sunrooms",
      body: [
        "Bright, comfortable spaces built to last. Our sunroom solutions feature floor-to-ceiling glass panels and advanced insulated glazing units (IGUs) for all-season comfort.",
        "Benefits: comfortable seasonal use · increased home resale value · enhanced natural light · improved indoor-outdoor flow · better garden and yard views.",
      ],
    },
    {
      heading: "Complete Glazing Solutions",
      body: [
        "Design consultation, product selection, professional installation and ongoing support with warranties.",
      ],
    },
  ],
  ctaLabel: "Contact Us",
};
