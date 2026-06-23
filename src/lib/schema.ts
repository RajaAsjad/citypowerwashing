import { SITE } from "./site-data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/og-image.jpg`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.9006,
      longitude: -81.2637,
    },
    areaServed: SITE.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Florida" },
    })),
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: SITE.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, FL`,
    })),
    serviceType: "Pressure Washing",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${SITE.url}/#business` },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Maria R." },
    reviewBody:
      "Our roof looked terrible with black streaks everywhere. City Power Washing used soft wash and it looks brand new.",
  };
}
