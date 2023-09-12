import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/custom-dist',
  build: {
    outDir: 'custom-dist', // Specify your desired output directory here
  },
  plugins: [
    react(),
    tsconfigPaths(),
    manualChunksPlugin(),
    splitVendorChunkPlugin(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: {
      components: '/dist/components',
      helpers: '/dist/helpers',
      hooks: '/dist/hooks',
      pages: '/dist/pages',
      images: '/dist/images',
      icons: '/dist/images/icons',
      services: '/dist/services',
    },
  },
  server: {
    port: 3030,
  },
});
