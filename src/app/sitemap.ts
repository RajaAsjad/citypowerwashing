import { CITY_PAGES, SITE } from "@/lib/site-data";
import { PAGE_CONTENT } from "@/lib/page-content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/free-quote"];
  const dynamicPages = [
    ...Object.keys(PAGE_CONTENT),
    ...CITY_PAGES.map((c) => c.slug),
  ].map((slug) => `/${slug}`);

  return [...staticPages, ...dynamicPages].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("pressure-washing-") ? 0.8 : 0.9,
  }));
}
