import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 only generates the qualities you allowlist here.
    // Default is [75]. We pass quality={95} on the brand monogram for
    // crispness at small sizes — include 95 so the optimiser will serve it.
    qualities: [75, 95],

    // Allowlist for external image hosts used by next/image.
    // Add a new entry here whenever you start hosting images on a new domain.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // Lock down further to your specific Cloudinary cloud name.
        // Replace "drlrwvdta" with the new cloud if you ever migrate accounts.
        pathname: "/drlrwvdta/**",
      },
    ],
  },

  // 301-style permanent redirects (308) preserving SEO from the product
  // restructure — old product URLs → their merged / renamed destinations.
  async redirects() {
    return [
      // Awning cluster merged → /services/awning-window
      { source: "/services/ht102", destination: "/services/awning-window", permanent: true },
      { source: "/services/ht76-awning-window", destination: "/services/awning-window", permanent: true },
      { source: "/services/80-series-awning-window", destination: "/services/awning-window", permanent: true },
      // Glazed Door replaced by Stacker Door (Casement Door re-introduced separately)
      { source: "/services/glazed-door", destination: "/services/stacker-door", permanent: true },
      // Commercial Residential removed → windows index
      { source: "/services/commercial-residential-window", destination: "/windows", permanent: true },
      // Front Door removed earlier → doors index
      { source: "/services/front-door", destination: "/doors", permanent: true },
    ];
  },
};

export default nextConfig;
