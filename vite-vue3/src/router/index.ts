import { createRouter, createWebHashHistory } from 'vue-router'

import test1 from "../views/test1.vue"
import test2 from "../views/test2.vue"
import test2_1 from "../views/test2_1.vue"

const router = createRouter({
    //选择工作模式为哈希模式
    history: createWebHashHistory(),
    //配置路由路径以及对应组件
    routes: [
        {
            path: '/test1',
            name: 'ceshi1',//命名路由 方便后续跳转以及to引用
            component: test1
        },
        {
            path: '/test2',
            name: 'ceshi2',
            component: test2,
            //子路由
            children: [
                {
                    path: 'test2_1',//若子路由路径不需加/
                    name: 'ceshi2_1',
                    component: test2_1,

                    //将路由参数作为props传递给子组件
                    //1.函数写法(推荐) 接收route参数 并返回对象 可用于query/params方法
                    props(route) {
                        return route.query
                    }

                    //2.布尔值写法(推荐) 仅用于params方法
                    // props: true

                    //3.对象写法(不推荐)
                    // props: { a: 1, b: 2 }
                }
            ]
        },
        {
            path: '/404',
            component: () => import('../views/404.vue')
        },
        //重定向 若访问根路径 则自动重定向到test1
        {
            path: '/',
            redirect: '/test1'
        }
    ]
})

//外部导出路由实例
export default router