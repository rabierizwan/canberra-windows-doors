/**
 * Single source of truth for company-wide info used across the site.
 * Update this file (not 12 components) when contact details change.
 */

export const site = {
  name: "Canberra Windows & Doors",
  shortName: "CW&D",
  tagline: "Quietly considered. Sensibly priced.",
  url: "https://canberrawindowsdoors.com.au",

  /** Headline used on the home hero */
  hero: {
    eyebrow: "Canberra · Sydney · Established ACT",
    headline: "Quietly considered. Sensibly priced.",
    sub:
      "Premium European-grade aluminium windows and doors, supplied directly to homes across Canberra and Sydney — without the distributor markup.",
  },

  /** Trust strip numbers */
  trustStats: [
    { label: "Years", value: "7" },
    { label: "Projects", value: "80+" },
    { label: "Warranty", value: "10 Years" },
    { label: "Compliant", value: "AS/NZS" },
  ],

  /** Manifesto section */
  manifesto: {
    eyebrow: "Our Promise",
    headline: "Premium quality, honest pricing.",
    body: [
      "For over seven years, we've supplied premium European-grade aluminium windows and doors directly to homes across Canberra and Sydney.",
      "No distributor markup. No inflated trade-channel pricing. Just considered design, fair value, and a 10-year warranty as standard.",
    ],
  },

  /** Service area copy used in section 11 */
  serviceArea: {
    eyebrow: "Now Serving",
    headline: "Canberra · Sydney",
    body:
      "Canberra-based supply and installation across the ACT. Australia-wide supply with installation available across all Sydney suburbs on request.",
  },

  contact: {
    phonePrimary: "0423 791 652",
    phonePrimaryHref: "tel:+61423791652",
    phoneAlt: "0403 306 714",
    phoneAltHref: "tel:+61403306714",
    email: "info@actwindowsdoors.com",
    emailHref: "mailto:info@actwindowsdoors.com",
  },

  address: {
    street: "66 Thwaites Crescent",
    suburb: "Wright",
    state: "ACT",
    postcode: "2611",
    country: "Australia",
    full: "66 Thwaites Crescent, Wright ACT 2611, Australia",
    // TODO: replace mapsUrl + lat/lng with the real Google Maps Place URL for 66 Thwaites Cres
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=66+Thwaites+Crescent,+Wright+ACT+2611",
    lat: -35.2750692,
    lng: 149.0442552,
  },

  hours: {
    weekdays: "Mon – Fri 8:00 – 18:00",
    weekend: "Sat / Sun by appointment",
  },

  // TODO: replace with real social URLs when supplied by the owner
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },

  nav: {
    primary: [
      { label: "Doors", href: "/services/sliding-door", group: "doors" },
      { label: "Windows", href: "/services/ht102", group: "windows" },
      { label: "About", href: "/about-us" },
      { label: "Contact", href: "/contact" },
    ],
    doors: [
      { label: "Sliding Door", href: "/services/sliding-door" },
      { label: "Folding Door", href: "/services/folding-door" },
      { label: "Casement Door", href: "/services/casement-door" },
      { label: "Front Door", href: "/services/front-door" },
    ],
    windows: [
      { label: "HT102", href: "/services/ht102" },
      { label: "Awning Window", href: "/services/ht76-awning-window" },
      { label: "Hung Window", href: "/services/hung-windows" },
      { label: "Casement Window", href: "/services/casement-window" },
      { label: "Sliding Window", href: "/services/sliding-windows-canberra" },
      { label: "Commercial Residential", href: "/services/commercial-residential-window" },
      { label: "Alfresco Window", href: "/services/alfresco-window" },
      { label: "Thermal Break Window", href: "/services/thermal-break-window" },
    ],
  },
} as const;
