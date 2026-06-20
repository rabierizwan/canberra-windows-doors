import type { Product } from "@/types/product";

export const thermalBreakWindow: Product = {
  slug: "thermal-break-window",
  category: "windows",
  // Not a sibling product — this is the explainer for the 100 thermal-broken
  // series, which every product can be ordered in. Reachable by link, kept
  // out of product grids + nav.
  excludeFromIndex: true,
  heading: "Thermal Break Window",
  subheading: "Built for Australia's 7-star future",
  metaTitle: "Thermal Break Windows in Canberra & Sydney | NCC 7-Star Compliant",
  metaDescription:
    "Thermally broken aluminium windows engineered for Canberra winters and Sydney summers. Better energy efficiency, less condensation, lower bills — built to meet NCC 2022 7-star requirements.",
  intro: [
    "Aluminium conducts heat. Left alone, a metal frame becomes a thermal bridge: warmth leaves the room in winter, comes back in summer. A thermal break splits the frame internally with a reinforced polyamide bar, so the inside face stays close to room temperature.",
    "We supply premium thermal-broken frames in our CWD100 series — double-glazed as standard, tuned for Canberra winters and Sydney summers.",
  ],
  benefits: [
    {
      title: "A more efficient room.",
      body: "Less heat lost through the frame in winter, less gained in summer. Lower heating and cooling load, lower running costs.",
    },
    {
      title: "No more cold-spots.",
      body: "The inside face of the frame stays close to room temperature, so the air near the window feels the same as the rest of the room.",
    },
    {
      title: "Less condensation.",
      body: "A warm inside frame doesn't pull moisture out of the air. Less fog on the glass, dry sills, longer-lived joinery.",
    },
  ],
  spec: {
    model: "CWD100",
    openingStyle: "Awning · Sliding · Fixed (configurable)",
    profileThickness: "2.0mm",
    profileWidth: "100mm",
    glassOptions: "Double-glazed 5+12A+5 standard · Triple glazing on request",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium with reinforced polyamide thermal break",
    standardHardware: "SIEGENIA (DE) / Roto (DE)",
    // warranty: "10 Years",
  },
  glassTypes: ["Double-glazed", "Triple-glazed", "LOW-E", "Acoustic", "Solar control"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Monument", "White"],
  // hardwareBrands: ["SIEGENIA (DE)", "Roto (DE)", "Hoppe (DE)", "Doric (AU)"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Residential", "Commercial", "Hospitality", "Healthcare", "School", "Municipal"],
  performance: [
    "Thermal-broken",
    "Heat / Cold resistance",
    "Soundproof",
    "Wind resistance",
    "Airtight",
    "Safe",
  ],
  sections: [
    {
      heading: "When a thermal break earns its keep.",
      body: [
        "Canberra winters: every degree of warmth lost through a cold frame in July is a heating bill paid in August.",
        "Sydney summers: heat gain through bare aluminium pushes the air-conditioning hard. A thermal break flattens the peak.",
        "New builds: a straightforward way to push the NatHERS rating up without compromising on glass area.",
        "Renovations: one of the highest-return upgrades you can make to an older home for thermal comfort.",
      ],
    },
  ],
  ctaLabel: "Request a Quote",
};
