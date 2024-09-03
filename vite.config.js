import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist", // Output directory outside of 'src'
  },
  base: './', // Set base to relative path
});
