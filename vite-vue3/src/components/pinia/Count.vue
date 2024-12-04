<script lang = "ts" setup>
import { ref } from 'vue'
// import { useCountStore, useTotalStore } from '../../store/count_optional'
import { useCountStore, useTotalStore } from '../../store/count_combined'
import { storeToRefs } from 'pinia'

const countStore = useCountStore()
const totalStore = useTotalStore()

// 解构countStore中的count变量为响应式
// 将Pinia存储的状态转为响应式
const { count } = storeToRefs(countStore)

const { totalList } = storeToRefs(totalStore)

let x = ref(0)
let y = ref(0)

function add() {
    countStore.count += x.value
    y.value = x.value + 1
    console.log(count.value)
}
function minus() {
    countStore.count -= x.value
    y.value = x.value - 1
}
function total() {
    // 触发totalStore的action
    totalStore.increment(x.value)
    console.log(totalStore.total)
}

function reset() {
    // store批量修改数据方式(此处仅一个对象修改)
    totalStore.$patch({
        total: 0,
    }),
    y.value = 0
}

// 监听countStore的变化
countStore.$subscribe((state) => {
        console.log('countStore changed', state)
})

</script>

<template>
    <div>
        <h1>count: {{ countStore.count }}</h1>
        <h1>total: {{ totalStore.total }}</h1>
        <h2>totalList: {{ totalList }}</h2>
        <select v-model.number = "x">
            <option value = "0">0</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
        </select>
        <br><br>
        <button v-on:click = "add()">+++</button>
        <button v-on:click = "minus()">---</button>
        <button v-on:click = "total()">total</button>
        <br><hr>
        <button v-on:click = "reset()">reset</button>
    </div>
</template>

<style scoped></style>