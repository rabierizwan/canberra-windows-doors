import type { Product } from "@/types/product";

export const slidingDoor: Product = {
  slug: "sliding-door",
  category: "doors",
  drawingType: "SD",
  heading: "Sliding Door",
  subheading: "Glazed panels on rollers — 80 mm Semi-Commercial or 100 mm Thermally Broken",
  metaTitle: "Sliding Doors in Canberra & Sydney | CWD80 & CWD100",
  metaDescription:
    "Aluminium sliding doors with large glazed panels that glide aside on premium roller tracks. Available in the 80 mm Semi-Commercial Series or the 100 mm Thermally Broken Windows.",
  intro: [
    "A sliding door is built from large glazed panels that glide along premium roller tracks — opening the room to the outside without a swing arc and without giving up floor space.",
    "Available in the 80 mm Semi-Commercial Series (CWD80) for everyday residential builds, or the 100 mm Thermally Broken Windows (CWD100) when energy performance matters most.",
  ],
  benefits: [
    {
      title: "Seamless Indoor–Outdoor Flow",
      body: "Wide glazed panels glide aside to merge living spaces with patios and decks — no swing arc, no lost floor space.",
    },
    {
      title: "Maximum Natural Light",
      body: "Slim sightlines and large glass apertures pull daylight deep into the room.",
    },
    {
      title: "Multi-Point Locking",
      body: "Robust SIEGENIA / Doric hardware with anti-lift catches — sliding doors made secure by engineering, not by accident.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Sliding",
    profileThickness: "1.8mm – 2.0mm",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "Door roller hardware — Doric (AU) / SIEGENIA (DE)",
    // warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Monument", "White"],
  // hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Kinlong (CN)", "Hoppe (DE)", "Roto (DE)"],
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
  ],
  ctaLabel: "Request a Quote",
};
