import { TESTIMONIALS } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">Reviews</p>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What Central Florida Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex gap-0.5 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-slate-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <footer className="text-sm font-semibold text-slate-900">
                {t.name}
                <span className="font-normal text-slate-500"> · {t.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
