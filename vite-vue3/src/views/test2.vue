<script lang="ts" setup>
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { reactive, onMounted } from 'vue'

// 创建传递给子路由的参数对象
const testList = reactive([
    { id: 1, title: '测试1', content: '测试内容1' },
    { id: 2, title: '测试2', content: '测试内容2' },
    { id: 3, title: '测试3', content: '测试内容3' },
])

// 限定形参类型
interface testSubject {
    id: number,
    title: string,
    content: string
}
console.log(testList)
// 调出路由器
let router = useRouter()

function showContent(test: testSubject) {
    // push：跳转时 保留历史记录方式
    // 用法同to
    router.push({
        path: '/test2/test2_1',
        query: {
            id: test.id,
            title: test.title,
            content: test.content

        }
    })
}
</script>

<template>
    <div>
        <p>测试2路由</p>
        <ul>
            <li v-for="test in testList" :key="test.id">
                <!-- <button v-on:click="showContent(test)">显示内容</button> -->
                <RouterLink :to="{
                    //传递参数至子路由 子路由需使用useRoute hooks接收参数

                    //1.query传参
                    //name也可跳转
                    path: '/test2/test2_1',
                    query: {
                        id: test.id,
                        title: test.title,
                        content: test.content

                    }
                    /*
                    2.params传参
                    //只能使用name
                    name: 'ceshi2_1',
                    params: {
                        id: test.id,
                        title: test.title,
                        content: test.content
                    }
                    */
                }">
                    跳转子路由{{ test.id }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="children">
        <RouterView />
    </div>
</template>

<style scoped></style>