// * src/app/manifest.ts || manifest.json Generator File
// ? Reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest

// Node Module Imports
import type { MetadataRoute } from "next";

// Export the manifest.json data.
export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#17273d",
    description:
      "Only the most inconsistent content on the internet. But now it has a central hub.",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "128x128",
        type: "image/x-icon",
      },
    ],
    name: "WildCharger.xyz",
    short_name: "WildCharger.xyz",
    start_url: "/",
  };
}
