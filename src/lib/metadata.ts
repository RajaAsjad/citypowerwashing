import type { Metadata } from "next";
import type { PageContent } from "./page-content";
import { SITE } from "./site-data";

export function buildMetadata(content: PageContent, path: string): Metadata {
  return {
    title: content.title,
    description: content.metaDescription,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: path },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export function homeMetadata(): Metadata {
  return {
    title: "Pressure Washing Deltona FL | Soft Washing & Roof Cleaning | City Power Washing",
    description:
      "5-star rated pressure washing & soft washing in Deltona, DeBary, DeLand, Orange City, Lake Mary & Sanford. House washing, roof cleaning, commercial exterior cleaning. Free quotes!",
    metadataBase: new URL(SITE.url),
    alternates: { canonical: "/" },
    openGraph: {
      title: "City Power Washing | Central Florida Pressure & Soft Washing",
      description:
        "Professional pressure washing for homes & businesses across Central Florida. Licensed, insured, satisfaction guaranteed.",
      url: SITE.url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },
  };
}
