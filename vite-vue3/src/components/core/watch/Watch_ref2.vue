<script setup>
import {ref,toRef,watch} from 'vue'

let example = ref({
    brand: 'xiaomi',
    bettery: '3000mAh',
    soc: '8G2',
    price: 1999
})

let brand = toRef(example,'brand')

function updateBrand() {
    example.value.brand = 'huawei'
}

function updatePrice() {
   example.value.price = 19999
}

function updateBettery() {
    example.value.bettery = '5000mAh'
}

function updateSoc() {
    example.value.soc = 'kirin990'
}

//监听对象为对象中的属性数据地址值  监视对象内部属性  需开启深度监视(deep:true)

//某个属性修改  newValue  oldValue均为新值
//整个对象修改  newValue为新值  oldValue为旧值
watch(example,(newValue,oldValue)=>{
    console.log('变化值:',newValue,'原始值:',oldValue)
},{deep:true,immediate:true})

watch(brand,()=>{
    console.log('品牌变化:',brand.value)
})
</script>

<template>
    <div>
        <p>{{ example.brand }} {{ example.bettery }} {{ example.soc }} {{ example.price }}</p>
        <button @click="updateBrand()">品牌</button>
        <button @click="updatePrice()">价格</button>
        <button @click="updateBettery()">电池</button>
        <button @click="updateSoc()">芯片</button>
    </div>
</template>

<style></style>