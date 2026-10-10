import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Garaad Systems",
    short_name: "Garaad",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1628",
    theme_color: "#0A1628",
    icons: [
      { src: "/logo/icon/garaad-icon-navy-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo/icon/garaad-icon-navy-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
