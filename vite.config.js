import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/klippylyzer/",
  plugins: [
    react(),
    {
      name: ".nojekyll",
      generateBundle({ dir }, _, isWrite) {
        if (dir && isWrite) fs.writeFileSync(path.join(dir, ".nojekyll"), "");
      },
    },
  ],

  build: {
    outDir: "../gh-pages",
    emptyOutDir: true,
  },

  server: {
    port: 25365,
    strictPort: true,
    hmr: { clientPort: 443 },
  },
});
