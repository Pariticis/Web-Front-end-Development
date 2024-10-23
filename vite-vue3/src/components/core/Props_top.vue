<!-- props：用于组件之间传递数据 -->
<!-- 父组件 1.定义对象并写入数据 2.将对象传递给子组件 -->
<script setup lang = "ts">
import { type PropsSet } from '../../types'
import Props_bottom from './Props_bottom.vue'
import { reactive } from 'vue'

//定义一个响应式对象 类型限制为PropsSet 用于检测属性是否正确
let propset = reactive<PropsSet>([
    {name: 'propset1', num: 1, data: [1, 2, 3]},
    {name: 'propset2', num: 2, data: [4, 5, 6]},
])
</script>

<template>
    <div>
        <!-- : 读取list所指向的表达式-->
        <Props_bottom :list = "propset" />
    </div>
</template>

<style></style>