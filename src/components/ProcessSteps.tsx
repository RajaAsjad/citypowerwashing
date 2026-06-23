"use client";

import { PROCESS_STEPS } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

export default function ProcessSteps() {
  return (
    <SectionCanvas className="py-20 sm:py-28" canvas={false}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="Simple. Professional. Guaranteed."
          subtitle="Four steps from free quote to a spotless property — every time."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="reveal card-glow relative overflow-hidden rounded-2xl water-card p-6 shadow-md"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-4 -top-4 text-8xl font-black text-teal-100">{step.step}</div>
              <div className="relative">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-sm font-black text-white">
                  {step.step}
                </span>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
