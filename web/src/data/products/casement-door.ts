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
    "A casement door is side-hinged and swings open like a traditional door, but with a full glass panel set into a slim aluminium frame. Single-leaf for narrower openings, double-leaf (French-style) for wider apertures.",
    "Suited to entries, courtyards and any opening where you want a traditional swing motion paired with the daylight of a fully glazed panel.",
    "Available in the 80 mm Semi-Commercial Series (CWD80) for everyday residential entries, or the 100 mm Thermally Broken Windows (CWD100) when energy performance matters most.",
  ],
  benefits: [
    {
      title: "Light Without Compromise",
      body: "A full glass panel in a slim aluminium frame — natural light reaches deep into the room while the door itself stays visually quiet.",
    },
    {
      title: "Single or Double Leaf",
      body: "One leaf for narrower openings, two for French-door pairs across wider apertures. Hinged left, right or split.",
    },
    {
      title: "Multi-Point Locking",
      body: "Premium SIEGENIA / Roto hardware with multi-point engagement — secure when closed, smooth when opened.",
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
      heading: "Two series to choose from",
      body: [
        "80 mm Semi-Commercial Series (CWD80) — a standard aluminium frame, double-glazed and well-sealed, suited to most residential and semi-commercial entries.",
        "100 mm Thermally Broken Windows (CWD100) — a thermally broken 100mm frame that minimises heat transfer, for projects targeting the highest energy performance.",
      ],
    },
  ],
};
