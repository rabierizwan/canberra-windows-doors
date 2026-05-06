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
      title: "Easy Operation",
      body: "Smooth vertical sliding design for practical daily use.",
    },
    {
      title: "Customisable Designs",
      body: "Various finishes and styles to complement your home decor.",
    },
    {
      title: "Low Maintenance",
      body: "Durable construction requiring minimal upkeep over time.",
    },
    {
      title: "Enhanced Security",
      body: "Advanced locking mechanisms and sturdy materials.",
    },
  ],
  spec: {
    model: "HT83",
    openingStyle: "Sliding (vertical)",
    profileThickness: "1.5mm",
    profileWidth: "83mm",
    glassOptions: "5mm + 9A + 5mm / Double Tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium",
    warranty: "10 Years",
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
        "Materials available in aluminium, timber or uPVC.",
        "Customisation includes double-glazed glass for insulation, acoustic-rated glass for soundproofing, UV-blocking coatings, and flyscreen and lock upgrades.",
      ],
    },
  ],
};
