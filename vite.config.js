import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        services: "services.html",
        gallery: "gallery.html",
        contacts: "contacts.html",
      },
    },
  },
});
