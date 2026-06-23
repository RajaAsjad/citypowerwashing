import CTABanner from "@/components/CTABanner";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { RESIDENTIAL_SERVICES, SITE } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Pressure Washing Quote | City Power Washing Central Florida",
  description:
    "Request your free, no-obligation pressure washing quote in Deltona, DeBary, DeLand, Orange City, Lake Mary & Sanford. Fast response, written estimates.",
  alternates: { canonical: "/free-quote" },
};

export default function FreeQuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Free Quote", url: `${SITE.url}/free-quote` },
        ])}
      />
      <Hero
        h1="Get Your Free Quote"
        subtitle="Tell us what you need cleaned. We'll respond quickly with a transparent, written estimate—no pressure, no surprises."
        compact
        showCanvas={false}
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="(386) 555-0147"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-slate-700">
                What do you need cleaned?
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {RESIDENTIAL_SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Commercial Pressure Washing">Commercial Pressure Washing</option>
                <option value="Other">Other / Multiple Services</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="city" className="mb-1.5 block text-sm font-semibold text-slate-700">
                City
              </label>
              <select
                id="city"
                name="city"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                {SITE.serviceAreas.map((city) => (
                  <option key={city} value={city}>
                    {city}, FL
                  </option>
                ))}
                <option value="Other Central Florida">Other Central Florida</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                placeholder="Property size, surfaces, preferred timing..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 py-4 text-base font-bold text-white shadow-lg transition hover:brightness-110"
            >
              Submit Free Quote Request
            </button>
            <p className="mt-4 text-center text-sm text-slate-500">
              Prefer to call?{" "}
              <a href={SITE.phoneHref} className="font-semibold text-teal-600">
                {SITE.phone}
              </a>
            </p>
          </form>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
