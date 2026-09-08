// Brand + business information for Darling's FineJewels by Candys.
// This is a design/sales demo — replace with verified client copy before launch.

export const site = {
  brandName: "Darling's FineJewels",
  brandFull: "Darling's FineJewels by Candys",
  tagline: "Fine Gold & Diamond Jewelry",
  location: {
    city: "Manila, Philippines",
    line1: "1466 San Miguel Building",
    line2: "CM Recto Ave",
    line3: "Sta. Cruz, Manila, Philippines",
    full: "1466 San Miguel Building, CM Recto Ave, Sta. Cruz, Manila, Philippines",
  },
  phone: "0917 814 6511",
  phoneHref: "tel:+639178146511",
  social: {
    facebook: {
      label: "Darling's FineJewels By Candys",
      // Exact page URL not provided — links to a Facebook search for the page name.
      href: "https://www.facebook.com/search/pages/?q=Darling%27s%20FineJewels%20By%20Candys",
    },
    instagram: {
      handle: "@darlings_fin3jewels",
      href: "https://instagram.com/darlings_fin3jewels",
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
