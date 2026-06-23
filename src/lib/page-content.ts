import { DEFAULT_PRICING, FAQ_ITEMS, type PricingTier } from "./site-data";

export type PageContent = {
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  intro: string;
  benefits: string[];
  pricing?: PricingTier[];
  faq?: { q: string; a: string }[];
  relatedSlugs?: string[];
};

const serviceDefaults = (
  service: string,
  surface: string,
  slug: string,
): PageContent => ({
  title: `${service} Central Florida | ${surface} | City Power Washing`,
  metaDescription: `Professional ${service.toLowerCase()} in Deltona, DeBary, DeLand, Orange City, Lake Mary & Sanford. Licensed, insured, 5-star rated. Free quotes. Call today!`,
  h1: `${service} in Central Florida`,
  heroSubtitle: `Safe, professional ${service.toLowerCase()} for ${surface} across Volusia & Seminole County.`,
  intro: `Florida humidity, algae, and mildew don't wait—and neither should you. City Power Washing delivers expert ${service.toLowerCase()} using the right method for every surface. We're a Deltona-based, family-owned crew serving homeowners and businesses across six Central Florida cities with licensed, insured, satisfaction-guaranteed results.`,
  benefits: [
    `Surface-safe methods tailored for ${surface}`,
    "Eco-friendly cleaning solutions",
    "Free on-site written estimates",
    "10% veterans & active military discount",
    "100% satisfaction guarantee",
  ],
  pricing: DEFAULT_PRICING,
  faq: FAQ_ITEMS.slice(0, 4) as { q: string; a: string }[],
  relatedSlugs: [
    "soft-house-washing",
    "soft-wash-roof-cleaning",
    "driveway-pressure-washing",
    "commercial-pressure-washing",
  ].filter((s) => s !== slug),
});

export const PAGE_CONTENT: Record<string, PageContent> = {
  "soft-house-washing": {
    ...serviceDefaults(
      "Soft House Washing",
      "siding, stucco, soffits, and painted exteriors",
      "soft-house-washing",
    ),
    pricing: [
      {
        name: "1-Story Home",
        price: "249",
        unit: "starting at",
        features: ["Soft wash siding & trim", "Soffit & fascia brightening", "Eco pre-treatment", "Up to 2,000 sq ft"],
      },
      {
        name: "2-Story Home",
        price: "349",
        unit: "starting at",
        popular: true,
        features: ["Full exterior soft wash", "Gutter brightening", "Landscape protection", "Up to 3,500 sq ft"],
      },
      {
        name: "Estate / Large",
        price: "499",
        unit: "starting at",
        features: ["Multi-story coverage", "Pool cage exterior", "Add-on fence or deck", "Custom quote"],
      },
    ],
  },
  "soft-wash-roof-cleaning": {
    ...serviceDefaults(
      "Soft Wash Roof Cleaning",
      "shingle, tile, and metal roofs",
      "soft-wash-roof-cleaning",
    ),
    pricing: [
      {
        name: "Small Roof",
        price: "299",
        unit: "starting at",
        features: ["Soft wash treatment", "Algae & black streak removal", "Gutter edge rinse", "Up to 1,500 sq ft"],
      },
      {
        name: "Average Roof",
        price: "449",
        unit: "starting at",
        popular: true,
        features: ["Full roof soft wash", "Moss & mildew treatment", "Downspout flush", "Up to 2,500 sq ft"],
      },
      {
        name: "Large / Tile",
        price: "649",
        unit: "starting at",
        features: ["Tile or large shingle roof", "Extended dwell time treatment", "Priority scheduling", "Written warranty"],
      },
    ],
  },
  "driveway-pressure-washing": {
    ...serviceDefaults(
      "Driveway Pressure Washing",
      "concrete, pavers, and asphalt driveways",
      "driveway-pressure-washing",
    ),
    pricing: [
      {
        name: "Single Car",
        price: "149",
        unit: "starting at",
        features: ["Surface pre-treatment", "Pressure wash & rinse", "Edge detailing", "Up to 400 sq ft"],
      },
      {
        name: "Double Car",
        price: "199",
        unit: "starting at",
        popular: true,
        features: ["Tire mark treatment", "Oil spot pre-treat", "Paver-safe option", "Up to 800 sq ft"],
      },
      {
        name: "Extended Drive",
        price: "279",
        unit: "starting at",
        features: ["Long or circular drive", "Sidewalk combo add-on", "Sealing quote available", "Custom sizing"],
      },
    ],
  },
  "concrete-sidewalk-cleaning": {
    ...serviceDefaults(
      "Concrete & Sidewalk Cleaning",
      "walkways, patios, and curbs",
      "concrete-sidewalk-cleaning",
    ),
  },
  "pool-deck-cleaning": {
    ...serviceDefaults(
      "Pool Deck & Lanai Cleaning",
      "pool decks, lanais, and screen enclosures",
      "pool-deck-cleaning",
    ),
  },
  "fence-washing": {
    ...serviceDefaults(
      "Fence Washing",
      "vinyl, wood, and composite fencing",
      "fence-washing",
    ),
  },
  "gutter-cleaning": {
    ...serviceDefaults(
      "Gutter Cleaning",
      "gutters, downspouts, and fascia",
      "gutter-cleaning",
    ),
  },
  "rust-removal": {
    ...serviceDefaults(
      "Rust Stain Removal",
      "concrete, stucco, and exterior walls",
      "rust-removal",
    ),
  },
  "commercial-pressure-washing": {
    title: "Commercial Pressure Washing Central Florida | City Power Washing",
    metaDescription:
      "Commercial pressure washing for storefronts, HOAs, restaurants, offices & parking lots in Deltona, Lake Mary, Sanford & beyond. Licensed & insured. Free quotes.",
    h1: "Commercial Pressure Washing in Central Florida",
    heroSubtitle:
      "Storefronts, HOAs, restaurants, medical buildings, and parking lots—cleaned on your schedule.",
    intro:
      "First impressions drive foot traffic. City Power Washing helps Central Florida businesses maintain professional curb appeal with scheduled commercial exterior cleaning. From grease-stained dumpster pads to high-traffic sidewalks, our crew uses the right pressure and chemistry for every commercial surface.",
    benefits: [
      "Flexible scheduling—including early mornings",
      "HOA & property manager billing",
      "Grease, oil, and gum removal",
      "Fully licensed & insured commercial work",
      "Recurring maintenance plans available",
    ],
    pricing: [
      {
        name: "Storefront",
        price: "299",
        unit: "starting at",
        features: ["Entry & sidewalk", "Window sill brightening", "Dumpster pad rinse", "Up to 1,000 sq ft"],
      },
      {
        name: "Retail / Restaurant",
        price: "499",
        unit: "starting at",
        popular: true,
        features: ["Grease pre-treatment", "Patio & drive-thru", "Parking stripe edges", "After-hours available"],
      },
      {
        name: "HOA / Campus",
        price: "Custom",
        unit: "quote",
        features: ["Common areas & sidewalks", "Pool deck & clubhouse", "Parking lot sections", "Monthly plans"],
      },
    ],
    faq: FAQ_ITEMS as unknown as { q: string; a: string }[],
    relatedSlugs: ["grease-oil-removal", "driveway-pressure-washing", "concrete-sidewalk-cleaning"],
  },
  "grease-oil-removal": {
    ...serviceDefaults(
      "Grease & Oil Stain Removal",
      "dumpster pads, drive-thrus, and parking areas",
      "grease-oil-removal",
    ),
    relatedSlugs: ["commercial-pressure-washing", "driveway-pressure-washing", "concrete-sidewalk-cleaning"],
  },
};

export function cityPageContent(
  city: string,
  slug: string,
  description: string,
): PageContent {
  return {
    title: `Pressure Washing ${city} FL | House & Roof Cleaning | City Power Washing`,
    metaDescription: `Top-rated pressure washing & soft washing in ${city}, FL. House washing, roof cleaning, driveways & commercial exterior cleaning. Free quotes—call ${city}'s trusted local crew.`,
    h1: `Pressure Washing in ${city}, FL`,
    heroSubtitle: `Residential & commercial exterior cleaning for ${city} homes and businesses.`,
    intro: description,
    benefits: [
      `Local crew serving ${city} and surrounding neighborhoods`,
      "Soft washing & controlled pressure methods",
      "Same-week scheduling available",
      "Licensed, insured, 5-star Google rated",
      "Free on-site written estimates",
    ],
    pricing: DEFAULT_PRICING,
    faq: FAQ_ITEMS.slice(0, 4) as { q: string; a: string }[],
    relatedSlugs: [
      "soft-house-washing",
      "soft-wash-roof-cleaning",
      "driveway-pressure-washing",
      "commercial-pressure-washing",
    ],
  };
}
