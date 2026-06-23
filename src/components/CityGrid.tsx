"use client";

import Link from "next/link";
import ImageReveal from "./ImageReveal";
import WaterCanvas from "./WaterCanvas";
import { getCityImage } from "@/lib/images";
import { CITY_PAGES } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

export default function CityGrid() {
  return (
    <SectionCanvas className="py-20 sm:py-28" id="service-areas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service Areas"
          title="Central Florida Cities We Serve"
          subtitle="Local crews, fast scheduling, and surface-safe cleaning in every community below."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_PAGES.map((city, i) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="card-glow reveal group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl shadow-lg sm:min-h-[320px] sm:rounded-3xl md:min-h-[340px]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <ImageReveal
                  src={getCityImage(city.slug)}
                  alt={`Pressure washing in ${city.city}, Florida`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  rounded="rounded-3xl"
                />
              </div>

              {/* Canvas water overlay on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <WaterCanvas className="mix-blend-soft-light opacity-50" />
              </div>

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-900/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative mt-auto p-4 sm:p-6">
                <div className="glass-panel mb-2 inline-flex items-center gap-2 rounded-full px-2.5 py-1 sm:mb-3 sm:px-3">
                  <span className="text-xs sm:text-sm">📍</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 sm:text-xs">{city.county}</span>
                </div>
                <h3 className="mb-1.5 text-xl font-extrabold text-white drop-shadow-lg sm:mb-2 sm:text-2xl">
                  {city.city}, <span className="text-cyan-300">FL</span>
                </h3>
                <p className="mb-3 text-xs leading-relaxed text-slate-200/90 line-clamp-2 sm:mb-4 sm:text-sm sm:line-clamp-3 md:group-hover:line-clamp-none">
                  {city.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition group-hover:gap-3">
                  View {city.city} Services
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
