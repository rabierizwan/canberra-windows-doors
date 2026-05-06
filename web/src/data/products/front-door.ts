import type { Product } from "@/types/product";

export const frontDoor: Product = {
  slug: "front-door",
  category: "doors",
  heading: "Front Door",
  metaTitle: "Front Door | Premium Entry Doors in Canberra",
  metaDescription:
    "Elegant, secure and energy-efficient front doors in Canberra. Glass, French and pivot styles available — your home's first impression, done right.",
  intro: [
    "Your front door is more than just an entryway — it's the first impression of your home. We offer a range of elegant, secure and functional door options designed to elevate both style and practicality.",
    "From traditional wooden designs to modern composite options, we have the perfect front door for your needs.",
  ],
  benefits: [
    {
      title: "Aesthetic Appeal",
      body: "Available in various styles, colours and finishes to complement your home's architecture and reflect your personal style.",
    },
    {
      title: "Superior Security",
      body: "Built with high-quality materials and advanced locking mechanisms — your home stays secure while giving you peace of mind.",
    },
    {
      title: "Energy Efficiency",
      body: "Designed with insulation in mind — maintain a comfortable indoor temperature and reduce energy costs.",
    },
  ],
  sections: [
    {
      heading: "Glass Doors",
      body: [
        "Create a seamless blend between indoor and outdoor spaces with sleek glass doors. Perfect for modern homes — they let natural light flood in, making spaces feel open and inviting.",
      ],
    },
    {
      heading: "Glass French Doors",
      body: [
        "For sophistication and classic elegance. Multiple glass panels offer a timeless look while providing natural light, with frosted or clear glass options for privacy.",
      ],
    },
    {
      heading: "Pivot Doors",
      body: [
        "Make a bold statement. Designed for larger entranceways, pivot doors offer a dramatic, modern look with effortless functionality.",
      ],
    },
  ],
  applications: ["Residential", "Commercial", "Hospitality"],
  ctaLabel: "Request a Quote",
};
