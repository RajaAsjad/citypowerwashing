import Link from "next/link";
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
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">📍</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700">
                  {city.city}, FL
                </h3>
              </div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-teal-600">{city.county}</p>
              <p className="text-sm leading-relaxed text-slate-600 line-clamp-2">{city.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
