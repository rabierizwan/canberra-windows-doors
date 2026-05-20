import type { Product } from "@/types/product";

/**
 * Merged awning-window page. Consolidates the former HT102, HT76 Awning Window
 * and "80 Series Awning" pages — all of which described the same two products
 * (the 80 standard and 100 thermal-broken awning windows).
 */
export const awningWindow: Product = {
  slug: "awning-window",
  category: "windows",
  drawingType: "AW",
  heading: "Awning Window",
  subheading: "Top-hung ventilation — 80 standard or 100 thermal-broken",
  metaTitle: "Awning Windows in Canberra & Sydney | 80 & 100 Series",
  metaDescription:
    "Aluminium awning windows — top-hung sashes that ventilate in any weather. Available in the 80 standard series or the 100 thermal-broken series for NCC 7-star performance.",
  intro: [
    "An awning window is top-hung and opens outward from the base, drawing fresh air through even in light rain. A smooth hand-crank winder gives precise control over the opening — ideal for kitchens, bathrooms and high or hard-to-reach windows.",
    //"Available in the 80 Series standard frame or the 100 thermal-broken series. Double-glazed as standard.",
  ],
  benefits: [
    {
      title: "Ventilate in Any Weather",
      body: "The outward, bottom-opening sash channels fresh air through while shielding the opening from rain.",
    },
    {
      title: "Hand-Crank Control",
      body: "A winder operator opens and closes the sash smoothly — easy to reach above benches and sinks.",
    },
    {
      title: "Double-Glazed Comfort",
      body: "A 5-12-5 insulating glass unit dampens outside noise and steadies indoor temperature.",
    },
    {
      title: "Sealed Against Draughts",
      body: "Continuous EPDM seals and silicone-bedded glazing keep wind and water out, year after year.",
    },
  ],
  spec: {
    model: "80 Series · 100 Series",
    openingStyle: "Awning (top-hung)",
    profileWidth: "80mm (80 Series) · 102mm (100 Series)",
    profileThickness: "1.8mm – 2.0mm",
    glassOptions: "Double-glazed 5mm + 12A + 5mm standard",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (100 Series: thermally broken)",
    standardHardware: "Hand-crank winder",
    warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E", "Ordinary flat glass"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Custom"],
  hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Hoppe (DE)", "Roto (DE)", "Kinlong (CN)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Hospitality", "Residential", "Healthcare", "School", "Commercial", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  sections: [
    {
      heading: "Two series to choose from",
      body: [
        "80 Series — a standard aluminium frame on an 80mm profile. Double-glazed, well-sealed and cost-effective for the majority of residential openings.",
        "100 Thermal Broken Series — a 102mm frame with a reinforced polyamide thermal break separating the inside and outside faces. Minimises heat transfer and helps new builds and renovations meet NCC 7-star energy requirements.",
        "Not sure which suits your project? See our thermal-broken series explainer, or ask us for a recommendation when you request a quote.",
      ],
    },
    {
      heading: "Double-Glazed as Standard",
      body: [
        "Every awning window is glazed with an insulating glass unit — two panes of toughened glass separated by a 12mm air cavity (5 + 12A + 5). The sealed cavity slows heat transfer and reduces outside noise.",
        "Glass is bedded in silicone with continuous EPDM weather seals around the frame and sash, forming a tight, durable barrier against wind and water.",
      ],
    },
  ],
  ctaLabel: "Get a Free Quote",
};
