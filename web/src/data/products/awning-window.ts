import type { Product } from "@/types/product";

/**
 * Merged awning-window page. Consolidates the former HT102, HT76 Awning Window
 * and "80 Series Awning" pages — all of which described the same two products
 * (the 80 Semi-Commercial and 100 Thermally Broken awning windows).
 */
export const awningWindow: Product = {
  slug: "awning-window",
  category: "windows",
  drawingType: "AW",
  heading: "Awning Window",
  subheading: "Top-hung ventilation — 80 mm Semi-Commercial or 100 mm Thermally Broken",
  metaTitle: "Awning Windows in Canberra & Sydney | CWD80 & CWD100",
  metaDescription:
    "Aluminium awning windows — top-hung sashes that ventilate in any weather. Available in the 80 mm Semi-Commercial Series or the 100 mm Thermally Broken Windows for NCC 7-star performance.",
  intro: [
    "Top-hung and outward-opening, the awning lets you keep the air moving even when the weather turns. A smooth hand-crank gives precise control of the opening, which is exactly what you want above a sink or behind a bench.",
    "Choose CWD80 for the elegant semi-commercial frame, or CWD100 thermally broken for a quieter room and a stronger energy rating.",
  ],
  benefits: [
    {
      title: "Air through, rain out.",
      body: "The sash opens outward from the base, so a light shower doesn't shut the room down.",
    },
    {
      title: "Smooth on the crank.",
      body: "A proper winder handles the opening cleanly — easy to reach above benches, sinks and bath edges.",
    },
    {
      title: "Sealed for the long term.",
      body: "Continuous EPDM seals and silicone-bedded glazing. Built to keep wind and water out, year on year.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Awning (top-hung)",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    profileThickness: "1.8mm – 2.0mm",
    glassOptions: "Double-glazed 5mm + 12A + 5mm standard",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "Hand-crank winder",
    //warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Monument", "White"],
  // hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Hoppe (DE)", "Roto (DE)", "Kinlong (CN)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Residential", "Commercial", "Hospitality", "Healthcare", "School", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  sections: [
    {
      heading: "Same window, two frames.",
      body: [
        "CWD80 — our 80mm semi-commercial profile. Tidy lines, dependable hardware, fair price. The right choice for most bedrooms, kitchens and bathrooms.",
        "CWD100 — the 100mm frame split internally by a reinforced polyamide thermal break. Quieter rooms, less condensation, and the help you need to push the energy rating up.",
      ],
    },
  ],
  ctaLabel: "Get a Free Quote",
};
