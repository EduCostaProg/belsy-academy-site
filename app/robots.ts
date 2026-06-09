import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-url";

// Necessário com output: "export" — gera /robots.txt estático no build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
