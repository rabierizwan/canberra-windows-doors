# Canberra Windows & Doors — Content Inventory

Source: https://canberrawindowsdoors.com.au/ (live WordPress site, hosted on Hostinger)
Scraped: 2026-04-21

## Folder Structure
```
content/
├── _inventory.md          ← this file
├── _site-info.md          ← branding, contact, social, integrations
├── pages/                 ← 4 main pages
│   ├── home.md
│   ├── about-us.md
│   ├── contact.md
│   └── request-a-quote.md
├── products/
│   ├── doors/             ← 4 door types
│   │   ├── sliding-door.md
│   │   ├── folding-door.md
│   │   ├── casement-door.md
│   │   └── front-door.md
│   └── windows/           ← 8 window types
│       ├── awning-window-ht76.md
│       ├── hung-window.md
│       ├── casement-window.md
│       ├── sliding-window.md
│       ├── commercial-residential-window.md
│       ├── ht102.md
│       ├── alfresco-window.md
│       └── thermal-break-window.md
├── blog/
│   ├── _blog-strategy.md           ← how to handle the full corpus
│   ├── modern-vs-traditional-doors-canberra-2025.md   (sample)
│   └── 8-powerful-benefits-of-ht102-awning-windows.md  (sample)
└── legal/
    ├── privacy-policy.md
    └── terms-and-conditions.md
```

## Live Site URL Map
| Type | URL |
|---|---|
| Home | / |
| About | /about-us/ |
| Contact | /contact/ |
| Quote | /request-a-quote/ |
| Doors index | /services_group/doors/ |
| Sliding Door | /services/sliding-door/ |
| Folding Door | /services/folding-door/ |
| Casement Door | /services/casement-door/ |
| Front Door | /services/front-door/ |
| Windows index | /services_group/windows/ |
| Awning (HT76) | /services/ht76-awning-window/ |
| Hung | /services/hung-windows/ |
| Casement Window | /services/casement-window/ |
| Sliding Window | /services/sliding-windows-canberra/ |
| Commercial Res. | /services/commercial-residential-window/ |
| HT102 | /services/ht102/ |
| Alfresco | /services/alfresco-window/ |
| Thermal Break | /services/thermal-break-window/ |
| Blog index | /blog/ (7 pages) |
| Privacy | /privacy-policy/ |
| Terms | /terms-and-conditions/ |

NOTE: WordPress URL pattern: products live under `/services/<slug>/`, taxonomies under `/services_group/<slug>/`. Blog posts live at `/<post-slug>/` (no `/blog/` prefix).

## Blog Post URLs (page 1, partial — full list needs WP export)
See `blog/_blog-strategy.md`. Sample of ~40 URLs from page 1:

- /modern-vs-traditional-doors-canberra-whats-trending-in-2025/ (8 Sep 2025)
- /hung-windows-modern-homes-canberra/ (4 Sep 2025)
- /why-sliding-doors-are-popular-in-canberra-homes/ (1 Sep 2025)
- /8-powerful-benefits-of-ht102-awning-windows/ (13 Aug 2025)
- /best-front-door-designs-canberra-2025-trends/ (8 Aug 2025)
- /best-door-handles-supplier-act-hardware-guide/ (6 Aug 2025)
- /front-door-shopfronts-canberra-2025-designs/ (5 Aug 2025)
- /affordable-casement-windows-in-canberra/ (28 Jul 2025)
- /aluminium-windows-in-canberra-act-solutions/ (26 Jul 2025)
- /affordable-hung-windows-suppliers-in-canberra/ (24 Jul 2025)
- /5-powerful-reasons-to-hire-a-doors-supplier/ (18 Jul 2025)
- /top-things-to-know-before-buying-windows-doors/ (17 Jul 2025)
- /6-smart-features-of-ht102-awning-window/ (12 Jul 2025)
- /why-glazed-terraces-suit-canberra-homes/ (11 Jul 2025)
- /5-smart-reasons-to-choose-act-awning-window/ (10 Jul 2025)
- /why-hire-a-trusted-windows-doors-supplier/ (9 Jul 2025)
- /windows-supplier-in-canberra-for-smart-homes/ (4 Jul 2025)
- /find-reliable-doors-supplier-in-canberra/ (3 Jul 2025)
- /windows-and-doors-6-bold-ways-to-improve-space/
- /how-hung-windows-add-value-to-canberra-homes/
- /why-casement-doors-are-a-smart-choice-for-canberra-homes/
- /windows-doors-style-security-with-act/
- /why-whitlam-homeowners-are-upgrading-to-modern-front-doors/
- /how-to-choose-windows-for-better-airflow-and-ventilation/
- /how-glass-options-can-affect-energy-costs/
- /benefits-of-upgrading-your-door-tracks-for-sliding-doors/
- /what-makes-canberra-windows-and-doors-different-from-other-companies/
- /the-environmental-impact-of-double-glazed-windows-and-doors/
- /what-are-casement-doors/
- /top-10-casement-door-designs-to-elevate-your-homes-aesthetic/
- /why-residential-aluminum-windows-are-the-perfect-choice-for-modern-homes/
- /the-difference-between-insulated-and-non-insulated-doors/
- /common-window-problems-and-how-to-fix-them/
- /easy-diy-window-treatments-to-refresh-your-space/
- /why-canberra-homeowners-prefer-double-glazed-windows/
- /the-importance-of-impact-resistant-windows/
- /which-is-better-for-your-home-glass-or-solid-panel-doors/
- /how-to-make-your-home-look-larger-with-full-height-windows/
- /is-double-glazing-or-triple-glazing-better/
- /pros-and-cons-of-aluminium-vs-wooden-doors/

Pages 2-7 not enumerated — use WP export.

## Content Inconsistencies Found (FIX BEFORE LAUNCH)
1. **Stats**: homepage and About page show placeholder `80 / 80+ / 80+ / 80+` for Offices/Clients/Years/Projects — get real numbers.
2. **HT76 Awning Window page** spec table shows model `HT102` instead of `HT76`.
3. **About page** "Customer First, Always" copy is duplicated from "Quality You Can Count On".
4. **Hours mismatch**: About page says Mon-Fri 9 AM–10 PM, Sat 9 AM–6 PM; Contact page says Mon-Fri 8:00–18:00, Sat/Sun by appointment. Pick one.
5. **Phone numbers vary**: 0423 791 652 (primary on most pages), 0403 306 714 (alternate), and homepage shows `0423791652` (no spaces).
6. **Privacy Policy** has unfilled placeholders: empty "Effective Date" and literal "[Insert Contact Email]" text.
7. **Thermal Break Window page** says "we do not provide installation" — contradicts other pages advertising installation.
8. **Contact page** typo: "Let's Conversation with me".
9. **Brand name confusion**: pages mix "Canberra Windows and Doors", "Act Windows and Doors", and "Äct Windows and Doors" (with umlaut). Standardize.
10. **Quote page** is missing — appears to be a near-duplicate of Contact, with no actual quote-specific form fields visible. Verify in WP admin.
