/**
 * Single source of truth for company-wide info used across the site.
 * Update this file (not 12 components) when contact details change.
 */

export const site = {
  name: "Canberra Windows & Doors",
  shortName: "CW&D",
  tagline: "Windows and Doors that Define Canberra's Elegance",
  url: "https://canberrawindowsdoors.com.au",

  contact: {
    phonePrimary: "0423 791 652",
    phonePrimaryHref: "tel:+61423791652",
    phoneAlt: "0403 306 714",
    phoneAltHref: "tel:+61403306714",
    email: "info@actwindowsdoors.com",
    emailHref: "mailto:info@actwindowsdoors.com",
  },

  address: {
    street: "16 Chaloupka Street",
    suburb: "Whitlam",
    state: "ACT",
    postcode: "2611",
    country: "Australia",
    full: "16 Chaloupka Street, Whitlam ACT 2611, Australia",
    mapsUrl:
      "https://www.google.com/maps/place/16+Chaloupka+St,+Whitlam+ACT+2611,+Australia/",
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
