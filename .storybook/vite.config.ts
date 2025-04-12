import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  define: {
    'process.env.STORYBOOK': JSON.stringify(true),
  },
}); 