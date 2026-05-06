import type { Product } from "@/types/product";

export const slidingDoor: Product = {
  slug: "sliding-door",
  category: "doors",
  heading: "Sliding Door",
  metaTitle: "Sliding Door | High Quality Sliding Doors in Canberra",
  metaDescription:
    "Premium aluminium sliding doors in Canberra. Superior insulation, enhanced security, fully customisable in finish and size.",
  intro: [
    "Sliding doors blend elegance and enduring quality using premium materials. They provide natural light and connect indoor-outdoor spaces, with professional installation ensuring optimal performance.",
  ],
  benefits: [
    {
      title: "Superior Insulation",
      body: "Exceptional insulation with high-quality materials minimising energy loss for year-round comfort.",
    },
    {
      title: "Enhanced Security",
      body: "Robust locking mechanisms and security features that prioritise safety while maintaining style.",
    },
    {
      title: "Customisable Options",
      body: "Available in multiple finishes, colours and sizes to match home aesthetics — glass or aluminium options available.",
    },
  ],
  spec: {
    model: "HT75",
    openingStyle: "Sliding",
    profileThickness: "1.8mm",
    profileWidth: "75mm",
    glassOptions: "5mm + 9A + 5mm or 6mm + 9A + 6mm",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium",
    standardHardware: "Doric (AU) / SIEGENIA (DE) / Other",
    warranty: "10 Years",
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
