import Link from "next/link";
import { RESIDENTIAL_SERVICES, SITE } from "@/lib/site-data";

export default function CityPageExtras({ city, county }: { city: string; county: string }) {
  return (
    <section className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Popular Services in {city}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RESIDENTIAL_SERVICES.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="rounded-xl border border-slate-200 p-4 text-sm font-medium text-slate-700 transition hover:border-teal-400 hover:text-teal-700"
            >
              {s.icon} {s.title}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Serving {city} and all of {county}. Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-teal-600">
            {SITE.phone}
          </a>{" "}
          for a free quote.
        </p>
      </div>
    </section>
  );
}
