import OptimizedImage from "./OptimizedImage";
import { IMAGES } from "@/lib/images";

const GALLERY = [
  { src: IMAGES.projects.before, label: "Before", alt: "Driveway before pressure washing in Deltona FL" },
  { src: IMAGES.projects.after, label: "After", alt: "Driveway after professional pressure washing" },
  { src: IMAGES.projects.one, label: "Roof Streaks", alt: "Roof with black algae streaks before soft wash cleaning" },
  { src: IMAGES.projects.two, label: "Roof Restored", alt: "Clean roof after soft wash roof cleaning Central Florida" },
] as const;

const EXTRA = [
  { src: IMAGES.projects.three, alt: "Pressure washing results on Central Florida home exterior" },
  { src: IMAGES.roofCleaning, alt: "Commercial roof cleaning in Deltona Florida" },
  { src: IMAGES.poolDeck, alt: "Pool deck cleaning in Deltona FL" },
] as const;

export default function ProjectGallery() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">Recent Projects</p>
          <h2 id="gallery-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            See The Central Florida Clean Difference
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {EXTRA.map((item) => (
            <figure key={item.src} className="relative aspect-video overflow-hidden rounded-2xl shadow-sm">
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
