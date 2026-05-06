import type { Product } from "@/types/product";

export const casementDoor: Product = {
  slug: "casement-door",
  category: "doors",
  heading: "Casement Door",
  subheading: "Customisable options to suit your needs",
  metaTitle: "Casement Door | Quality Hinged Doors in Canberra",
  metaDescription:
    "Side-hinged casement doors that open outwards for maximum ventilation and unobstructed views. Premium aluminium with 10-year warranty.",
  intro: [
    "Casement doors are hinged on one side and open outwards, allowing for maximum ventilation and unobstructed views. They are an excellent option for homeowners looking to bring natural light into their spaces while maintaining a sleek and modern appearance.",
    "We offer casement doors in various styles, finishes and sizes — blending style, durability and performance to suit traditional or contemporary design preferences across residential and commercial properties.",
  ],
  spec: {
    model: "HT102",
    openingStyle: "Swing",
    profileThickness: "2.0mm",
    profileWidth: "102mm",
    glassOptions: "5mm + 12A + 5mm / 6mm + 12A + 6mm / Custom",
    glassStandard: "AS/NZS 2208",
    extrusionProfile: "6063-T5 Aluminium",
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
};
