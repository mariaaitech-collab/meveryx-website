import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meveryx",
    short_name: "Meveryx",

    description:
      "Professional Web Development, Mobile Apps, AI Solutions & Digital Marketing.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}