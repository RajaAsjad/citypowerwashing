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
      className={`relative overflow-hidden ${
        compact ? "min-h-[55vh] sm:min-h-[50vh]" : "min-h-[100svh] sm:min-h-[92vh] lg:min-h-screen"
      }`}
    >
      <ImageReveal src={bgImage} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-cyan-950/80" />
      {showCanvas && <WaterCanvas className="mix-blend-soft-light opacity-70" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,211,238,0.18),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-200/80 to-transparent sm:h-24" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-8 pt-20 sm:px-6 sm:pb-12 sm:pt-28 lg:min-h-[inherit] lg:px-8 lg:py-36">
        <div className={`grid items-center gap-8 sm:gap-12 ${showCrew ? "lg:grid-cols-2" : ""}`}>
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-200 backdrop-blur-sm sm:mb-5 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-cyan-400 sm:h-2 sm:w-2" />
              <span className="truncate">Deltona Based · Central Florida</span>
            </p>
            <h1 className="mb-4 text-[1.65rem] font-black leading-[1.08] tracking-tight text-white min-[400px]:text-3xl sm:mb-6 sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-6xl xl:text-7xl">
              {h1}
            </h1>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-200/95 sm:mb-10 sm:text-lg md:text-xl">
              {subtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/free-quote"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:brightness-110 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Get My Free Quote
                <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                <svg className="h-5 w-5 shrink-0 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE.phone}
              </a>
            </div>
          </div>

          {showCrew && (
            <div className="relative mx-auto w-full max-w-[220px] sm:max-w-xs md:max-w-sm lg:hidden">
              <div className="relative aspect-square w-full">
                <ImageReveal
                  src={IMAGES.heroCrew}
                  alt="City Power Washing crew"
                  fill
                  priority
                  sizes="(max-width: 768px) 220px, 0px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          )}

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
          <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-14 sm:gap-3 md:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="glass-panel rounded-xl p-3 sm:rounded-2xl sm:p-4">
                <span className="mb-0.5 block text-lg sm:mb-1 sm:text-2xl">{badge.icon}</span>
                <span className="text-[10px] font-semibold leading-snug text-cyan-900 sm:text-xs md:text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
