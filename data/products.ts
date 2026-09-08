// ---------------------------------------------------------------------------
// DEMO PRODUCT DATA
// ---------------------------------------------------------------------------
// This file is sample content for a design demo only. Names, materials,
// descriptions, categories and "priceFrom" values are illustrative placeholders
// meant to show layout and structure — they are NOT real inventory, certified
// specifications, or confirmed pricing. Before launch, replace every field
// below with verified product information and real photography from the
// client, then remove this notice.
// ---------------------------------------------------------------------------

export type Product = {
  slug: string;
  index: string;
  name: string;
  material: string;
  category: string;
  description: string;
  detail: string;
  placeholderTone: "ink" | "champagne" | "beige" | "ivory";
  /** AI-generated sample photo (demo only) — falls back to the tonal placeholder when unset. */
  image?: string;
};

export const products: Product[] = [
  {
    slug: "signature-diamond-ring",
    index: "01",
    name: "Signature Diamond Ring",
    material: "18K Gold, Diamond",
    category: "Diamond Collection",
    description: "A refined solitaire silhouette set in warm 18K gold.",
    detail:
      "A refined solitaire silhouette set in warm 18K gold, designed to catch the light with quiet confidence. A versatile piece suited to both everyday elegance and life's defining moments.",
    placeholderTone: "champagne",
  },
  {
    slug: "diamond-tennis-bracelet",
    index: "02",
    name: "Diamond Tennis Bracelet",
    material: "18K Gold, Diamond",
    category: "Diamond Collection",
    description: "A continuous line of diamonds in a slender gold setting.",
    detail:
      "A continuous line of diamonds set along a slender 18K gold band. Understated and endlessly wearable, it brings a quiet sparkle to the wrist for day or evening.",
    placeholderTone: "ink",
  },
  {
    slug: "18k-gold-necklace",
    index: "03",
    name: "18K Gold Necklace",
    material: "18K Gold",
    category: "Gold Collection",
    description: "A fine gold chain with a softly sculpted pendant detail.",
    detail:
      "A fine gold chain finished with a softly sculpted pendant detail. Designed to be layered or worn alone, it carries the warmth of 18K gold in a timeless, everyday form.",
    placeholderTone: "beige",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3IKxAOa84X7Sjcy4i2sT4qTHmID/hf_20260908_162015_1c0fc7db-3d6e-41f7-b928-67f4b117faa1.png",
  },
  {
    slug: "classic-diamond-studs",
    index: "04",
    name: "Classic Diamond Studs",
    material: "18K Gold, Diamond",
    category: "Diamond Collection",
    description: "Round brilliant diamonds set in a classic four-prong mount.",
    detail:
      "Round brilliant diamonds set in a classic four-prong mount. An essential pairing of clarity and craftsmanship, made to be worn every day and passed down for years to come.",
    placeholderTone: "champagne",
  },
  {
    slug: "gold-link-bracelet",
    index: "05",
    name: "Gold Link Bracelet",
    material: "18K Gold",
    category: "Gold Collection",
    description: "Bold sculptural links in polished 18K gold.",
    detail:
      "Bold sculptural links rendered in polished 18K gold. A confident, tactile piece that anchors the wrist and pairs effortlessly with both tailored and relaxed dressing.",
    placeholderTone: "ink",
  },
  {
    slug: "diamond-pendant",
    index: "06",
    name: "Diamond Pendant",
    material: "18K Gold, Diamond",
    category: "Diamond Collection",
    description: "A single diamond suspended on a delicate gold chain.",
    detail:
      "A single diamond suspended on a delicate 18K gold chain. Quietly luminous, it is designed to sit close to the collarbone — a personal, everyday reminder of what matters.",
    placeholderTone: "beige",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
