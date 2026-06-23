import CityGrid from "@/components/CityGrid";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ImageReveal from "@/components/ImageReveal";
import ProcessSteps from "@/components/ProcessSteps";
import ProjectGallery from "@/components/ProjectGallery";
import SectionCanvas from "@/components/SectionCanvas";
import SectionHeader from "@/components/SectionHeader";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";
import WaterCanvas from "@/components/WaterCanvas";
import { homeMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import { faqSchema } from "@/lib/schema";
import { FAQ_ITEMS } from "@/lib/site-data";
import Link from "next/link";

export const metadata = homeMetadata();

const BEFORE_AFTER = [
  { src: IMAGES.projects.before, label: "Before", alt: "Dirty driveway before pressure washing" },
  { src: IMAGES.projects.after, label: "After", alt: "Clean driveway after pressure washing" },
  { src: IMAGES.projects.one, label: "Roof Streaks", alt: "Roof algae streaks before cleaning" },
  { src: IMAGES.projects.two, label: "Roof Restored", alt: "Roof after soft wash cleaning" },
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

      <SectionCanvas className="py-12 sm:py-20 md:py-28" canvas={false}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Safe Cleaning for Every Surface"
                subtitle="Florida humidity breeds algae and mildew. We match soft washing or controlled pressure to each material — never one-size-fits-all blasting."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { src: IMAGES.residential, label: "Residential", desc: "Roofs, siding, driveways, pool decks & more." },
                  { src: IMAGES.commercial, label: "Commercial", desc: "Storefronts, HOAs, restaurants & parking lots." },
                ].map((item) => (
                  <div key={item.label} className="card-glow overflow-hidden rounded-2xl water-card shadow-md">
                    <div className="relative aspect-video">
                      <ImageReveal src={item.src} alt={item.label} fill sizes="300px" className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-teal-700">{item.label}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-3">
              {BEFORE_AFTER.map((item, i) => (
                <figure
                  key={item.label}
                  className="card-glow relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-cyan-300/30"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <ImageReveal src={item.src} alt={item.alt} fill sizes="300px" className="object-cover" rounded="rounded-2xl" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {item.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </SectionCanvas>

      <ServiceGrid />

      <section className="relative min-h-[300px] overflow-hidden py-16 sm:py-20">
        <ImageReveal src={IMAGES.commercial} alt="" fill sizes="100vw" className="object-cover" />
        <WaterCanvas className="mix-blend-soft-light opacity-40" />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="reveal max-w-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-400">Commercial</p>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Commercial Pressure Washing</h2>
            <p className="mt-3 text-slate-300">Storefronts, HOAs, restaurants, and parking lots — on your schedule.</p>
          </div>
          <Link
            href="/commercial-pressure-washing"
            className="reveal w-full rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-slate-900 shadow-xl transition hover:bg-cyan-50 sm:w-auto sm:px-8"
          >
            View Commercial Services →
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
