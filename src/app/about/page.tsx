import CTABanner from "@/components/CTABanner";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import OptimizedImage from "@/components/OptimizedImage";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import { IMAGES } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, TRUST_BADGES } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About City Power Washing | Deltona FL Pressure Washing Company",
  description:
    "Family-owned pressure washing company based in Deltona, FL. Licensed, insured, and serving Central Florida since 2018. Meet the crew behind your cleanest property yet.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "About", url: `${SITE.url}/about` },
        ])}
      />
      <Hero
        h1="About City Power Washing"
        subtitle="A Deltona-based, family-owned crew committed to safe exterior cleaning and honest service across Central Florida."
        compact
        image={IMAGES.heroCrew}
        showCanvas={false}
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Our Story</h2>
              <p className="mb-4 text-lg leading-relaxed text-slate-600">
                City Power Washing started in {SITE.founded} with a simple belief: Florida properties deserve cleaning that
                protects surfaces—not damages them. What began as a local Deltona operation has grown into a trusted name
                for residential and commercial exterior cleaning across six Central Florida cities.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We combine soft washing expertise with professional pressure washing for concrete and commercial hardscapes.
                Every job is backed by our 100% satisfaction guarantee, clear written quotes, and respectful crews who treat
                your property like their own.
              </p>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <OptimizedImage
                src={IMAGES.guarantee}
                alt="City Power Washing 100% satisfaction guarantee badge"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="rounded-xl border border-slate-200 bg-white p-4">
                <span className="mb-2 block text-2xl">{b.icon}</span>
                <span className="font-semibold text-slate-900">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}
