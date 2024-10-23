<!-- 1.指向普通DOM标签  获取ref所标记的内容  类似于id属性 -->
<!-- 2.指向组件实例 -->
<script setup lang="ts">
import { ref } from 'vue'

let refTitle1 = ref()
let refTitle2 = ref()
let refTitle3 = ref()

function showTitle() {
    //通过ref获取元素  打印内容
    console.log(refTitle1.value)
    console.log(refTitle2.value)
    console.log(refTitle3.value)
}
</script>
<template>
    <div>
        <p ref="refTitle1">测试1</p> <br>
        <p ref="refTitle2">测试2</p> <br>
        <p ref="refTitle3">测试3</p> <br>
        <br>
        <hr>
        <button @click="showTitle()">打印控制台</button>
    </div>
</template>
<style></style>