// 导入Vue的createApp函数
import { createApp } from 'vue'
// 导入根组件App
import App from './App.vue'

// 使用createApp创建Vue应用实例，并传入根组件App
const app = createApp(App)
// 将Vue应用实例挂载到id为'app'的DOM元素上
app.mount('#app')
