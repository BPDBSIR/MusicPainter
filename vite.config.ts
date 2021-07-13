import {defineConfig} from 'vite'

const {resolve} = require('path')
import vue from '@vitejs/plugin-vue'
const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8123,
    base: "./",
    proxy: {

    }
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      'pages': pathResolve('./src/pages'),
      'components': pathResolve('./src/components'),
      'assets': pathResolve('./src/assets'),
      'utils': pathResolve('./src/utils'),
      'plugins': pathResolve('./src/plugins'),
      'api': pathResolve('./src/requests'),
      'hooks': pathResolve('./src/hooks'),
      'store': pathResolve('./src/store'),
      'configs': pathResolve('./src/configs')
    }
  }
})
