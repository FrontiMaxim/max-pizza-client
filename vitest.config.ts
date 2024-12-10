import { defineConfig } from "vitest/config";
import tailwindcss from "tailwindcss";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
