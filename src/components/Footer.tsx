import Link from "next/link";
import { CITY_PAGES, NAV_LINKS, RESIDENTIAL_SERVICES, SITE } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-600 text-sm font-bold text-white">
              CP
            </span>
            <span className="font-bold text-white">{SITE.name}</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            Family-owned pressure washing & soft washing serving Deltona, DeBary, DeLand, Orange City, Lake Mary, and Sanford.
          </p>
          <a href={SITE.phoneHref} className="text-lg font-semibold text-cyan-400 hover:text-cyan-300">
            {SITE.phone}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Residential</h3>
          <ul className="space-y-2 text-sm">
            {RESIDENTIAL_SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="transition hover:text-cyan-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h3>
          <ul className="space-y-2 text-sm">
            {CITY_PAGES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="transition hover:text-cyan-400">
                  {c.city}, FL
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.filter((l) => !("children" in l)).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-cyan-400">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/commercial-pressure-washing" className="transition hover:text-cyan-400">
                Commercial Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Licensed & Insured. Serving Central Florida.
        </p>
      </div>
    </footer>
  );
}
