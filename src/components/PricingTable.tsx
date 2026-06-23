"use client";

import type { PricingTier } from "@/lib/site-data";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import SectionCanvas from "./SectionCanvas";

export default function PricingTable({ tiers, title = "Transparent Pricing" }: { tiers: PricingTier[]; title?: string }) {
  return (
    <SectionCanvas className="py-20 sm:py-28" canvas={false}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={title}
          subtitle="Every property is different. These starting rates help you plan — your free on-site quote is always in writing."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`reveal card-glow relative flex flex-col rounded-2xl p-6 sm:p-8 ${
                tier.popular
                  ? "bg-gradient-to-b from-teal-600 to-teal-700 text-white shadow-xl shadow-teal-600/30 ring-2 ring-teal-400"
                  : "bg-white shadow-md ring-1 ring-slate-200/80"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-black uppercase tracking-wide text-slate-900">
                  Most Popular
                </span>
              )}
              <h3 className={`text-lg font-bold ${tier.popular ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
              <div className="my-5">
                <span className={`text-sm ${tier.popular ? "text-teal-100" : "text-slate-500"}`}>{tier.unit}</span>
                <div className="flex items-baseline gap-1">
                  {tier.price !== "Custom" && (
                    <span className={`text-2xl font-bold ${tier.popular ? "text-teal-200" : "text-slate-400"}`}>$</span>
                  )}
                  <span className={`text-5xl font-black ${tier.popular ? "text-white" : "text-slate-900"}`}>{tier.price}</span>
                </div>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.popular ? "text-teal-50" : "text-slate-600"}`}>
                    <svg className={`mt-0.5 h-4 w-4 shrink-0 ${tier.popular ? "text-cyan-300" : "text-teal-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-quote"
                className={`block rounded-full py-3.5 text-center text-sm font-bold transition ${
                  tier.popular
                    ? "bg-white text-teal-700 hover:bg-cyan-50"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
