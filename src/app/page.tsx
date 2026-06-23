import CityGrid from "@/components/CityGrid";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import OptimizedImage from "@/components/OptimizedImage";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import { homeMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import { faqSchema } from "@/lib/schema";
import { FAQ_ITEMS } from "@/lib/site-data";
import Link from "next/link";

export const metadata = homeMetadata();

const INTRO_IMAGES = [
  { src: IMAGES.residential, alt: "Residential pressure washing in Central Florida", label: "Residential" },
  { src: IMAGES.commercial, alt: "Commercial pressure washing storefront cleaning", label: "Commercial" },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema([...FAQ_ITEMS])} />
      <Hero
        h1="Professional Pressure Washing & Soft Washing in Central Florida"
        subtitle="City Power Washing restores roofs, driveways, siding, and commercial exteriors across Deltona, DeBary, DeLand, Orange City, Lake Mary, and Sanford—with safe methods and a 100% satisfaction guarantee."
        showCrew
      />

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Safe Cleaning Methods for Every Surface
              </h2>
              <p className="mb-6 text-slate-600 leading-relaxed">
                Florida humidity breeds algae, mildew, and black streaks that damage curb appeal and surfaces over time.
                We match soft washing or controlled pressure to each material—never one-size-fits-all blasting.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {INTRO_IMAGES.map((item) => (
                  <div key={item.label} className="overflow-hidden rounded-xl border border-slate-200">
                    <div className="relative aspect-video">
                      <OptimizedImage
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 font-bold text-teal-700">{item.label}</h3>
                      <p className="text-sm text-slate-600">
                        {item.label === "Residential"
                          ? "Roofs, siding, driveways, pool decks, fences, gutters, and more."
                          : "Storefronts, HOAs, restaurants, offices, parking lots, and grease removal."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: IMAGES.projects.before, label: "Before", alt: "Dirty driveway before pressure washing" },
                { src: IMAGES.projects.after, label: "After", alt: "Clean driveway after pressure washing" },
                { src: IMAGES.projects.one, label: "Roof Streaks", alt: "Roof algae streaks before cleaning" },
                { src: IMAGES.projects.two, label: "Roof Restored", alt: "Roof after soft wash cleaning" },
              ].map((item) => (
                <figure key={item.label} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <OptimizedImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid />

      <section className="relative overflow-hidden bg-slate-900 py-12 text-white">
        <OptimizedImage
          src={IMAGES.commercial}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
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

      <ProjectGallery />
      <ProcessSteps />
      <Testimonials />
      <CityGrid />
      <FAQ items={[...FAQ_ITEMS]} />
      <CTABanner />
    </>
  );
}
