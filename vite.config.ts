import { type ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
    plugins: [
      vue(),
      createSvgIconsPlugin({
        /** 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下 */
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
