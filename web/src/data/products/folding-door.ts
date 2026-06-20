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
    "Multiple glazed panels hinged together. Fold them away in a concertina and almost the full opening clears, so the indoor room and the outdoor space read as one.",
    "Configurable from two to four panels, hinged left, right or split. Choose CWD80 for the elegant semi-commercial frame, or CWD100 thermally broken where you want the room sealed properly.",
  ],
  benefits: [
    {
      title: "The whole wall, open.",
      body: "Panels stack neatly to one side and clear most of the opening — true indoor and outdoor in one room.",
    },
    {
      title: "Sized to the opening.",
      body: "Two, three or four panels. Folded left, right or split. We confirm the configuration before fabrication.",
    },
    {
      title: "One leaf for everyday.",
      body: "Use a single leaf as a normal swing door for daily traffic. Unfold the rest only when you're opening it all up.",
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
      heading: "Same door, two frames.",
      body: [
        "CWD80 — our 80mm semi-commercial profile. Tidy lines, dependable hardware, fair price.",
        "CWD100 — the 100mm thermally broken frame. Quieter rooms, less condensation, and the step up on the energy rating where you need it.",
      ],
    },
  ],
  ctaLabel: "Get a Quote",
};
