import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/klippylyzer/",

  plugins: [
    react(),
  ],

  build: {
    outDir: "../gh-pages",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./src/index.html", import.meta.url)),
        404: fileURLToPath(new URL("./src/404.html", import.meta.url)),
      },
    },
  },

  server: {
    port: 25365,
    strictPort: true,
    hmr: { clientPort: 443 },
  },
});
