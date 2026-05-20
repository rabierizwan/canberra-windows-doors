import type { Product } from "@/types/product";

export const slidingDoor: Product = {
  slug: "sliding-door",
  category: "doors",
  drawingType: "SD",
  heading: "Sliding Door",
  metaTitle: "Sliding Door | High Quality Sliding Doors in Canberra",
  metaDescription:
    "Premium aluminium sliding doors in Canberra. Superior insulation, enhanced security, fully customisable in finish and size.",
  intro: [
    "Sliding doors blend elegance and enduring quality using premium materials. They provide natural light and connect indoor-outdoor spaces, with professional installation ensuring optimal performance.",
  ],
  benefits: [
    {
      title: "Seamless Indoor–Outdoor Flow",
      body: "Wide glazed panels glide aside to merge living spaces with patios and decks — no swing arc, no lost floor space.",
    },
    {
      title: "Maximum Natural Light",
      body: "Slim 75mm sightlines and large glass apertures pull daylight deep into the room.",
    },
    {
      title: "Multi-Point Locking",
      body: "Robust SIEGENIA / Doric hardware with anti-lift catches — sliding doors made secure by engineering, not by accident.",
    },
  ],
  spec: {
    model: "HT75",
    openingStyle: "Sliding",
    profileThickness: "1.8mm",
    profileWidth: "75mm",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm tempered",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium",
    standardHardware: "Door roller hardware — Doric (AU) / SIEGENIA (DE)",
    // warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Custom"],
  hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Kinlong (CN)", "Hoppe (DE)", "Roto (DE)"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Hospitality", "Residential", "Healthcare", "School", "Commercial", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  ctaLabel: "Request a Quote",
};
