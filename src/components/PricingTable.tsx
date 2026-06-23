import type { PricingTier } from "@/lib/site-data";
import Link from "next/link";

export default function PricingTable({ tiers, title = "Transparent Pricing" }: { tiers: PricingTier[]; title?: string }) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">Pricing</p>
          <h2 id="pricing-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Every property is different. These starting rates help you plan—your free on-site quote is always in writing.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                tier.popular
                  ? "border-teal-500 bg-gradient-to-b from-teal-50 to-white shadow-lg shadow-teal-500/10"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
              <div className="my-4">
                <span className="text-sm text-slate-500">{tier.unit}</span>
                <div className="flex items-baseline gap-1">
                  {tier.price !== "Custom" && <span className="text-2xl font-bold text-slate-400">$</span>}
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                </div>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-quote"
                className={`block rounded-full py-3 text-center text-sm font-bold transition ${
                  tier.popular
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "border border-slate-300 text-slate-800 hover:border-teal-500 hover:text-teal-700"
                }`}
              >
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
