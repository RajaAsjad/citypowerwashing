"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { NAV_LINKS, SITE } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`safe-top fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          solid
            ? "border-b border-cyan-400/20 bg-slate-950/88 py-2 shadow-lg shadow-cyan-950/40 backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent py-3 shadow-none sm:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5 lg:flex-none"
            onClick={() => setOpen(false)}
          >
            <div className={`relative shrink-0 transition-transform duration-500 ${solid ? "scale-90" : "scale-100"}`}>
              <Image
                src={IMAGES.logo}
                alt="City Power Washing logo"
                width={44}
                height={44}
                className="h-9 w-9 rounded-xl object-contain drop-shadow-lg sm:h-10 sm:w-10"
                priority
              />
            </div>
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-bold tracking-tight text-white drop-shadow-sm sm:text-base">
                City Power Washing
              </span>
              <span
                className={`hidden overflow-hidden text-xs text-cyan-200/90 transition-all duration-500 md:block ${
                  solid ? "max-h-0 opacity-0" : "max-h-6 opacity-100"
                }`}
              >
                Central Florida · Deltona Based
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className="nav-link relative rounded-lg px-3.5 py-2 text-sm font-medium text-white/90 transition hover:text-white"
                  >
                    {link.label}
                    <svg className="ml-1 inline h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/95 p-2 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
                      <div className="mb-1 border-b border-cyan-500/10 px-3 py-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">{link.label}</span>
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-cyan-500/15 hover:text-white"
                        >
                          <span className="h-1 w-1 rounded-full bg-cyan-400" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link relative rounded-lg px-3.5 py-2 text-sm font-medium text-white/90 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={SITE.phoneHref}
              className={`hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-500 hover:brightness-110 md:inline-flex ${
                solid ? "px-4 py-2" : "px-5 py-2.5"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:inline">{SITE.phone}</span>
              <span className="lg:hidden">Call</span>
            </a>
            <a
              href={SITE.phoneHref}
              className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm md:hidden"
              aria-label={`Call ${SITE.phone}`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              type="button"
              className={`touch-target inline-flex h-10 w-10 items-center justify-center rounded-xl border text-white transition-all duration-300 lg:hidden ${
                open ? "border-cyan-400 bg-cyan-500/20" : solid ? "border-cyan-400/30 bg-cyan-500/10" : "border-white/20 bg-white/10 backdrop-blur-sm"
              }`}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
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
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="safe-top safe-bottom flex h-full flex-col overflow-y-auto px-4 pb-28 pt-20"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-white/10">
              {"children" in link && link.children ? (
                <>
                  <button
                    type="button"
                    className="touch-target flex w-full items-center justify-between py-4 text-left text-base font-semibold text-white"
                    onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                  >
                    {link.label}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      {expanded === link.label ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded === link.label ? "max-h-[500px] pb-3" : "max-h-0"
                    }`}
                  >
                    <div className="space-y-1 rounded-xl bg-white/5 p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="touch-target block rounded-lg px-4 py-3 text-sm text-slate-300 active:bg-cyan-500/20"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="touch-target block py-4 text-base font-semibold text-white active:text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-6 space-y-3">
            <Link
              href="/free-quote"
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 py-4 text-base font-bold text-slate-950"
              onClick={() => setOpen(false)}
            >
              Get Free Quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/40 py-4 text-base font-semibold text-white"
            >
              Call {SITE.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
