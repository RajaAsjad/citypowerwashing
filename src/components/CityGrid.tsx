import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import { getCityImage } from "@/lib/images";
import { CITY_PAGES } from "@/lib/site-data";

export default function CityGrid() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">Service Areas</p>
          <h2 id="areas-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Central Florida Cities We Serve
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_PAGES.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-teal-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <OptimizedImage
                  src={getCityImage(city.slug)}
                  alt={`Pressure washing services in ${city.city}, Florida`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-lg font-bold text-white">{city.city}, FL</h3>
                  <p className="text-xs font-medium text-cyan-200">{city.county}</p>
                </div>
              </div>
              <p className="p-4 text-sm leading-relaxed text-slate-600 line-clamp-2">{city.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
