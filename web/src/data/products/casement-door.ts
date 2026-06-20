import type { Product } from "@/types/product";

/**
 * Casement Door — hinged glazed door (single or double leaf). The Technical
 * Drawings download section uses the supplier's GD (Glazed Door) detail
 * sheets, which depict exactly this product family.
 */
export const casementDoor: Product = {
  slug: "casement-door",
  category: "doors",
  drawingType: "GD",
  heading: "Casement Door",
  subheading: "Hinged glazed door — 80 mm Semi-Commercial or 100 mm Thermally Broken",
  metaTitle: "Casement Doors in Canberra & Sydney | CWD80 & CWD100",
  metaDescription:
    "Side-hinged glazed aluminium doors with full glass panels. Single or double-leaf. Available in the 80 mm Semi-Commercial or 100 mm Thermally Broken Series.",
  intro: [
    "Side-hinged. A full glazed panel in a slim aluminium frame, weighted to swing true and seal properly when closed.",
    "Single-leaf for narrower openings, double-leaf for French-door pairs across wider spans. CWD80 for everyday entries, CWD100 thermally broken where the room needs sealing in.",
  ],
  benefits: [
    {
      title: "Light, without losing the door.",
      body: "A full glass panel in a slim frame. Daylight reaches deep into the room and the door itself stays visually quiet.",
    },
    {
      title: "Single or double leaf.",
      body: "One leaf for the everyday entry, two for the French-door pair. Hinged left, right or split — whatever the space calls for.",
    },
    {
      title: "Locked in properly.",
      body: "Multi-point engagement on premium hardware. Secure when closed, smooth on the hinge when opened.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Hinged (swing)",
    profileThickness: "1.8mm – 2.0mm",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "Multi-point hinged hardware — SIEGENIA (DE) / Roto (DE)",
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
        "CWD80 — our 80mm semi-commercial profile. Tidy lines, dependable hardware, fair price.",
        "CWD100 — the 100mm thermally broken frame. Quieter rooms, less condensation, and a step up on the energy rating.",
      ],
    },
  ],
};
