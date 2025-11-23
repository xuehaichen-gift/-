import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 简单的配置文件，确保网站在中国网络环境下能正常运行
export default defineConfig({
  plugins: [react()],
  define: {
    // 移除对国外环境变量的依赖
    'process.env': {}
  },
  server: {
    host: '0.0.0.0',  // 让手机也能访问
    port: 3000,       // 使用3000端口
    open: true        // 自动打开浏览器
  }
})