import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStartVite } from "@tanstack/start-plugin-vite";

export default defineConfig({
  plugins: [
    react(),
    tanstackStartVite()
  ],
  // Forza la build statica standard se rileva l'ambiente Vercel
  nitro: process.env.VERCEL ? { preset: "vercel" } : true
});
