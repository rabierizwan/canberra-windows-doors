import type { Product } from "@/types/product";

export const casementWindow: Product = {
  slug: "casement-window",
  category: "windows",
  heading: "Casement Window",
  metaTitle: "Casement Windows in Canberra | Best Quality Hinged Windows",
  metaDescription:
    "Side-hinged casement windows for maximum ventilation and unobstructed views. Premium aluminium with advanced locking mechanisms.",
  intro: [
    "Side-hinged and swings wide. When you want the most air through the smallest frame, the casement is the right window.",
    "Choose CWD80 for the elegant semi-commercial frame, or CWD100 thermally broken for a quieter room and a stronger energy rating.",
  ],
  benefits: [
    {
      title: "The most air, the cleanest view.",
      body: "Swings out of the aperture entirely, so the outlook reads as glass — and the breeze comes through unobstructed.",
    },
    {
      title: "The tightest seal we make.",
      body: "Cam-lock hardware pulls the sash hard against continuous EPDM gaskets. The most airtight openable window in our range.",
    },
    {
      title: "Locked in properly.",
      body: "Multi-point engagement on premium hardware. Secure when closed, smooth on the hinge when opened.",
    },
  ],
  sections: [
    {
      heading: "Same window, two frames.",
      body: [
        "CWD80 — our 80mm semi-commercial profile. Tidy lines, dependable hardware, fair price.",
        "CWD100 — the 100mm thermally broken frame. Quieter rooms, less condensation, and a step up on the energy rating.",
      ],
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
