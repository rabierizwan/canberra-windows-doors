---
type: meta
purpose: Strategy notes for handling the full blog corpus
---

# Blog Content Strategy

## Scope
The live blog has **7 pages of posts** (~120-200+ articles). Sample posts have been scraped here as references.

## Recommendation: Use WordPress Export, Don't Scrape

Since the site is on WordPress, the **fastest and most accurate way** to get every blog post is:

1. **WP Admin → Tools → Export → "All content"** → downloads a single `.xml` file (WordPress eXtended RSS / WXR format).
   - Includes every post, page, category, tag, author, comment, custom field, and media reference.
   - One-click. Lossless.

2. **Convert WXR to Markdown** for the new project:
   - `wordpress-export-to-markdown` (Node CLI): `npx wordpress-export-to-markdown`
   - or write a small script using `xml2js`.
   - Result: one `.md` file per post with frontmatter (title, date, slug, categories, tags) and a `media/` folder for images.

3. **Pull originals via Hostinger File Manager / FTP / SSH** for `/wp-content/uploads/` to get full-resolution images (the WXR export only stores URLs, not the actual files).

## Sample Posts in This Folder
Two representative posts are included as scrape examples — one on doors, one on windows — so the new site team can see content style, length, and structure:
- `modern-vs-traditional-doors-canberra-2025.md` (~700 words, listicle style)
- `8-powerful-benefits-of-ht102-awning-windows.md` (~700 words, numbered listicle, product-focused)

## Full Blog URL Inventory (page 1 — 40 posts)
See `content/_inventory.md` for the URL list pulled from the blog index page 1. To get pages 2-7, either:
- Use the WP export above (recommended), or
- Visit `/blog/page/2/` through `/blog/page/7/` and capture URLs.

## SEO Continuity Note
When migrating, **preserve every blog post URL slug**. WordPress permalinks use the format `/post-slug/` (no `/blog/` prefix on the live site — verified). Set up 301 redirects for any URL that has to change.
