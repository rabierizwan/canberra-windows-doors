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
    "A vertically-sliding sash. One sash, or two for a double-hung. The classical silhouette, kept properly sealed by modern hardware.",
    "Choose CWD80 for the everyday heritage-style frame, or CWD100 thermally broken for a quieter room and a stronger energy rating.",
  ],
  benefits: [
    {
      title: "A classical sightline.",
      body: "The traditional vertical-sashed look — at home in a Canberra cottage, equally at home in a modern reinterpretation.",
    },
    {
      title: "Nothing swings, nothing projects.",
      body: "Sashes slide vertically. Nothing reaches into the room, nothing reaches out onto a walkway or balcony.",
    },
    {
      title: "Air, where you want it.",
      body: "On the double-hung, open the top sash to let warm air out, the bottom sash to draw cool air in.",
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
      heading: "Same window, two frames.",
      body: [
        "CWD80 — our 80mm semi-commercial profile. Tidy lines, dependable hardware, fair price.",
        "CWD100 — the 100mm thermally broken frame. Quieter rooms, less condensation, and a step up on the energy rating.",
      ],
    },
  ],
};
