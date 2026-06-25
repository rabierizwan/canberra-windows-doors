/**
 * Single source of truth for company-wide info used across the site.
 * Update this file (not 12 components) when contact details change.
 */

export const site = {
  name: "Canberra Windows & Doors",
  shortName: "CW&D",
  tagline: "Every frame considered.",
  url: "https://canberrawindowsdoors.com.au",

  /** Headline used on the home hero */
  hero: {
    eyebrow: "Canberra · Sydney",
    headline: "Every frame considered.",
    sub:
      "High-end aluminium windows and doors for homes across Canberra and Sydney. Considered down to the last seal, and looked after long after they're in.",
  },

  /** Trust strip numbers */
  trustStats: [
    { label: "Years", value: "7" },
    { label: "Projects", value: "100+" },
    { label: "Compliant", value: "AS/NZS" },
  ],

  /** Manifesto section */
  manifesto: {
    eyebrow: "Our Promise",
    headline: "Premium, without the premium.",
    body: [
      "For seven years we've put high-end aluminium into homes across Canberra and Sydney, supplied directly, so what you pay reflects the window and not the chain it usually travels through.",
      "And we don't disappear once it's fitted. The frames we install are still working quietly a decade on, kept that way by the same team that set them.",
    ],
  },

  /** Service area copy used in the "Now Serving" section on the home page */
  serviceArea: {
    eyebrow: "Now serving",
    headline: "Home in Canberra, at work in Sydney.",
    body: [
      "Supply and installation across the ACT, and Australia-wide supply with installation on request throughout Sydney.",
      "After every install we stay close: seals, adjustments and hardware tuned whenever they need it.",
    ],
  },

  /** Closing CTA section on the home page */
  closing: {
    headline: "Let's frame it properly.",
    body:
      "Send through your project and we'll come back within one business day, with options, timing and a fair price.",
  },

  /** Footer tagline */
  footerTagline:
    "Every frame considered. Premium aluminium windows and doors, supplied across Canberra and Sydney.",

  contact: {
    phonePrimary: "0423 791 652",
    phonePrimaryHref: "tel:+61423791652",
    //phoneAlt: "0403 306 714",
    phoneAltHref: "tel:+61403306714",
    email: "info@canberrawindowsdoors.com.au",
    emailHref: "mailto:info@canberrawindowsdoors.com.au",
  },

  address: {
    street: "16 Chaloupka St",
    suburb: "Whitlam",
    state: "ACT",
    postcode: "2611",
    country: "Australia",
    full: "16 Chaloupka St, Whitlam ACT 2611, Australia",
    // OPEN ITEM: live mapsUrl points to 66 Thwaites Crescent, Wright ACT.
    // Confirm whether the real address is Chaloupka/Whitlam or Thwaites/Wright,
    // then update both the address fields above and this mapsUrl together.
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=16+Chaloupka+St,+Whitlam+ACT+2611",
    lat: -35.2750692,
    lng: 149.0442552,
  },

  hours: {
    weekdays: "Monday to Friday, 8:00am to 3:00pm",
    weekend: "Saturday and Sunday by appointment",
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
      { label: "Bi-folding Door", href: "/services/folding-door" },
      { label: "Stacker Door", href: "/services/stacker-door" },
      { label: "Casement Door", href: "/services/casement-door" },
    ],
    windows: [
      { label: "Awning Window", href: "/services/awning-window" },
      { label: "Sliding Window", href: "/services/sliding-windows-canberra" },
      { label: "Casement Window", href: "/services/casement-window" },
      { label: "Hung Window", href: "/services/hung-windows" },
    ],
  },
} as const;
