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
      "And when we install, we maintain — the windows and doors we fit are still performing in five, ten, fifteen years, looked after by the same team that put them in.",
    ],
  },

  /** Service area copy used in section 11 */
  serviceArea: {
    eyebrow: "Now Serving",
    headline: "Canberra · Sydney",
    body: [
      "Canberra-based supply and installation across the ACT. Australia-wide supply, with installation available across all Sydney suburbs on request.",
      "After every installation, our team stays available for ongoing aftercare — adjustments, weather-seal replacements and hardware tune-ups whenever you need them. We service the windows and doors we've fitted ourselves.",
    ],
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
      { label: "Doors", href: "/doors", group: "doors" },
      { label: "Windows", href: "/windows", group: "windows" },
      { label: "About", href: "/about-us" },
      { label: "Contact", href: "/contact" },
    ],
    doors: [
      { label: "Sliding Door", href: "/services/sliding-door" },
      { label: "Folding Door", href: "/services/folding-door" },
      { label: "Glazed Door", href: "/services/glazed-door" },
    ],
    windows: [
      { label: "Awning Window", href: "/services/awning-window" },
      { label: "Sliding Window", href: "/services/sliding-windows-canberra" },
      { label: "Casement Window", href: "/services/casement-window" },
      { label: "Hung Window", href: "/services/hung-windows" },
    ],
  },
} as const;
