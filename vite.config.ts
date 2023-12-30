import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      // 入口文件
      entry: 'electron/index.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
