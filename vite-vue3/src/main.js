//vue入口文件的js部分

import { createApp } from 'vue'

import './style.css'
import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'

const pinia = createPinia()// 创建一个pinia实例
const app = createApp(App)// 创建一个app实例  根组件为APP.vue


// app实例总在最后创建
// app.use(router)// 挂载路由到app实例上

app.use(pinia)// 挂载pinia到app实例上
app.mount('#app')// 挂载到id为app的元素上(index.html中的div)
