import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Lapa tiek servēta no saknes, jo lietojam custom domain dagar.lv.
export default defineConfig({
  base: "/",
  plugins: [react()],
  // vite-react-ssg: katrs maršruts kā "flat" HTML fails (piem. privatuma-politika.html),
  // lai GitHub Pages to servē adresē /privatuma-politika ar statusu 200 (bez pāradresācijas).
  ssgOptions: {
    dirStyle: "flat",
  },
});
