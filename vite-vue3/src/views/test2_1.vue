<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { toRefs, defineProps } from 'vue'

// const route = useRoute()
// let { query } = toRefs(route)

// props传参方式 接收其他组件传递过来的参数
defineProps([
    'id',
    'title',
    'content'
])
</script>

<template>
    <div>
        <p>测试2的子路由</p>
        <!-- 普通传参方式 -->
        <!-- <p>id:{{ query.id }}<br>title:{{ query.title }}<br>content:{{ query.content }}</p> -->

        <!-- props传参方式 -->
        <p>id:{{ id }}<br>title:{{ title }}<br>content:{{ content }}</p>
    </div>
</template>

<style scoped></style>