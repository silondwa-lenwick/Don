import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Chipego AI is built to run on low-cost devices and unreliable connections,
// so the whole app is precached for full offline use after the first visit.
//
// `base` is configurable via BASE_PATH so the same build works both at a domain
// root (BASE_PATH="/") and under a GitHub Pages project subpath
// (e.g. BASE_PATH="/Don/"). The CI workflow sets it automatically.
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        navigateFallback: `${base}index.html`,
      },
      manifest: {
        name: "Chipego AI — AI skills for every young Zambian",
        short_name: "Chipego AI",
        description:
          "Learn AI and practical digital skills offline, in your language. Built for and with young people in Zambia.",
        theme_color: "#0b7a5b",
        background_color: "#0e1116",
        display: "standalone",
        orientation: "portrait",
        id: base,
        start_url: base,
        scope: base,
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icon-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
