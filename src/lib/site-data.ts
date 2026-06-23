export const SITE = {
  name: "City Power Washing",
  phone: "(386) 555-0147",
  phoneHref: "tel:+13865550147",
  email: "info@citypowerwashing.com",
  address: {
    street: "123 Providence Blvd",
    city: "Deltona",
    state: "FL",
    zip: "32725",
    full: "Deltona, FL 32725",
  },
  url: "https://www.citypowerwashing.com",
  rating: 5.0,
  reviewCount: 127,
  founded: 2018,
  serviceAreas: [
    "Deltona",
    "DeBary",
    "DeLand",
    "Orange City",
    "Lake Mary",
    "Sanford",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Residential",
    href: "/soft-house-washing",
    children: [
      { label: "Soft House Washing", href: "/soft-house-washing" },
      { label: "Roof Cleaning", href: "/soft-wash-roof-cleaning" },
      { label: "Driveway Cleaning", href: "/driveway-pressure-washing" },
      { label: "Concrete & Sidewalks", href: "/concrete-sidewalk-cleaning" },
      { label: "Pool Deck & Lanai", href: "/pool-deck-cleaning" },
      { label: "Fence Washing", href: "/fence-washing" },
      { label: "Gutter Cleaning", href: "/gutter-cleaning" },
      { label: "Rust Removal", href: "/rust-removal" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial-pressure-washing",
    children: [
      { label: "Commercial Services", href: "/commercial-pressure-washing" },
      { label: "Grease & Oil Removal", href: "/grease-oil-removal" },
    ],
  },
  {
    label: "Service Areas",
    href: "/pressure-washing-deltona",
    children: [
      { label: "Deltona", href: "/pressure-washing-deltona" },
      { label: "DeBary", href: "/pressure-washing-debary" },
      { label: "DeLand", href: "/pressure-washing-deland" },
      { label: "Orange City", href: "/pressure-washing-orange-city" },
      { label: "Lake Mary", href: "/pressure-washing-lake-mary" },
      { label: "Sanford", href: "/pressure-washing-sanford" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Free Quote", href: "/free-quote" },
] as const;

export const TRUST_BADGES = [
  { icon: "👨‍👩‍👧", label: "Family Owned & Operated" },
  { icon: "🛡️", label: "Fully Licensed & Insured" },
  { icon: "⭐", label: "5.0 Star Rated on Google" },
  { icon: "🎖️", label: "100% Satisfaction Guarantee" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Maria R.",
    location: "Deltona, FL",
    rating: 5,
    text: "Our roof looked terrible with black streaks everywhere. City Power Washing used soft wash and it looks brand new. Professional crew, fair price, and they protected all our landscaping.",
  },
  {
    name: "James T.",
    location: "Lake Mary, FL",
    rating: 5,
    text: "Had our driveway and pool deck done before a family gathering. Showed up on time, explained everything, and the concrete came out brighter than I expected. Highly recommend.",
  },
  {
    name: "Angela P.",
    location: "Sanford, FL",
    rating: 5,
    text: "We manage a small retail strip and needed storefront and sidewalk cleaning. They handled grease stains near the dumpster pad that other companies couldn't touch. Will use again.",
  },
  {
    name: "Robert & Linda K.",
    location: "DeBary, FL",
    rating: 5,
    text: "House washing, gutters, and fence—all in one visit. Crew was respectful, wore shoe covers inside, and left the property spotless. Veterans discount was a nice bonus.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free On-Site Quote",
    description:
      "We inspect your surfaces, explain the right cleaning method, and provide transparent written pricing—no surprises.",
  },
  {
    step: "02",
    title: "Surface-Safe Prep",
    description:
      "We protect landscaping, cover sensitive areas, and pre-treat stains with eco-friendly solutions matched to each surface.",
  },
  {
    step: "03",
    title: "Professional Clean",
    description:
      "Soft washing or controlled pressure washing removes algae, mildew, dirt, and buildup without damaging your property.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "We review results with you and back every job with our 100% satisfaction guarantee.",
  },
] as const;

export const RESIDENTIAL_SERVICES = [
  {
    slug: "soft-house-washing",
    title: "Soft House Washing",
    short: "Low-pressure exterior cleaning for siding, stucco, and painted surfaces.",
    icon: "🏠",
  },
  {
    slug: "soft-wash-roof-cleaning",
    title: "Soft Wash Roof Cleaning",
    short: "Safe roof cleaning for black streaks, algae, and Florida mildew.",
    icon: "🏡",
  },
  {
    slug: "driveway-pressure-washing",
    title: "Driveway Pressure Washing",
    short: "Concrete and paver driveway cleaning for tire marks and stains.",
    icon: "🚗",
  },
  {
    slug: "concrete-sidewalk-cleaning",
    title: "Concrete & Sidewalk Cleaning",
    short: "Walkways, patios, curbs, and high-traffic concrete areas.",
    icon: "🚶",
  },
  {
    slug: "pool-deck-cleaning",
    title: "Pool Deck & Lanai Cleaning",
    short: "Safer, brighter outdoor living spaces around your pool.",
    icon: "🏊",
  },
  {
    slug: "fence-washing",
    title: "Fence Washing",
    short: "Vinyl, wood, and privacy fence cleaning and brightening.",
    icon: "🪵",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    short: "Exterior gutter brightening, debris removal, and streak cleanup.",
    icon: "💧",
  },
  {
    slug: "rust-removal",
    title: "Rust Removal",
    short: "Irrigation and metal rust stain removal from concrete and walls.",
    icon: "🧽",
  },
] as const;

export const CITY_PAGES = [
  {
    slug: "pressure-washing-deltona",
    city: "Deltona",
    county: "Volusia County",
    headline: "Pressure Washing in Deltona, FL",
    description:
      "City Power Washing is headquartered in Deltona and provides residential and commercial exterior cleaning throughout local neighborhoods—from Providence to Saxon Ridge and beyond.",
  },
  {
    slug: "pressure-washing-debary",
    city: "DeBary",
    county: "Volusia County",
    headline: "Pressure Washing in DeBary, FL",
    description:
      "Professional house washing, roof cleaning, and commercial pressure washing for DeBary homes, golf communities, and businesses along US-17-92.",
  },
  {
    slug: "pressure-washing-deland",
    city: "DeLand",
    county: "Volusia County",
    headline: "Pressure Washing in DeLand, FL",
    description:
      "Historic homes, stucco exteriors, storefronts, and HOA communities in DeLand benefit from our soft washing and controlled pressure methods.",
  },
  {
    slug: "pressure-washing-orange-city",
    city: "Orange City",
    county: "Volusia County",
    headline: "Pressure Washing in Orange City, FL",
    description:
      "Roof cleaning, driveway washing, and commercial exterior services for Orange City residential and business properties.",
  },
  {
    slug: "pressure-washing-lake-mary",
    city: "Lake Mary",
    county: "Seminole County",
    headline: "Pressure Washing in Lake Mary, FL",
    description:
      "Curb appeal matters in Lake Mary. We clean homes, pool decks, storefronts, and office buildings with surface-safe professional methods.",
  },
  {
    slug: "pressure-washing-sanford",
    city: "Sanford",
    county: "Seminole County",
    headline: "Pressure Washing in Sanford, FL",
    description:
      "From historic Sanford districts to modern subdivisions, we deliver house washing, concrete cleaning, and commercial pressure washing.",
  },
] as const;

export type PricingTier = {
  name: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
};

export const DEFAULT_PRICING: PricingTier[] = [
  {
    name: "Essential Clean",
    price: "149",
    unit: "starting at",
    features: [
      "Single surface (driveway OR sidewalk)",
      "Pre-treatment included",
      "Eco-friendly solutions",
      "Same-week scheduling",
    ],
  },
  {
    name: "Home Refresh",
    price: "349",
    unit: "starting at",
    popular: true,
    features: [
      "House soft wash (up to 2,500 sq ft)",
      "Driveway OR sidewalk cleaning",
      "Gutter brightening",
      "100% satisfaction guarantee",
    ],
  },
  {
    name: "Full Property",
    price: "599",
    unit: "starting at",
    features: [
      "House + roof soft wash combo",
      "Driveway & walkway package",
      "Pool deck or fence add-on",
      "Priority scheduling",
    ],
  },
];

export const FAQ_ITEMS = [
  {
    q: "Do you use soft washing or pressure washing?",
    a: "We use both. Soft washing applies low pressure with eco-friendly solutions—ideal for roofs, siding, and painted surfaces. Pressure washing uses controlled higher pressure for concrete, driveways, and heavy buildup.",
  },
  {
    q: "How often should I clean my roof or house in Florida?",
    a: "Due to humidity and rainfall, we recommend soft wash roof cleaning every 2–3 years and house washing every 1–2 years to prevent algae and mildew damage.",
  },
  {
    q: "How much does pressure washing cost?",
    a: "Pricing depends on surface size and condition. We provide free on-site quotes with transparent written pricing. Many small jobs can be quoted by phone.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. City Power Washing is fully licensed and insured for residential and commercial work throughout Central Florida.",
  },
  {
    q: "Do you offer a veterans discount?",
    a: "Yes—we offer a 10% discount for veterans and active military members.",
  },
] as const;
