"use client";

import { useEffect, useRef, type ReactNode } from "react";
import WaterCanvas from "./WaterCanvas";

type Props = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  canvas?: boolean;
  id?: string;
};

export default function SectionCanvas({ children, className = "", dark = false, canvas = true, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden ${dark ? "bg-slate-950 text-white" : "section-wave"} ${className}`}
    >
      {canvas && (
        <>
          <WaterCanvas className={`${dark ? "opacity-25 mix-blend-screen" : "opacity-[0.18] mix-blend-multiply"}`} />
          <div
            className={`absolute inset-0 ${
              dark
                ? "bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950"
                : "bg-gradient-to-b from-sky-50/80 via-white/90 to-cyan-50/40"
            }`}
          />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
