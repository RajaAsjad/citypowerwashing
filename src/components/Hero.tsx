import Link from "next/link";
import ImageReveal from "./ImageReveal";
import WaterCanvas from "./WaterCanvas";
import { IMAGES } from "@/lib/images";
import { SITE, TRUST_BADGES } from "@/lib/site-data";

type HeroProps = {
  h1: string;
  subtitle: string;
  showCanvas?: boolean;
  compact?: boolean;
  image?: string;
  showCrew?: boolean;
};

export default function Hero({
  h1,
  subtitle,
  showCanvas = true,
  compact = false,
  image,
  showCrew = false,
}: HeroProps) {
  const bgImage = image ?? IMAGES.heroBg;

  return (
    <section
      className={`relative overflow-hidden ${compact ? "min-h-[50vh]" : "min-h-[92vh] lg:min-h-screen"}`}
    >
      <ImageReveal
        src={bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-cyan-950/80" />
      {showCanvas && <WaterCanvas className="mix-blend-soft-light opacity-70" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,211,238,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(20,184,166,0.12),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sky-50 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:min-h-[inherit] lg:px-8 lg:py-36">
        <div className={`grid items-center gap-12 ${showCrew ? "lg:grid-cols-2" : ""}`}>
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              Deltona Based · Central Florida
            </p>
            <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {h1}
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-200/95 sm:text-xl">{subtitle}</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/free-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:brightness-110"
              >
                Get My Free Quote
                <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <svg className="h-5 w-5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE.phone}
              </a>
            </div>
          </div>

          {showCrew && (
            <div className="relative mx-auto hidden w-full max-w-lg lg:block">
              <div className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative aspect-square w-full">
                <ImageReveal
                  src={IMAGES.heroCrew}
                  alt="City Power Washing professional crew in Central Florida"
                  fill
                  priority
                  sizes="400px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>

        {!compact && (
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="glass-panel rounded-2xl p-4">
                <span className="mb-1 block text-2xl">{badge.icon}</span>
                <span className="text-xs font-semibold leading-snug text-slate-700 sm:text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
