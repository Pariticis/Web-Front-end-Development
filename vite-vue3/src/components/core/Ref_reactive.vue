<!-- ref：基本类型与对象类型的响应式数据  已用vue插件实现自动插入.value
  基本类型：
    1.导入ref函数
    2.把要响应的数据声明为响应式数据，即用 ref() 函数包裹
    3.访问响应式数据需用.value访问其值
  对象类型：
    1.包裹后访问对象属性需用.value.属性名 访问其值
    2.整体替换直接使用.value = 新对象 即可

reactive：只能用于定义对象类型的响应式数据
    1.导入reactive函数
    2.把要响应的对象声明为响应式对象，即用 reactive() 函数包裹
    3.访问响应式对象的属性需用.属性名访问其值
    4.整体替换对象时需用Object.assign()  原有数据会丢失

ref：适用于基本类型数据
reactive：适用于深层对象数据  -->
<script setup name="Ref-reactive">
import { ref, reactive } from 'vue'

const count = ref(0)

function sum() {
    count.value += 1
}


const object = reactive({
    name: 'Reactive',
    age: 18
})
function changeName() {
    object.name = 'Ref-reactive'
}
function showName() {
    alert(object.age)
}
//reactive响应式对象整体替换  原先数据会丢失
function changeObject() {
    Object.assign(object,{name: 'Ref-reactive', age: 20})
}
</script>

<!-- 子组件：Ref-reactive.vue -->
<template>
<div>
    <p>Count: {{ count }}</p>
    <button @click="sum()">Add</button>

    <p>Name: {{ object.name }}</p>
    <button @click="changeName()">Change</button>
    <button @click="showName()">Show</button>
    <button @click="changeObject()">Change Object</button>
</div>
</template>

<style></style>