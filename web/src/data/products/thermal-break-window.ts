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
    // Definition first — establish authority before benefit selling.
    "Aluminium conducts heat. Without intervention, a metal window frame becomes a thermal bridge that pulls warmth out in winter and lets it in during summer. A thermal break solves this — a strip of reinforced polyamide is engineered into the frame, separating its inside and outside faces. The result is a window that performs more like timber but lasts like aluminium.",
    "We supply premium thermal-break frames manufactured in Europe, paired with double or triple glazing as standard, and tuned for Australian climates — Canberra's frosty mornings, Sydney's summer afternoons, and everything in between.",
  ],
  benefits: [
    {
      title: "Greater Energy Efficiency",
      body: "The polyamide barrier dramatically reduces heat transfer through the frame, keeping warm air in during winter and out during summer. Lower heating and cooling load, lower running costs.",
    },
    {
      title: "Year-Round Comfort",
      body: "No more cold-spot zones near windows in July, no more sun-baked frames in January. Surface temperatures stay closer to room temperature across the entire opening.",
    },
    {
      title: "Less Condensation",
      body: "Cold aluminium plus warm interior air equals fog and dripping sills. A thermal break keeps the inside face of the frame warmer, so moisture has nowhere to form. Better for the home, better for the frame.",
    },
    {
      title: "Long-Term Durability",
      body: "Premium-grade aluminium resists warping, corrosion and weathering far longer than timber or uPVC. The polyamide insert is stable across decades of temperature swings.",
    },
  ],
  spec: {
    model: "HT-TB",
    openingStyle: "Awning · Sliding · Fixed (configurable)",
    profileThickness: "2.0mm",
    profileWidth: "76mm – 102mm",
    glassOptions: "Double-glazed 5+12A+5 standard · Triple glazing on request",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium with reinforced polyamide thermal break",
    standardHardware: "SIEGENIA (DE) / Roto (DE)",
    warranty: "10 Years",
  },
  glassTypes: ["Double-glazed", "Triple-glazed", "LOW-E", "Acoustic", "Solar control"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Custom"],
  hardwareBrands: ["SIEGENIA (DE)", "Roto (DE)", "Hoppe (DE)", "Doric (AU)"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Residential", "Hospitality", "Healthcare", "School", "Commercial", "Municipal"],
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
      heading: "Built for Australia's 7-star future",
      body: [
        "In 2022, the National Construction Code lifted the residential energy performance requirement from 6 to 7 stars under NatHERS — a meaningful jump, particularly in cooler regions like the ACT and Sydney's western suburbs.",
        "Standard single-glazed aluminium frames make 7 stars genuinely difficult to hit. Thermal-broken frames with double or triple glazing make it routine. If you're building, renovating or specifying for compliance, this is the frame system designed for the regulation, not retrofitted to it.",
      ],
    },
    {
      heading: "When thermal break matters most",
      body: [
        "Canberra: every degree of indoor warmth lost through cheap frames in July is a heating bill paid in August. Thermal-broken frames pay back fastest in cold-winter climates.",
        "Sydney: summer heat gain through aluminium frames pushes air-conditioning loads up dramatically. A thermal break flattens the curve and reduces peak cooling demand.",
        "New builds: meet 7-star NatHERS without compromising on natural light or window size.",
        "Renovations: replacing single-glazed aluminium with thermal-broken frames is one of the highest-ROI upgrades for thermal comfort.",
      ],
    },
    {
      heading: "Premium European supply, fair Australian pricing",
      body: [
        "We import directly from established European manufacturers and supply across Canberra and Sydney without the distributor markup that inflates trade-channel pricing. Same product, considered design, sensible price.",
      ],
    },
  ],
  ctaLabel: "Request a Quote",
};
