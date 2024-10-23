<!-- 监听reactive对象数据变化  默认开启深度监视 -->
<script setup>
  import { reactive ,toRef, toRefs, watch} from 'vue'

  let example = reactive({
    name: "123",
    age: 10,
    count: 0
  })

  let deepExample = reactive({
    array: [1, 2, 3],
    obj1: {
        obj2: {
            obj3: {
                v: 1
            }
        }
    }
  })

  //提取example属性转为响应式对象  ref类型
  let refExample = toRefs(example)

  function nameChange() {
    refExample.name.value = "000"
  }

  function ageChange() {
    refExample.age.value = 100
  }

  function countChange() {
    refExample.count.value += 1
  }

  //整体替换  非响应式  不建议使用
  function allChange() {
    example = {name: "example", age: 0, count: 0}
    console.log(example)
  }
  
  //整体替换  响应式
  function allChangeobject() {
    Object.assign(example, {name: "object", age: 0, count: 0})
    console.log(example)
  }

  watch(example, (newValue, oldValue) =>{
    console.log('example变化值', newValue,'原始值', oldValue)
  },{immediate:true})

  let array = toRef(deepExample, 'array')
  let deepObj = toRef(deepExample.obj1.obj2.obj3, 'v')

  function arrayChange() {
    array.value = [0, 0, 0]
  }

  function deepObjchange() {
    deepObj.value = 0
  }

  watch(deepObj, (newValue, oldValue) => {
    console.log('deepObj变化值', newValue,'原始值', oldValue)
  },{immediate:true})

  watch(deepExample, (newValue, oldValue) => {
    console.log('deepExample变化值', newValue,'原始值', oldValue)
  },{immediate:true})

</script>

<template>
    <div>
        <p1>{{ refExample.name }} <br> {{ refExample.age }} <br>{{ refExample.count }} <br> </p1>
        <button @click = "nameChange()">name</button>
        <button @click = "ageChange()">age</button>
        <button @click = "countChange()">count</button>
        <hr>
        <button @click = "allChange()">allChange</button>
        <button @click = "allChangeobject()">allChangeobject</button>
        <hr>
        <p2>{{ array }} <br> {{ deepObj }} <br> </p2>
        <button @click = "arrayChange()">array</button>
        <button @click = "deepObjchange()">deepObj</button>
    </div>
</template>

<style></style>