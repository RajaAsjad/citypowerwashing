import type { PageContent } from "@/lib/page-content";
import { PAGE_CONTENT } from "@/lib/page-content";
import { getCityImage, getServiceImage } from "@/lib/images";
import { CITY_PAGES, SITE } from "@/lib/site-data";
import CTABanner from "./CTABanner";
import FAQ from "./FAQ";
import Hero from "./Hero";
import OptimizedImage from "./OptimizedImage";
import PricingTable from "./PricingTable";
import ServiceGrid from "./ServiceGrid";
import Testimonials from "./Testimonials";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = {
  slug: string;
  content?: PageContent;
  showServices?: boolean;
};

function resolveHeroImage(slug: string): string {
  if (CITY_PAGES.some((c) => c.slug === slug)) return getCityImage(slug);
  return getServiceImage(slug);
}

export default function ServicePageTemplate({ slug, content, showServices = true }: Props) {
  const page = content ?? PAGE_CONTENT[slug];
  if (!page) return null;

  const url = `${SITE.url}/${slug}`;
  const heroImage = resolveHeroImage(slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(page.h1, page.intro, url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: page.h1, url },
          ]),
          ...(page.faq ? [faqSchema(page.faq)] : []),
        ]}
      />
      <Hero h1={page.h1} subtitle={page.heroSubtitle} compact image={heroImage} showCanvas={false} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl shadow-md">
                <OptimizedImage
                  src={heroImage}
                  alt={page.h1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Professional Results You Can Trust</h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">{page.intro}</p>
              <ul className="space-y-3">
                {page.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="rounded-2xl border border-teal-200 bg-gradient-to-b from-teal-50 to-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-slate-900">Request a Free Quote</h3>
              <p className="mb-4 text-sm text-slate-600">
                Most quotes provided same-day. Written estimates always included.
              </p>
              <Link
                href="/free-quote"
                className="mb-3 block rounded-full bg-teal-600 py-3 text-center text-sm font-bold text-white hover:bg-teal-700"
              >
                Get Free Quote
              </Link>
              <a
                href={SITE.phoneHref}
                className="block rounded-full border border-slate-300 py-3 text-center text-sm font-semibold text-slate-800 hover:border-teal-500"
              >
                Call {SITE.phone}
              </a>
            </aside>
          </div>
        </div>
      </section>
      {page.pricing && <PricingTable tiers={page.pricing} />}
      <Testimonials />
      {page.faq && <FAQ items={page.faq} />}
      {showServices && <ServiceGrid exclude={slug} />}
      <CTABanner />
    </>
  );
}
