<!-- setup推荐写法 -->
<!-- name属性命名组件  便于引用  需安装插件  -->
<script lang="ts" setup name="Person1234">
import {ref} from 'vue'
import { reactive } from 'vue'

//数据(data)
let name = ref('aaa')
let age = ref(18)
let num = 100

let car = reactive({car: 'BMW', price: 10000})
let car2 = ref({car: 'Tesla', price: 20000})

//方法(methods)
function changeName() {
    name.value = 'bbb'
}
function changeAge() {
    age.value += 1
}
function showNum() {
    alert(num)
}

function changeCar() {
    car.car = 'Audi'
    car.price += 20000

    car2.value.car = 'BYD'
    car2.value.price += 30000
}
</script>

<!-- 子组件:Person.vue -->
<template>
    <div class="person">
        <h1>{{ name }} {{ age }} {{ num }}</h1>
        <h2>{{ car.car }} {{ car.price }}</h2>
        <h3>{{ car2.car }} {{ car2.price }}</h3>
        <!-- @:v-on 监听DOM事件 -->
        <button @click="changeName()">改名</button>
        <button @click="changeAge()">加1岁</button>
        <button @click="showNum()">显示num</button>

        <button @click="changeCar()">修改价格</button>
    </div>
</template>

<!-- scoped局部样式  用于当前组件 -->
<style scoped>
</style>