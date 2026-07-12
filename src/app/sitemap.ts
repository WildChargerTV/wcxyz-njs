// * src/app/sitemap.ts || sitemap.xml Generator File
// ? Reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

// Node Module Imports
import type { MetadataRoute } from "next";

// Export the robots.txt data.
// TODO add other sitemap urls when deploy is done and urls are ascertained
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wildcharger.xyz",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
