import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
};

export default nextConfig;
