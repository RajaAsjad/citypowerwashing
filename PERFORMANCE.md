# City Power Washing — Performance Report

**Date:** June 24, 2026  
**Stack:** Next.js 16 (App Router) + Tailwind CSS 4  
**Target:** Mobile-first, sub-2s load on 4G, Core Web Vitals in green

## Architecture Optimizations

| Technique | Implementation |
|-----------|----------------|
| Static generation | All 19 pages pre-rendered at build time via `generateStaticParams` |
| Font loading | Google Outfit with `display: swap` |
| JavaScript | Minimal client JS — canvas hero only on pages using `WaterCanvas` |
| CSS | Tailwind v4 with purged utility classes |
| Images | CSS gradient placeholders (no heavy image payloads) |
| SEO | JSON-LD LocalBusiness, Service, FAQ, Breadcrumb schemas per page |
| Caching | Vercel Edge CDN with immutable static assets |

## Expected Core Web Vitals (Production on Vercel)

| Metric | Target | Expected |
|--------|--------|----------|
| LCP | < 2.5s | ~1.2–1.8s |
| INP | < 200ms | ~50–100ms |
| CLS | < 0.1 | ~0.01–0.05 |
| FCP | < 1.8s | ~0.8–1.2s |
| TTFB | < 800ms | ~100–300ms (Edge) |

## Page Inventory (19 Pages)

1. `/` — Home  
2. `/soft-house-washing`  
3. `/soft-wash-roof-cleaning`  
4. `/driveway-pressure-washing`  
5. `/concrete-sidewalk-cleaning`  
6. `/pool-deck-cleaning`  
7. `/fence-washing`  
8. `/gutter-cleaning`  
9. `/rust-removal`  
10. `/commercial-pressure-washing`  
11. `/grease-oil-removal`  
12. `/pressure-washing-deltona`  
13. `/pressure-washing-debary`  
14. `/pressure-washing-deland`  
15. `/pressure-washing-orange-city`  
16. `/pressure-washing-lake-mary`  
17. `/pressure-washing-sanford`  
18. `/about`  
19. `/free-quote`  

## How to Re-Test After Deploy

```bash
# Lighthouse CLI (mobile)
npx lighthouse https://YOUR-VERCEL-URL.vercel.app --only-categories=performance,seo --form-factor=mobile --output=html --output-path=./lighthouse-report.html

# PageSpeed Insights
# https://pagespeed.web.dev/
```

## Post-Launch Recommendations

- Replace gradient placeholders with WebP photos (max 1200px wide, 80% quality)
- Connect Google Business Profile reviews API for live testimonial feed
- Add real phone number and Google Analytics 4
- Submit sitemap to Google Search Console
