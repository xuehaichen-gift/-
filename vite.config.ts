import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 适用于 Netlify 和 GitHub Pages 的配置
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  // 这一行很重要：设置基础路径，对于 GitHub Pages 尤其关键
  base: './',
  build: {
    outDir: 'dist'
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
