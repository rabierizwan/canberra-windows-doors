# Build Roadmap — CW&D Site

The order we'll build features in. Each phase ends with a deployable state — never leave the site broken.

## ✅ Phase 0 — Scaffold (DONE)
- Next.js 16 + Tailwind v4 + TypeScript
- Brand design system from CW&D logo (cream / black / Playfair / Inter)
- Layout shell (header, sticky nav, footer)
- Product type + 12 product data files
- Dynamic `/services/[slug]` template renders all products
- Home + About + Contact + Quote stubs
- Privacy + Terms stubs
- Email lib (Resend wrapper)
- Vercel Analytics + GA4 component
- Production build passes — 21 static routes

---

## Phase 1 — Polish the bones (next)
Goal: every page feels like a finished marketing site, even without real images.

1. **Mobile nav** — hamburger menu / drawer for `<md` screens (header currently hides nav)
2. **Doors index page** at `/doors` and `/windows` — currently nav links jump to a single product
3. **Hero placeholder image / pattern** — site is text-only right now
4. **Testimonials section** on home (5 cards from scraped content)
5. **FAQ accordion** on home (5 Q&As from scraped content)
6. **Stats band** ("over a decade of experience") — once owner provides real numbers
7. **404 + error pages** with brand styling
8. **Skip-to-content link** + focus styles for accessibility

## Phase 2 — Content + forms (interactive)
9. **Quote form** — react-hook-form + zod schema, file upload, posts to `/api/quote`
10. **Contact form** — simpler version of quote, posts to `/api/contact`
11. **Resend wiring** — actual emails to `info@actwindowsdoors.com` (needs your Resend API key)
12. **Form spam protection** — Cloudflare Turnstile or hCaptcha
13. **Privacy + Terms pages** — load real content from `/content/legal/*.md`
14. **About page** — load real content + brand partner logos when supplied

## Phase 3 — Real assets
15. **Logo SVG** — drop into `/public/brand/`, swap out the typographic Logo component
16. **Hero images** — needs photography from owner
17. **Product photography** — one straight-on + one lifestyle shot per product
18. **Project gallery / "Our Craft in Action"** module
19. **Brand partners row** with logos
20. **Image optimization** with `next/image` everywhere

## Phase 4 — Blog (when scope allows)
21. **WP export** of all ~200 posts (owner runs Tools → Export in WP admin)
22. **Convert WXR → MDX** with `wordpress-export-to-markdown`
23. **Blog index** at `/blog` with pagination + category filters
24. **Blog post template** at `/blog/[slug]` with related posts
25. **RSS feed** at `/rss.xml`
26. **Decision: stick with MDX or move to Sanity CMS** for owner self-edit

## Phase 5 — SEO + launch readiness
27. **Sitemap.xml** — dynamic from product registry + blog
28. **Robots.txt**
29. **Schema.org JSON-LD** — LocalBusiness on every page, Product on product pages, BlogPosting on posts
30. **OpenGraph images** — auto-generated per page via `opengraph-image.tsx`
31. **301 redirect map** in `next.config.ts` — match every old WP URL
32. **Search Console + GA4 setup** — verify domain, submit sitemap
33. **Lighthouse audit** — target 95+ on all four pillars
34. **Accessibility audit** — axe-core + manual keyboard pass

## Phase 6 — Cutover
35. **Staging review** with owner (Vercel preview URL)
36. **DNS swap** at Hostinger or wherever the domain is
37. **Email migration** (info@actwindowsdoors.com — confirm doesn't break)
38. **Post-launch monitoring** — GSC for 404s, Resend dashboard for form submissions, Vercel logs

---

## Things blocked on you (the owner)

| What | Why it blocks |
|---|---|
| Resend account + API key + verified domain | Forms don't send |
| GA4 Measurement ID | Analytics off |
| Vercel account + repo connect | Can't deploy |
| Brand logo SVG | Using typographic placeholder |
| Real product photos | Cards are text-only |
| Hero photography | Hero is text-only |
| Real stat numbers (years, projects) | "80" placeholder removed entirely |
| Owner sign-off on the 10 content bugs in `/content/_inventory.md` | Risk shipping with same bugs as live site |
| WP admin access for the form configurations | Can't replicate quote form fields |
| WordPress XML export | Can't migrate the ~200 blog posts |
| Domain registrar / DNS access | Can't cutover |
