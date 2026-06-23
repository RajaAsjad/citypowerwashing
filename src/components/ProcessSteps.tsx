import { PROCESS_STEPS } from "@/lib/site-data";

export default function ProcessSteps() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-600">Our Process</p>
          <h2 id="process-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Simple. Professional. Guaranteed.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <span className="mb-4 block text-3xl font-black text-teal-200">{step.step}</span>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
