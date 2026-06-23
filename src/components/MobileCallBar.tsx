"use client";

import Link from "next/link";
import { SITE } from "@/lib/site-data";

export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-cyan-400/30 bg-slate-950/95 p-3 backdrop-blur-xl safe-bottom lg:hidden"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 py-3.5 text-sm font-bold text-white active:scale-[0.98]"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/free-quote"
          className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg active:scale-[0.98]"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
