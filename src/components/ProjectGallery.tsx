"use client";

import ImageReveal from "./ImageReveal";
import WaterCanvas from "./WaterCanvas";
import { IMAGES } from "@/lib/images";
import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

const GALLERY = [
  { src: IMAGES.projects.before, label: "Before", alt: "Driveway before pressure washing in Deltona FL" },
  { src: IMAGES.projects.after, label: "After", alt: "Driveway after professional pressure washing" },
  { src: IMAGES.projects.one, label: "Roof Streaks", alt: "Roof with black algae streaks before soft wash" },
  { src: IMAGES.projects.two, label: "Roof Restored", alt: "Clean roof after soft wash in Central Florida" },
] as const;

export default function ProjectGallery() {
  return (
    <SectionCanvas dark className="py-12 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recent Projects"
          title="See The Clean Difference"
          subtitle="Real results from Deltona and surrounding Central Florida communities."
          align="center"
          light
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <figure
              key={item.label}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ImageReveal
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                rounded="rounded-2xl"
              />
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <WaterCanvas className="mix-blend-soft-light opacity-40" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/30 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {item.label === "Before" || item.label === "Roof Streaks" ? "🔴" : "✅"} {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
