import type { Product } from "@/types/product";

/**
 * Glazed Door — formerly "Casement Door". Renamed to match the supplier's
 * technical drawings (the "GD / Glazed Door" detail sheets).
 */
export const glazedDoor: Product = {
  slug: "glazed-door",
  category: "doors",
  drawingType: "GD",
  heading: "Glazed Door",
  subheading: "Hinged, fully glazed — 80 standard or 100 thermal-broken",
  metaTitle: "Glazed Doors in Canberra & Sydney | Hinged Aluminium Doors",
  metaDescription:
    "Side-hinged glazed aluminium doors that open outwards for maximum ventilation and unobstructed views. Available in the 80 standard or 100 thermal-broken series.",
  intro: [
    "A glazed door is hinged on one side and swings open, pairing a full glass panel with a slim aluminium frame. It brings natural light deep into a space while keeping a sleek, modern sightline.",
    "We supply glazed doors in two frame systems — the 80 Series standard aluminium frame and the 100 thermal-broken series — across residential and commercial properties in Canberra and Sydney.",
  ],
  spec: {
    model: "80 Series · 100 Series",
    openingStyle: "Hinged (swing)",
    profileThickness: "1.8mm – 2.0mm",
    profileWidth: "80mm (80 Series) · 102mm (100 Series)",
    glassOptions: "Double-glazed 5mm + 12A + 5mm / 6mm + 12A + 6mm",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium (100 Series: thermally broken)",
    standardHardware: "SIEGENIA (DE) / Other",
    warranty: "10 Years",
  },
  glassTypes: ["Double Tempered", "Toughened", "Coated", "LOW-E"],
  glassColors: ["Clear", "Grey", "Blue", "Green", "Custom"],
  profileColors: ["Matt Black", "Custom"],
  hardwareBrands: ["Doric (AU)", "SIEGENIA (DE)", "Hoppe (DE)", "Roto (DE)", "Kinlong (CN)", "LSMA"],
  flyscreens: ["Aluminium", "Fiberglass", "Stainless Steel"],
  applications: ["Hospitality", "Residential", "Healthcare", "School", "Commercial", "Municipal"],
  performance: ["Waterproof", "Heat / Cold resistance", "Soundproof", "Wind resistance", "Airtight", "Safe"],
  sections: [
    {
      heading: "Two series to choose from",
      body: [
        "80 Series — a standard aluminium frame, double-glazed and well-sealed, suited to most residential entries.",
        "100 Thermal Broken Series — a thermally broken 102mm frame that minimises heat transfer, for projects targeting the highest energy performance.",
      ],
    },
  ],
};
