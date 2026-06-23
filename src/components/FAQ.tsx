type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-teal-500 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
