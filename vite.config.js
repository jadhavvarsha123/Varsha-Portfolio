import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",      // minifies JS
    cssMinify: true,        // minifies CSS
    cssCodeSplit: true,     // each lazy page gets its own CSS if it has any
    rollupOptions: {
      output: {
        manualChunks: { vendor: ["react", "react-dom", "react-router-dom"] },
      },
    },
  },
});
