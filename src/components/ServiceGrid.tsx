import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import { getServiceImage } from "@/lib/images";
import { RESIDENTIAL_SERVICES } from "@/lib/site-data";

export default function ServiceGrid({ exclude }: { exclude?: string }) {
  const services = exclude
    ? RESIDENTIAL_SERVICES.filter((s) => s.slug !== exclude)
    : RESIDENTIAL_SERVICES;

  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">Services</p>
          <h2 id="services-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Pressure Washing & Soft Washing Services
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-teal-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <OptimizedImage
                  src={getServiceImage(service.slug)}
                  alt={`${service.title} in Central Florida by City Power Washing`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-3 text-2xl drop-shadow">{service.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-bold text-slate-900 group-hover:text-teal-700">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Learn more
                  <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
