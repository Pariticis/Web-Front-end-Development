<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import { ref } from 'vue'

let count = ref(0)
let show = ref(true)

function countChange() {
    count.value++
}

onBeforeMount(() => {
    console.log('挂载前')
})
onMounted(() => {
    console.log('挂载后')
})
onBeforeUpdate(() => {
    console.log('更新前')
})
onUpdated(() => {
    console.log('更新后')
})
//模拟卸载组件 此处卸载按钮元素
function unstall() {
    show.value = false
}
//需在引用组件的位置增加v-if 并设置true或false
onBeforeUnmount(() => {
    console.log('卸载前')
})
onUnmounted(() => {
    console.log('卸载后')
})
</script>

<template>
    <div>
        <p>生命周期钩子</p>
        <h1>{{ count }}</h1><br><br>
        <button v-on:click="countChange">count++</button><br><br>
        <button v-on:click="unstall" v-if = "show">点击卸载此按钮</button>
    </div>
</template>

<style></style>