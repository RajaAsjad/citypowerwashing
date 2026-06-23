"use client";

import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <SectionCanvas className="py-20 sm:py-28" canvas={false}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know before booking your free quote."
          align="center"
        />

        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={item.q}
              className="reveal group rounded-2xl water-card shadow-sm open:shadow-md open:ring-cyan-300/50"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition group-open:rotate-45 group-open:bg-teal-600 group-open:text-white">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
