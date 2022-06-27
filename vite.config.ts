import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  plugins: [react()],

  build: {
    outDir: "gh-pages",
    emptyOutDir: true,
  },

  server: {
    port: 25365,
    strictPort: true,
    hmr: { clientPort: 443 },
  },
});
