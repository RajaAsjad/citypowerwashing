/** Local HD images sourced from citypowerwashing.com (Wix media) */
export const IMAGES = {
  heroBg: "/images/hero-bg.jpg",
  logo: "/images/logo.png",
  heroCrew: "/images/hero-crew.png",
  guarantee: "/images/guarantee.png",
  residential: "/images/residential.webp",
  commercial: "/images/commercial.webp",
  patioWashing: "/images/patio-washing.jpg",
  poolDeck: "/images/pool-deck.webp",
  houseWashing: "/images/residential.webp",
  roofCleaning: "/images/roof-cleaning.webp",
  projects: {
    before: "/images/project-before.webp",
    after: "/images/project-after.webp",
    one: "/images/project-1.jpg",
    two: "/images/project-2.jpg",
    three: "/images/project-3.jpg",
  },
  services: {
    "soft-house-washing": "/images/residential.webp",
    "soft-wash-roof-cleaning": "/images/roof-cleaning.webp",
    "driveway-pressure-washing": "/images/patio-washing.jpg",
    "concrete-sidewalk-cleaning": "/images/project-1.jpg",
    "pool-deck-cleaning": "/images/pool-deck.webp",
    "fence-washing": "/images/project-before.webp",
    "gutter-cleaning": "/images/house-washing.webp",
    "rust-removal": "/images/project-after.webp",
    "commercial-pressure-washing": "/images/commercial.webp",
    "grease-oil-removal": "/images/project-after.webp",
  } as Record<string, string>,
  cities: {
    "pressure-washing-deltona": "/images/hero-bg.jpg",
    "pressure-washing-debary": "/images/project-2.jpg",
    "pressure-washing-deland": "/images/roof-cleaning-commercial.webp",
    "pressure-washing-orange-city": "/images/pool-deck.webp",
    "pressure-washing-lake-mary": "/images/patio-washing.jpg",
    "pressure-washing-sanford": "/images/project-3.jpg",
  } as Record<string, string>,
} as const;

export function getServiceImage(slug: string): string {
  return IMAGES.services[slug] ?? IMAGES.residential;
}

export function getCityImage(slug: string): string {
  return IMAGES.cities[slug] ?? IMAGES.patioWashing;
}
