import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-url";

// Necessário com output: "export" — gera /sitemap.xml estático no build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
