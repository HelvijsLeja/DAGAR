import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages projektu lapa tiek servēta no apakšceļa /DAGAR/.
// Kad pieslēgsim domēnu dagar.lv (custom domain), nomainiet base uz "/".
export default defineConfig({
  base: "/DAGAR/",
  plugins: [react()],
});
