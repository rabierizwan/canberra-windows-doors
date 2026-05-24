import type { Product } from "@/types/product";

export const foldingDoor: Product = {
  slug: "folding-door",
  category: "doors",
  heading: "Bi-folding Door",
  subheading: "Multi-panel concertina — 80 mm Semi-Commercial or 100 mm Thermally Broken",
  metaTitle: "Bi-folding Doors in Canberra & Sydney | CW&D",
  metaDescription:
    "Aluminium bi-folding doors with two, three or four glazed panels. Available in the 80 mm Semi-Commercial Series or the 100 mm Thermally Broken Windows.",
  intro: [
    "A bi-folding door is built from multiple glazed panels hinged together — fold them sideways like a concertina and the whole aperture clears, merging interior living with the space beyond.",
    "Configurable as a two-, three- or four-panel set, hinged from the left, right or split down the middle. One leaf can act as a single passage door for everyday use; unfold the rest when you're opening up the room.",
    "Available in the 80 mm Semi-Commercial Series (CWD80) for cost-effective residential installs, or the 100 mm Thermally Broken Windows (CWD100) when energy performance matters most.",
  ],
  benefits: [
    {
      title: "Open the Whole Wall",
      body: "Panels stack neatly to one side, clearing up to 90% of the opening for true indoor–outdoor living.",
    },
    {
      title: "Two to Four Panels",
      body: "Sized to your opening — two-leaf for narrower spans, three- or four-leaf for wider apertures. Hinged left, right or split.",
    },
    {
      title: "Single-Pass Operation",
      body: "Use one leaf as a normal swing door for everyday traffic. Unfold the rest only when you need the full opening.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Bi-folding (concertina)",
    profileThickness: "1.8mm – 2.0mm",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "Bi-fold track hardware — SIEGENIA (DE) / Doric (AU)",
    // warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Monument", "White"],
  // hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Kinlong (CN)", "Hoppe (DE)", "Roto (DE)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel", "Retractable"],
  applications: ["Residential", "Commercial", "Hospitality", "Healthcare", "School", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  sections: [
    {
      heading: "Panel configurations",
      body: [
        "Two-panel — narrower openings, both panels fold to one side.",
        "Three-panel — wider apertures with an odd-count fold; one leaf can serve as the single passage door.",
        "Four-panel — split two-and-two for the widest opening, or stack all four to one side for an unbroken sweep.",
        "We size each set to your opening and confirm the stacking direction before fabrication.",
      ],
    },
    {
      heading: "Two series to choose from",
      body: [
        "80 mm Semi-Commercial Series (CWD80) — a standard aluminium frame on an 80mm profile. Cost-effective for most residential and semi-commercial installs.",
        "100 mm Thermally Broken Windows (CWD100) — a 100mm frame with a reinforced polyamide thermal break. Higher energy performance, helps meet NCC 7-star requirements.",
      ],
    },
    {
      heading: "Retractable flyscreen option",
      body: [
        "Bi-folding doors are the only product in our range that accept a retractable flyscreen — it rolls back into a slim side cassette when not in use, so it stays out of the way when the doors are fully open.",
      ],
    },
  ],
  ctaLabel: "Get a Quote",
};
