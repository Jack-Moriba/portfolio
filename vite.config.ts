import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          // Three.js core - chunk séparé pour le lazy loading optimal
          if (id.includes('node_modules/three/')) {
            return 'three-core';
          }
          // React Three Fiber/Drei dans un chunk distinct de three core
          if (
            id.includes('@react-three/fiber') ||
            id.includes('@react-three/drei') ||
            id.includes('@react-three/postprocessing') ||
            id.includes('@react-three/cannon') ||
            id.includes('@react-three/rapier')
          ) {
            return 'three-ecosystem';
          }
          // GSAP animations
          if (id.includes('node_modules/gsap') || id.includes('@gsap')) {
            return 'gsap-vendor';
          }
          // Scroll Trigger séparé pour chargement différé
          if (id.includes('ScrollTrigger')) {
            return 'gsap-scroll';
          }
          // React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // UI léger
          if (id.includes('react-icons') || id.includes('react-fast-marquee')) {
            return 'ui-vendor';
          }
          // Lenis scroll
          if (id.includes('node_modules/lenis')) {
            return 'lenis-vendor';
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
  },
  optimizeDeps: {
    include: ['gsap', 'three', 'lenis'],
  },
});
