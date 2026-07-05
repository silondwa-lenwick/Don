import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Chipego AI is built to run on low-cost devices and unreliable connections,
// so the whole app is precached for full offline use after the first visit.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        navigateFallback: "index.html",
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
        start_url: "/",
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
