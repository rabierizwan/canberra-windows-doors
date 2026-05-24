import type { Product } from "@/types/product";

export const hungWindows: Product = {
  slug: "hung-windows",
  category: "windows",
  heading: "Hung Window",
  subheading: "Vertical-sliding sash — 80 mm Semi-Commercial or 100 mm Thermally Broken",
  metaTitle: "Hung Windows in Canberra & Sydney | CWD80 & CWD100",
  metaDescription:
    "Vertical-sliding sash windows with a classical sightline. Available in the 80 mm Semi-Commercial Series or the 100 mm Thermally Broken Windows.",
  intro: [
    "A hung window slides vertically — one sash, or two for a double-hung. The form is classical but the engineering is modern: balanced sashes, cam-lock hardware and continuous EPDM seals.",
    "Available in the 80 mm Semi-Commercial Series (CWD80) for everyday residential and heritage-style installs, or the 100 mm Thermally Broken Windows (CWD100) when energy performance matters most.",
  ],
  benefits: [
    {
      title: "Classical Sightline",
      body: "Vertical sashes give a timeless, heritage-appropriate look that suits traditional Canberra homes and modern reinterpretations alike.",
    },
    {
      title: "No Projection, No Swing",
      body: "Sashes slide vertically — nothing swings into the room, nothing reaches out into pathways or balconies.",
    },
    {
      title: "Adjustable Airflow",
      body: "On double-hung units, opening both top and bottom sashes pulls warm air out high and draws fresh air in low.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Sliding (vertical)",
    profileThickness: "1.8mm – 2.0mm",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    glassOptions: "5mm + 12A + 5mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "Cam-lock sash hardware — Doric (AU) / SIEGENIA (DE)",
    // warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Monument", "White"],
  // hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Kinlong (CN)", "Hoppe (DE)", "Roto (DE)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Residential", "Commercial", "Hospitality", "Healthcare", "School", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  sections: [
    {
      heading: "Two series to choose from",
      body: [
        "80 mm Semi-Commercial Series (CWD80) — a standard aluminium frame on an 80mm profile. Cost-effective for most residential and heritage-style installs.",
        "100 mm Thermally Broken Windows (CWD100) — a 100mm frame with a reinforced polyamide thermal break. Higher energy performance, helps meet NCC 7-star requirements.",
      ],
    },
    {
      heading: "Custom Installation Options",
      body: [
        "Customisation includes double-glazed glass for insulation, acoustic-rated glass for soundproofing, UV-blocking coatings, and flyscreen and lock upgrades.",
      ],
    },
  ],
};
