// ---------------------------------------------------------------------------
// DEMO BRAND + BUSINESS INFORMATION
// ---------------------------------------------------------------------------
// "Aurelle Fine Jewels" is a fictional house invented for this design demo.
// It is not a real business, and the contact details below are placeholders —
// the phone number, address and social links do not belong to anyone.
//
// This file is the single source of truth for the brand: renaming the demo for
// a different client means editing this file only, not hunting through JSX.
// Replace every field with verified client information before launch.
// ---------------------------------------------------------------------------

export const site = {
  brandName: "Aurelle Fine Jewels",
  /** Short form, used in possessive/standalone contexts: "The House of ___". */
  shortName: "Aurelle",
  /** The logo lockup renders as `lead` in serif + `accent` in italic gold. */
  brandMark: {
    lead: "Aurelle",
    accent: "Fine Jewels",
  },
  tagline: "Fine Gold & Diamond Jewelry",
  location: {
    city: "Manila, Philippines",
    /** Bare city name, for eyebrow labels like "Aurelle Fine Jewels · Manila". */
    cityShort: "Manila",
    line1: "Aurelle House",
    line2: "24 Camia Street",
    line3: "Makati, Metro Manila, Philippines",
    full: "Aurelle House, 24 Camia Street, Makati, Metro Manila, Philippines",
  },
  // Placeholder contact details — not a working number.
  phone: "0917 000 0000",
  phoneHref: "tel:+639170000000",
  social: {
    // Placeholder links: these point at the platforms themselves rather than at
    // an account, so the demo never sends anyone to a stranger's real profile.
    facebook: {
      label: "Aurelle Fine Jewels",
      href: "https://www.facebook.com/",
    },
    instagram: {
      handle: "@aurellefinejewels",
      href: "https://www.instagram.com/",
    },
  },
} as const;

export const primaryNav = [
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "The House", href: "/the-house" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Collections", href: "/collections" },
  { label: "The House", href: "/the-house" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const pillars = [
  {
    index: "01",
    title: "Authentic Craftsmanship",
    copy: "Each piece is selected for the quality of its materials and the precision of its construction.",
  },
  {
    index: "02",
    title: "Curated Fine Jewelry",
    copy: "A considered edit of gold and diamond pieces, imported and local, chosen for lasting appeal.",
  },
  {
    index: "03",
    title: "Timeless Design",
    copy: "Silhouettes designed to move gracefully from one generation to the next.",
  },
  {
    index: "04",
    title: "Personal Service",
    copy: "A dedicated team on hand to help you find a piece that feels uniquely yours.",
  },
] as const;
