import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['prop-types', 'react', 'react-dom'],
    },
    sourcemap: true,
  },
  plugins: [react()],
});
