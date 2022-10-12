// import third-party modules
import vitePluginForArco from '@arco-plugins/vite-react';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { qrcode } from 'vite-plugin-qrcode';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qrcode(),
    react(),
    vitePluginForArco({
      style: 'css',
      theme: '@arco-themes/react-arco-pro',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    host: '0.0.0.0',
  },
});
