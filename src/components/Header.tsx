"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/20">
            CP
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-white sm:text-base">
              City Power Washing
            </span>
            <span className="hidden text-xs text-cyan-200/80 sm:block">Central Florida · Deltona Based</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 rounded-xl border border-white/10 bg-slate-900/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-cyan-500/10 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110 sm:inline-flex"
          >
            {SITE.phone}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-white/5 py-1 last:border-0">
              {"children" in link && link.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-white"
                    onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                  >
                    {link.label}
                    <span className="text-cyan-400">{expanded === link.label ? "−" : "+"}</span>
                  </button>
                  {expanded === link.label && (
                    <div className="pb-2 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-slate-300"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 py-3 text-sm font-semibold text-white"
          >
            Call {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
