import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { fileURLToPath, URL } from 'node:url'

// 自动引入
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/bizhi': {
        target: 'https://tea.qingnian8.com/api',
        changeOrigin: true
      }
    }
  },
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api', 'color-functions', 'import']
      }
    }
  }
})
