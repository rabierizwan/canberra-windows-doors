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
    "Two glazed panels on a smooth track. One slides past the other and opens the wall without using floor space, without swing arcs, and without losing the line of the architecture.",
    "Choose CWD80 for the elegant semi-commercial frame, or step up to CWD100 thermally broken when the room asks for higher performance.",
  ],
  benefits: [
    {
      title: "Indoor and outdoor, joined.",
      body: "Generous glass and slim sightlines. Closed, the room is sealed and quiet. Open, the deck or garden is part of the living room.",
    },
    {
      title: "Quiet on the track.",
      body: "Premium rollers and a clean head/sill profile. No drag, no rattle — the door moves the way it should, year on year.",
    },
    {
      title: "Locked in properly.",
      body: "Multi-point locking and anti-lift catches as standard. Hardware that holds up to daily use without working loose.",
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
      heading: "Same door, two frames.",
      body: [
        "CWD80 — our 80mm semi-commercial profile. Tidy lines, dependable hardware, fair price. The right choice for most homes.",
        "CWD100 — the 100mm frame split internally by a reinforced polyamide thermal break. Quieter rooms, less condensation, and the help you need to push the energy rating up.",
      ],
    },
  ],
  ctaLabel: "Request a Quote",
};
