import Link from "next/link";
import { SITE } from "@/lib/site-data";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Ready to Restore Your Property&apos;s Exterior?
        </h2>
        <p className="mb-8 text-lg text-slate-300">
          Free on-site quotes. Licensed & insured. 100% satisfaction guaranteed.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/free-quote"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
          >
            Get My Free Quote
          </Link>
          <a
            href={SITE.phoneHref}
            className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
