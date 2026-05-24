import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Robots policy — allow all crawlers across the public site, block the
 * /api/ route prefix (form-submission endpoints have no SEO value), and
 * point at the dynamic sitemap.
 *
 * Served by Next.js at `/robots.txt`.
 */
export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
