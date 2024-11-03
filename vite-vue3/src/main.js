//vue入口文件的js部分

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)// 创建一个app实例  根组件为APP.vue

app.mount('#app')// 挂载到id为app的元素上(index.html中的div)
//app.use(router)// 挂载路由到app实例上