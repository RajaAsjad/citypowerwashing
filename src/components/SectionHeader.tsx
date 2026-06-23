type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left", light = false }: Props) {
  return (
    <div className={`reveal mb-8 sm:mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <span
        className={`mb-2 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] sm:mb-3 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em] ${
          light
            ? "border border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
            : "border border-cyan-300/40 bg-cyan-50/80 text-cyan-800"
        }`}
      >
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${light ? "bg-cyan-400" : "bg-teal-500"}`} />
        {eyebrow}
      </span>
      <h2
        className={`text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          light ? "text-white" : "text-slate-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
