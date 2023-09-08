import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths(),manualChunksPlugin(),svgr({ 
    svgrOptions: {
      // svgr options
    },
  }),],
  server: {
    port: 3030,
  },
});
