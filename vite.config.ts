import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { ViteImageOptimizer as imageOptimizer } from "vite-plugin-image-optimizer";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    imageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
    
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()], // Thêm Tailwind CSS và autoprefixer cho quá trình build
    },
  },
});
