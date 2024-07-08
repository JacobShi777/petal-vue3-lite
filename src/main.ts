// 导入Vue的createApp函数
import { createApp } from 'vue'
// 导入根组件App
import App from './App.vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/locales'

// 使用createApp创建Vue应用实例，并传入根组件App
const app = createApp(App)
// 全局注册SvgIcon组件
app.component('SvgIcon', SvgIcon)
// 将router实例挂载到Vue应用实例上
app.use(router)
// 将store实例挂载到Vue应用实例上
app.use(store)
// 将i18n实例挂载到Vue应用实例上
app.use(i18n)
// 将Vue应用实例挂载到id为'app'的DOM元素上
app.mount('#app')
