import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';



// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // Limita el tamaño de los archivos que se inlinean en el código
    assetsInlineLimit: 4096, // Archivos menores a 4KB se inlinean
    // Límite de tamaño de chunk para lanzar advertencias
    chunkSizeWarningLimit: 500, // Advertencias si un chunk excede los 500KB
    rollupOptions: {
      // Configuración de Rollup (si es necesario)
    },
    // Hook que se ejecuta después de construir
    outDir: 'dist',
  },
  plugins: [react(),
    // Compresión Gzip
    viteCompression({
      algorithm: 'gzip', // Algoritmo de compresión
      threshold: 10240, // Archivos mayores a 10KB serán comprimidos
      ext: '.gz', // Extensión para archivos comprimidos
    }),
    // Compresión Brotli
    viteCompression({
      algorithm: 'brotliCompress', // Algoritmo Brotli para mayor compresión
      ext: '.br', // Extensión para archivos Brotli
    }),
    // Análisis de bundle
    visualizer({
      open: false, // Abre el reporte automáticamente tras el build
      gzipSize: true, // Incluye el tamaño de los archivos Gzip en el reporte
      brotliSize: true, // Incluye el tamaño de los archivos Brotli en el reporte
    }),
  ],
})
