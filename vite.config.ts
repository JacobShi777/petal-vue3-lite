import { type ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    server: {
      // 设置服务器主机名为当前机器的网络地址，允许外部访问
      host: true,
      // 指定开发服务器监听的端口号
      port: 7102,
      // 服务器启动后自动在浏览器中打开应用
      open: true,
    },
    plugins: [vue()],
  }
})
