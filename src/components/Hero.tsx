import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
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
      className={`relative overflow-hidden ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28 lg:py-32"}`}
    >
      <OptimizedImage
        src={bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-slate-950/75" />
      {showCanvas && <WaterCanvas className="mix-blend-soft-light opacity-60" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid items-center gap-10 ${showCrew ? "lg:grid-cols-2" : ""}`}>
          <div className={showCrew ? "max-w-3xl" : "max-w-3xl"}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Deltona Based · Central Florida
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {h1}
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-200/90 sm:text-xl">{subtitle}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/free-quote"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-xl transition hover:bg-cyan-50"
              >
                Get My Free Quote
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {SITE.phone}
              </a>
            </div>
          </div>

          {showCrew && (
            <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
              <OptimizedImage
                src={IMAGES.heroCrew}
                alt="City Power Washing crew member providing professional pressure washing in Central Florida"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 400px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          )}
        </div>

        {!compact && (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <span className="mb-2 block text-2xl">{badge.icon}</span>
                <span className="text-xs font-medium leading-snug text-slate-200 sm:text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
