"use client";

import Link from "next/link";
import ImageReveal from "./ImageReveal";
import { getServiceImage } from "@/lib/images";
import { RESIDENTIAL_SERVICES } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

export default function ServiceGrid({ exclude }: { exclude?: string }) {
  const services = exclude
    ? RESIDENTIAL_SERVICES.filter((s) => s.slug !== exclude)
    : RESIDENTIAL_SERVICES;

  return (
    <SectionCanvas className="py-12 sm:py-20 md:py-28" canvas={false}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Pressure Washing & Soft Washing"
          subtitle="Every surface gets the right method — soft wash for delicate exteriors, controlled pressure for concrete and hardscapes."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="card-glow reveal group overflow-hidden rounded-2xl water-card shadow-md"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageReveal
                  src={getServiceImage(service.slug)}
                  alt={`${service.title} in Central Florida`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl backdrop-blur-md">
                  {service.icon}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow">
                  {service.title}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm leading-relaxed text-slate-600">{service.short}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 transition group-hover:gap-2.5">
                  Explore service
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
