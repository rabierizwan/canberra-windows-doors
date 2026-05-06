# Canberra Windows & Doors — Re-implementation Workspace

This repo will hold the rebuild of https://canberrawindowsdoors.com.au/ (currently WordPress on Hostinger).

## Current Status
**Phase 1 complete:** content inventory scraped from the live site.

## Content Inventory
All scraped content lives under [`content/`](./content/). Start with:

- [`content/_inventory.md`](./content/_inventory.md) — folder map, URL list, content bugs found
- [`content/_site-info.md`](./content/_site-info.md) — brand, contact, integrations, reusable components
- [`content/blog/_blog-strategy.md`](./content/blog/_blog-strategy.md) — how to handle the full ~200-post blog corpus

### Pages (4)
[home](./content/pages/home.md) · [about-us](./content/pages/about-us.md) · [contact](./content/pages/contact.md) · [request-a-quote](./content/pages/request-a-quote.md)

### Doors (4)
[sliding](./content/products/doors/sliding-door.md) · [folding](./content/products/doors/folding-door.md) · [casement](./content/products/doors/casement-door.md) · [front](./content/products/doors/front-door.md)

### Windows (8)
[awning HT76](./content/products/windows/awning-window-ht76.md) · [hung](./content/products/windows/hung-window.md) · [casement](./content/products/windows/casement-window.md) · [sliding](./content/products/windows/sliding-window.md) · [commercial-residential](./content/products/windows/commercial-residential-window.md) · [HT102](./content/products/windows/ht102.md) · [alfresco](./content/products/windows/alfresco-window.md) · [thermal-break](./content/products/windows/thermal-break-window.md)

### Blog samples (2 of ~200)
[modern vs traditional](./content/blog/modern-vs-traditional-doors-canberra-2025.md) · [HT102 benefits](./content/blog/8-powerful-benefits-of-ht102-awning-windows.md)

### Legal
[privacy-policy](./content/legal/privacy-policy.md) · [terms-and-conditions](./content/legal/terms-and-conditions.md)

## What's NOT Captured Yet (need from owner / WP admin)
- Original images (full-resolution): logo, hero, product photos, blog featured images
- Brand assets: color palette, typography, logo SVG
- Full ~200 blog posts → use **WordPress export** (Tools → Export → "All content")
- Form field configurations for Contact + Quote forms (likely Contact Form 7 / WPForms in WP admin)
- Google Analytics / Search Console access
- Hostinger / WP admin / domain registrar credentials
- Pricing data (if any beyond "request a quote")
- Real values for stats (currently all show "80")
- Social media account URLs

## Recommended Tech Stack (from prior conversation)
- **Next.js 15 + TypeScript** (SSR/SSG for SEO)
- **Tailwind CSS** for styling
- **Headless CMS** for ongoing edits (Sanity, Payload CMS, or Contentful)
- **Resend** or **SendGrid** for contact form emails
- **UploadThing** or **S3/R2** for file uploads
- **Vercel** or **Netlify** for hosting (better for Next.js than Hostinger; can stay on Hostinger VPS if required)

## Next Steps
1. Get owner sign-off on the content bugs in `_inventory.md`
2. Collect missing assets/credentials listed above
3. Run WordPress export for full blog corpus
4. Decide on CMS choice
5. Scaffold Next.js project + design system
