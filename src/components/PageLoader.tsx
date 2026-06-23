"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import WaterCanvas from "./WaterCanvas";
import { IMAGES } from "@/lib/images";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      className="loader-exit fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950"
      aria-hidden="true"
    >
      <WaterCanvas className="opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/50 via-slate-950/80 to-slate-950" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-teal-500" />
          <Image src={IMAGES.logo} alt="" width={56} height={56} className="rounded-xl object-contain" priority />
        </div>

        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="loader-drop h-2.5 w-2.5 rounded-full bg-cyan-400"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <p className="text-sm font-semibold tracking-widest text-cyan-200/80 uppercase">
          City Power Washing
        </p>

        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="loader-progress h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-400" />
        </div>
      </div>
    </div>
  );
}
