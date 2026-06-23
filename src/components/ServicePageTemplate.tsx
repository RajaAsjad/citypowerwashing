"use client";

import type { PageContent } from "@/lib/page-content";
import { PAGE_CONTENT } from "@/lib/page-content";
import { getCityImage, getServiceImage } from "@/lib/images";
import { CITY_PAGES, SITE } from "@/lib/site-data";
import CTABanner from "./CTABanner";
import FAQ from "./FAQ";
import Hero from "./Hero";
import ImageReveal from "./ImageReveal";
import PricingTable from "./PricingTable";
import SectionCanvas from "./SectionCanvas";
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

  const quoteCard = (
    <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 p-5 text-white shadow-xl shadow-teal-600/25 sm:rounded-3xl sm:p-8">
      <h3 className="mb-2 text-lg font-black sm:text-xl">Request a Free Quote</h3>
      <p className="mb-5 text-sm text-teal-100 sm:mb-6">
        Most quotes provided same-day. Written estimates always included.
      </p>
      <Link
        href="/free-quote"
        className="mb-3 block rounded-full bg-white py-3.5 text-center text-sm font-bold text-teal-700 transition hover:bg-cyan-50"
      >
        Get Free Quote
      </Link>
      <a
        href={SITE.phoneHref}
        className="block rounded-full border border-white/30 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Call {SITE.phone}
      </a>
    </div>
  );

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
      <Hero h1={page.h1} subtitle={page.heroSubtitle} compact image={heroImage} showCanvas />
      <SectionCanvas className="py-12 sm:py-16 md:py-20" canvas={false}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Quote card first on mobile */}
          <div className="reveal mb-8 lg:hidden">{quoteCard}</div>

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-3">
              <div className="reveal relative mb-6 aspect-video overflow-hidden rounded-2xl shadow-xl ring-1 ring-cyan-200/50 sm:mb-8 sm:rounded-3xl">
                <ImageReveal
                  src={heroImage}
                  alt={page.h1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  rounded="rounded-2xl sm:rounded-3xl"
                />
              </div>
              <h2 className="reveal mb-3 text-xl font-black text-slate-900 sm:mb-4 sm:text-2xl md:text-3xl">
                Professional Results You Can Trust
              </h2>
              <p className="reveal mb-5 text-base leading-relaxed text-slate-600 sm:mb-6 sm:text-lg">{page.intro}</p>
              <ul className="reveal space-y-2 sm:space-y-3">
                {page.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl water-card p-3 shadow-sm">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm text-slate-700 sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="reveal hidden lg:col-span-2 lg:block">
              <div className="sticky top-24">{quoteCard}</div>
            </aside>
          </div>
        </div>
      </SectionCanvas>
      {page.pricing && <PricingTable tiers={page.pricing} />}
      <Testimonials />
      {page.faq && <FAQ items={page.faq} />}
      {showServices && <ServiceGrid exclude={slug} />}
      <CTABanner />
    </>
  );
}
