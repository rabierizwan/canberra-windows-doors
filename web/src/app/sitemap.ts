import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllSlugs } from "@/data/products";

/**
 * Dynamic sitemap — enumerates every static page + every product/service
 * route from the registry. Add a new product to `data/products/index.ts`
 * and it appears here automatically.
 *
 * Served by Next.js at `/sitemap.xml`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  // ── Static marketing pages ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,                     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/doors`,                lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/windows`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about-us`,             lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/contact`,              lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/request-a-quote`,      lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/privacy-policy`,       lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${base}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  // ── Product / service pages ─────────────────────────────────────────
  const productPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
