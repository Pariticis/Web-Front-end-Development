<!-- 将reactive响应式对象中的属性  转为响应式对象
toRefs()同时转换多个属性
toRef()仅转化单个属性 -->
<script setup> 
import {toRefs, toRef, reactive} from 'vue'

let example = reactive({
    obj1: 123,
    obj2: 'a',
    obj3: [0,1,2,3],
    obj4: {a:1,b:2,c:3}
})

//取出对象中的子属性  转为响应式对象
//即obj1,...转为响应式对象  而不是example.obj1,...(本身就是响应式对象)
let {obj1,obj2} = toRefs(example)
let obj3 = toRef(example,'obj3')

//子属性响应式对象  同步更新example.obj1,example.obj2
//ref对象需要使用.value进行操作
function changeObj() {
    obj1.value = 789
    obj2.value = 'b'
}
console.log(obj1,obj2)
console.log(example.obj1,example.obj2)

function changeObj2() {
    //obj3为子属性响应式对象  obj3.value为数组值
    //增加数组的值  随机生成0或1
    obj3.value.push(Math.round(Math.random()))

    //obj4不是子属性响应式对象  调用父响应式对象引用
    example.obj4.a += 2
}

</script>

<template>
    <div>
        <p>{{ obj1 }}{{ obj2 }}{{ obj3 }}{{ example.obj4 }}</p>

        <button @click=changeObj()>测试</button>
        <button @click=changeObj2()>测试2</button>
    </div>
</template>

<style></style>