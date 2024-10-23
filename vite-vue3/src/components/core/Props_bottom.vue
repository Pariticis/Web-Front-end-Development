<!-- 子组件 1.定义props变量接收父组件传递的数据 2.template写入canvas元素 -->
<script lang="ts" setup>
import { defineProps } from 'vue'
import { PropsSet } from '../../types' //自定义的类型 源于自定义的PropEntrance

// 1.接收
// const props = defineProps(['list'])

// 2.接收 限制类型
// defineProps<{ list: props}>

// 3.接收 限制类型 指定默认值 限制必要性
let props = withDefaults(defineProps<{ list ?: PropsSet}> (), {
    list: () => [{name: "默认项目", num: 0, data: [0, 0, 0]}]
})
console.log(props)
</script>

<template>
    <div>
        <ul>
            <!-- v-for 循环语句 遍历props -->
            <!-- :key 给每一项添加唯一标识 -->
            <li v-for = "item in list" :key = "item.num">
                {{ item.name }} {{ item.num }} {{ item.data }}
            </li>
        </ul>
    </div>
</template>

<style></style>