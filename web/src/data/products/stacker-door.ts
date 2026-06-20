import type { Product } from "@/types/product";

/**
 * Stacker Door — multi-panel sliding door system that stacks panels behind
 * one another to clear wide apertures. Replaces the former "Glazed Door"
 * page (which has been re-introduced separately as Casement Door).
 */
export const stackerDoor: Product = {
  slug: "stacker-door",
  category: "doors",
  heading: "Stacker Door",
  subheading: "Multi-panel stacking slider — 80 mm Semi-Commercial or 100 mm Thermally Broken",
  metaTitle: "Stacker Doors in Canberra & Sydney | CWD80 & CWD100",
  metaDescription:
    "Multi-panel stacking aluminium doors that slide on parallel tracks to clear wide openings without a swing arc. Available in the 80 mm Semi-Commercial or 100 mm Thermally Broken Series.",
  intro: [
    "Three or four panels on parallel tracks. Each one slides behind the next and stacks neatly at the end of the run, clearing a wide opening without a swing arc and without folded leaves to step around.",
    "Choose CWD80 for the elegant semi-commercial frame, or CWD100 thermally broken where the wider opening needs the extra performance.",
  ],
  benefits: [
    {
      title: "Built for the wide opening.",
      body: "Three or four panels engineered to your aperture. Stack to one side, or split-stack both ways.",
    },
    {
      title: "Clean lines, no concertina.",
      body: "No protruding folded leaves, no hinge action mid-track. Just glass that moves where you tell it.",
    },
    {
      title: "Steady on the rollers.",
      body: "Premium roller hardware on parallel tracks, sized to the panel weight. Smooth open, smooth close, year on year.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Multi-panel sliding (stacker)",
    profileThickness: "1.8mm – 2.0mm",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "Multi-panel roller hardware — SIEGENIA (DE) / Doric (AU)",
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
      heading: "Same door, two frames.",
      body: [
        "CWD80 — our 80mm semi-commercial profile. Dependable hardware, fair price, ready for most residential work.",
        "CWD100 — the 100mm thermally broken frame. Quieter rooms, less condensation, and a step up on the energy rating where you need it.",
      ],
    },
  ],
  ctaLabel: "Request a Quote",
};
