"use client";

import { TESTIMONIALS } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

export default function Testimonials() {
  return (
    <SectionCanvas className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reviews"
          title="What Our Customers Say"
          subtitle="5-star rated on Google — homeowners and businesses across Central Florida trust our crew."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className="reveal card-glow rounded-2xl water-card p-6 shadow-md backdrop-blur-sm sm:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex gap-0.5 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-5 text-base leading-relaxed text-slate-700">&ldquo;{t.text}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-bold text-slate-900">{t.name}</cite>
                  <p className="text-sm text-slate-500">{t.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
