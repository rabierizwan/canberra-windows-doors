import type { Product } from "@/types/product";

export const casementWindow: Product = {
  slug: "casement-window",
  category: "windows",
  heading: "Casement Window",
  metaTitle: "Casement Windows in Canberra | Best Quality Hinged Windows",
  metaDescription:
    "Side-hinged casement windows for maximum ventilation and unobstructed views. Premium aluminium with advanced locking mechanisms.",
  intro: [
    "We specialise in offering top-quality casement window services in Canberra. These side-hinged units open outward, allowing for maximum ventilation and stunning views — ideal for both upgrade and new installation projects.",
  ],
  benefits: [
    {
      title: "Excellent Ventilation",
      body: "Adjust the opening angle to regulate air intake — keeps your home fresh and comfortable.",
    },
    {
      title: "Unobstructed Views",
      body: "When opened, casement windows create a clear line of sight to the outdoors.",
    },
    {
      title: "Tightest Seal of Any Openable",
      body: "Cam-lock hardware pulls the sash hard against continuous EPDM gaskets — casements are the most airtight openable window format.",
    },
    {
      title: "Security Features",
      body: "Equipped with advanced locking mechanisms for enhanced security and peace of mind.",
    },
  ],
  spec: {
    model: "CWD80 · CWD100",
    openingStyle: "Swing",
    profileThickness: "2.0mm",
    profileWidth: "80mm (CWD80) · 100mm (CWD100)",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (CWD100: thermally broken)",
    standardHardware: "SIEGENIA (DE) / Other",
    // warranty: "10 Years",
  },
  glassTypes: ["Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Monument", "White"],
  // hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Hoppe (DE)", "Roto (DE)", "Kinlong (CN)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Residential", "Commercial", "Hospitality", "Healthcare", "School", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
};
