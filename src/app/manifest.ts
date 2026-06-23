import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "City Power Washing",
    short_name: "City Power",
    description: "Central Florida pressure washing and soft washing",
    start_url: "/",
    display: "standalone",
    background_color: "#082f49",
    theme_color: "#082f49",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
