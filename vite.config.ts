import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? "https://eightzees.github.io/portfolio/"
    : "./",
  plugins: [react()],
});
