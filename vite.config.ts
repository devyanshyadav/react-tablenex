import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Adds export to index.d.ts
      include: ['src'],
      outDir: 'dist', // Ensure types go to dist
    }),
  ],
  build: {
    outDir: 'dist', // Explicitly set output directory
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'ReactTableNex', // Optional, only needed for UMD (can remove if not using UMD)
      formats: ['es', 'cjs'], // Match ESM (.mjs) and CommonJS (.cjs)
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`, // Match package.json
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Peer dependencies
      output: {
        // Handle CSS and other assets
        assetFileNames: '[name].[ext]', // Outputs styles.css as-is
      },
    },
    sourcemap: true, // Optional: for debugging
  },
});