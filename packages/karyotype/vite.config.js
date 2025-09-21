import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const external = ['react']
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.jsx',
      formats: ['es'],
    },
    manifest: true,
    outDir: resolve(__dirname, "../src/karyotype"),
    emptyOutDir: true,
    rollupOptions: { external }
  },
  server: {
    proxy: {
      '/graphql': 'http://127.0.0.1:8000',
      '/api': 'http://127.0.0.1:8000',
    },
  },
  plugins: [react()],
})

