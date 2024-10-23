<!-- watchEffect实现监听  无需指明监听对象  监视定义函数的属性变化 -->
<script setup>
import { ref, watch, watchEffect } from 'vue'

let count1 = ref(0)
let count2 = ref(0)

let sumValue = ref(0)
let multiplyValue = ref(0)

function sum() {
    count1.value += 1
    sumValue.value = count1.value + count2.value
    return sumValue.value
}

function multiply() {
    count1.value += 2
    count2.value += 3
    multiplyValue.value = count1.value * count2.value
    return multiplyValue.value
}

//watch实现  需指明监听对象
watch([sumValue, multiplyValue], (value) => {
    const [sumValue, multiplyValue] = value //取出value中最新的两个值
    if ( sumValue >= 10 && multiplyValue >= 100) {
        console.log('满足if条件-watch')
    }
})

//watchEffect实现  无需指明监听对象
const stopWatch = watchEffect( () => {
    if( sumValue.value >= 10 || multiplyValue.value >= 100) {
        console.log('满足if条件-watchEffect')
        stopWatch() //执行函数  停止监听
    }
})
</script>

<template>
    <div>
        <p> {{ sumValue }} </p>
        <p> {{ multiplyValue }} </p>
        <button @click = "sum()">sum</button>
        <button @click = "multiply()">multiply</button>
    </div>
</template>

<style></style>