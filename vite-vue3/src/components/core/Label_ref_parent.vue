<!-- 父组件接收子组件的ref数据并调用子组件的方法 -->
<script lang="ts" setup>
import { ref } from 'vue'
import Label_ref_offspring from './Label_ref_offspring.vue'

// 接收子组件的ref数据
let carrier = ref()

function test() {
    console.log(carrier.value.data)
    console.log(carrier.value.number)
}

</script>

<template>
    <div>
        <Label_ref_offspring ref = "carrier" />
        <button @click="test()">Test</button>
    </div>

</template>

<style></style>