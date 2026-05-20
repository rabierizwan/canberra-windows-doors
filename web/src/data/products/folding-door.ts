import type { Product } from "@/types/product";

export const foldingDoor: Product = {
  slug: "folding-door",
  category: "doors",
  heading: "Folding Door",
  subheading: "Premium folding door installation services in Canberra",
  metaTitle: "Folding Door | Bi-fold Doors in Canberra & ACT",
  metaDescription:
    "Premium folding (bi-fold) doors that open patios and sunrooms to expansive areas of natural light and airflow. Engineered for smooth operation and durability.",
  intro: [
    "Folding doors are a fantastic addition to any home, adding personality and charm while offering remarkable flexibility in space management.",
    "We supply premium folding doors designed to enhance residential and commercial spaces by opening patios and sunrooms to create expansive areas with natural light and airflow.",
  ],
  benefits: [
    {
      title: "Open the Whole Wall",
      body: "Panels stack neatly to one side, clearing up to 90% of the opening for true indoor–outdoor living.",
    },
    {
      title: "Flexible Daily Use",
      body: "One leaf acts as a single passage door for everyday traffic; unfold the rest for entertaining.",
    },
    {
      title: "Configurable Panels",
      body: "Two-, three-, four-leaf and beyond — sized to your opening, hinged left, right or split.",
    },
  ],
  spec: {
    model: "HT75",
    openingStyle: "Folding",
    profileThickness: "1.8mm",
    profileWidth: "75mm",
    glassOptions: "5mm + 9A + 5mm or 6mm + 9A + 6mm",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium",
    standardHardware: "Doric (AU) / SIEGENIA (DE) / Other",
    warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E", "Ordinary flat glass"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Custom"],
  hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Kinlong (CN)", "Hoppe (DE)", "Roto (DE)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel", "Retractable"],
  applications: ["Hospitality", "Residential", "Healthcare", "School", "Commercial", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  ctaLabel: "Get a Quote",
};
