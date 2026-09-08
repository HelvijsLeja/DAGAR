import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Lapa tiek servēta no saknes, jo lietojam custom domain dagar.lv.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
