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
      <SectionCanvas className="py-16 sm:py-20" canvas={false}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="reveal relative mb-8 aspect-video overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/80">
                <ImageReveal
                  src={heroImage}
                  alt={page.h1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  rounded="rounded-3xl"
                />
              </div>
              <h2 className="reveal mb-4 text-2xl font-black text-slate-900 sm:text-3xl">
                Professional Results You Can Trust
              </h2>
              <p className="reveal mb-6 text-lg leading-relaxed text-slate-600">{page.intro}</p>
              <ul className="reveal space-y-3">
                {page.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="reveal lg:col-span-2">
              <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-700 p-6 text-white shadow-xl shadow-teal-600/25 sm:p-8">
                <h3 className="mb-2 text-xl font-black">Request a Free Quote</h3>
                <p className="mb-6 text-sm text-teal-100">
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
