import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mix, { vercelAdapter } from "vite-plugin-mix";

export default defineConfig({
  plugins: [
    react(),
    mix({
      handler: "./api.js",
    }),
  ],
});
