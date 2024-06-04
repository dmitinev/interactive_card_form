import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
    },
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         // @ts-expect-error 'string has includes method'
  //         if (id.includes('react-select')) {
  //           return '@react-select';
  //         }
  //         // @ts-expect-error 'string has includes method'
  //         if (id.includes('react-datepicker')) {
  //           return '@react-datepicker';
  //         }
  //         if (
  //           // @ts-expect-error 'string has includes method'
  //           id.includes('react-router-dom') ||
  //           // @ts-expect-error 'string has includes method'
  //           id.includes('@remix-run') ||
  //           // @ts-expect-error 'string has includes method'
  //           id.includes('react-router')
  //         ) {
  //           return '@react-router';
  //         }
  //       },
  //     },
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/_params.scss";',
      },
    },
  },
  base: '/interactive_card_form/',
});
