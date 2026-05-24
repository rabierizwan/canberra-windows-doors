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
    "A stacker door is a multi-panel sliding system — typically three or four glazed panels running on parallel tracks. As you open the door, each panel slides behind the next, stacking out of the way and clearing a wide aperture.",
    "Where a bi-folding door concertinas, a stacker door slides — quieter motion, no protruding folded leaves, and panels can be sized for very wide openings without losing structural integrity.",
    "Available in the 80 mm Semi-Commercial Series (CWD80) for cost-effective residential installs, or the 100 mm Thermally Broken Windows (CWD100) when energy performance matters most.",
  ],
  benefits: [
    {
      title: "Wide Aperture, Clean Lines",
      body: "Three or four panels slide independently to stack at one or both ends, clearing the opening with no folded leaves protruding into the space.",
    },
    {
      title: "Quieter Than Bi-fold",
      body: "Smooth rollers on parallel tracks — no hinge action, no concertina motion. Operation stays consistent across full open and full close.",
    },
    {
      title: "Sized to the Opening",
      body: "Each panel is engineered to your aperture. Stack to the left, the right, or split-stack to both ends.",
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
      heading: "Two series to choose from",
      body: [
        "80 mm Semi-Commercial Series (CWD80) — a standard aluminium frame on an 80mm profile. Cost-effective for most residential and semi-commercial installs.",
        "100 mm Thermally Broken Windows (CWD100) — a 100mm frame with a reinforced polyamide thermal break. Higher energy performance, helps meet NCC 7-star requirements.",
      ],
    },
    {
      heading: "Stacker vs sliding vs bi-fold",
      body: [
        "Sliding door — one or two panels, side-to-side. Best for narrower openings.",
        "Stacker door — three or more panels, stacking behind each other. Best for wide openings where you want clean sightlines.",
        "Bi-folding door — concertina action, panels fold to one side. Best when you want the full aperture completely open at once.",
      ],
    },
  ],
  ctaLabel: "Request a Quote",
};
