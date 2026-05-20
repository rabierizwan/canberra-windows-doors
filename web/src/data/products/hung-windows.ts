import type { Product } from "@/types/product";

export const hungWindows: Product = {
  slug: "hung-windows",
  category: "windows",
  heading: "Hung Window",
  metaTitle: "Hung Windows in Canberra | Single & Double Hung",
  metaDescription:
    "Classical and enduring hung windows for Canberra homes. Excellent ventilation, easy operation and a sleek aesthetic for traditional or modern builds.",
  intro: [
    "Our hung windows in Canberra offer a classical and enduring option for homeowners. They provide excellent ventilation, easy operation and a sleek aesthetic that works with both traditional and modern homes.",
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
    model: "HT83",
    openingStyle: "Sliding (vertical)",
    profileThickness: "1.5mm",
    profileWidth: "83mm",
    glassOptions: "5mm + 12A + 5mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium",
    standardHardware: "Cam-lock sash hardware — Doric (AU) / SIEGENIA (DE)",
    // warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E", "Ordinary flat glass"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Custom"],
  hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Kinlong (CN)", "Hoppe (DE)", "Roto (DE)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Hospitality", "Residential", "Healthcare", "School", "Commercial", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  sections: [
    {
      heading: "Repairs and Replacements",
      body: [
        "Glass replacement, sash realignment, frame resealing, lock and hardware upgrades.",
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
