import ServicePageTemplate from "@/components/ServicePageTemplate";
import { PAGE_CONTENT } from "@/lib/page-content";
import { cityPageContent } from "@/lib/page-content";
import { buildMetadata } from "@/lib/metadata";
import { CITY_PAGES } from "@/lib/site-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageExtras from "./CityPageExtras";

const ALL_SLUGS = [
  ...Object.keys(PAGE_CONTENT),
  ...CITY_PAGES.map((c) => c.slug),
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = CITY_PAGES.find((c) => c.slug === slug);
  if (city) {
    const content = cityPageContent(city.city, city.slug, city.description);
    return buildMetadata(content, `/${slug}`);
  }
  const content = PAGE_CONTENT[slug];
  if (!content) return {};
  return buildMetadata(content, `/${slug}`);
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const city = CITY_PAGES.find((c) => c.slug === slug);

  if (city) {
    const content = cityPageContent(city.city, city.slug, city.description);
    return (
      <>
        <ServicePageTemplate slug={slug} content={content} showServices={false} />
        <CityPageExtras city={city.city} county={city.county} />
      </>
    );
  }

  if (!PAGE_CONTENT[slug]) notFound();
  return <ServicePageTemplate slug={slug} />;
}
