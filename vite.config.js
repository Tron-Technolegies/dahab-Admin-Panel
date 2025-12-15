import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import fs from "fs";
import path from "path";

export default defineConfig({
  build: {
    cssCodeSplit: false, // ✅ Combine all CSS into one file
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          preloadCss: (() => {
            const cssDir = path.resolve(__dirname, "dist/assets");
            if (!fs.existsSync(cssDir)) return "";
            const files = fs.readdirSync(cssDir);
            const cssFile = files.find((f) => f.endsWith(".css"));
            if (!cssFile) return "";
            return `<link rel="preload" href="/assets/${cssFile}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/assets/${cssFile}"></noscript>`;
          })(),
        },
      },
    }),
  ],
});
