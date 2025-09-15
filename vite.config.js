import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"],
            heading: ["Poppins", "sans-serif"],
          },
          colors: {
            brand: {
              DEFAULT: "#3B82F6",
              dark: "#1E3A8A",
            },
          },
        },
      },
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});