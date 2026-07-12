// * src/app/robots.ts || robots.txt Generator File
// ? Reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

// Node Module Imports
import type { MetadataRoute } from "next";

// Export the robots.txt data.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://wildcharger.xyz/sitemap.xml",
  };
}
