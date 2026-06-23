import CityGrid from "@/components/CityGrid";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import { homeMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { FAQ_ITEMS, SITE } from "@/lib/site-data";
import Link from "next/link";

export const metadata = homeMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema([...FAQ_ITEMS])} />
      <Hero
        h1="Professional Pressure Washing & Soft Washing in Central Florida"
        subtitle="City Power Washing restores roofs, driveways, siding, and commercial exteriors across Deltona, DeBary, DeLand, Orange City, Lake Mary, and Sanford—with safe methods and a 100% satisfaction guarantee."
      />

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Safe Cleaning Methods for Every Surface
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed">
                Florida humidity breeds algae, mildew, and black streaks that damage curb appeal and surfaces over time.
                We match soft washing or controlled pressure to each material—never one-size-fits-all blasting.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="mb-2 font-bold text-teal-700">Residential</h3>
                  <p className="text-sm text-slate-600">
                    Roofs, siding, driveways, pool decks, fences, gutters, and more.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="mb-2 font-bold text-teal-700">Commercial</h3>
                  <p className="text-sm text-slate-600">
                    Storefronts, HOAs, restaurants, offices, parking lots, and grease removal.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Before", tone: "from-slate-400 to-slate-600" },
                { label: "After", tone: "from-cyan-400 to-teal-600" },
                { label: "Roof Streaks", tone: "from-slate-500 to-slate-700" },
                { label: "Roof Restored", tone: "from-sky-400 to-cyan-600" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex aspect-[4/3] items-end rounded-2xl bg-gradient-to-br ${item.tone} p-4`}
                >
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid />

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">Commercial Pressure Washing</h2>
            <p className="mt-2 text-slate-300">Storefronts, HOAs, restaurants, and parking lots on your schedule.</p>
          </div>
          <Link
            href="/commercial-pressure-washing"
            className="rounded-full bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-cyan-50"
          >
            View Commercial Services
          </Link>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <CityGrid />
      <FAQ items={[...FAQ_ITEMS]} />
      <CTABanner />
    </>
  );
}
