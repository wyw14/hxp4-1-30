import { defineConfig } from 'vite';

export default defineConfig({
  root: 'client',
  server: {
    port: 41030,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:42030',
        changeOrigin: true
      }
    }
  }
});
