import Link from "next/link";
import WaterCanvas from "./WaterCanvas";
import { SITE } from "@/lib/site-data";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <WaterCanvas className="opacity-50 mix-blend-soft-light" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 via-slate-950/90 to-teal-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Ready to get started?</p>
        <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Restore Your Property&apos;s Exterior Today
        </h2>
        <p className="mb-10 text-lg text-slate-300">
          Free on-site quotes · Licensed & insured · 100% satisfaction guaranteed
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/free-quote"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 px-10 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:brightness-110"
          >
            Get My Free Quote
          </Link>
          <a
            href={SITE.phoneHref}
            className="rounded-full border border-white/25 bg-white/10 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
