<!-- 计算新数据并修改旧数据  同时具有缓存功能  可避免重复计算 -->
<script setup>
import {ref, computed} from 'vue'

let num1 = ref(1)
let num2 = ref(2)

let result = computed({
  //读取
  get(){
    return num1.value + num2.value
  },
  //修改
  //val即读取返回的值
  set(val){
    console.log('已修改')
    num1.value = val
  }
})

function add() {
  result.value = num1.value + num2.value
  console.log(result.value)
}
</script>

<template>
  <div>
    <input type="number" v-model="num1"><br>
    <input type="number" v-model="num2"><br>
    <span>result: {{ result }}</span>
    <button @click="add()">计算</button>
  </div>
</template>

<style></style>