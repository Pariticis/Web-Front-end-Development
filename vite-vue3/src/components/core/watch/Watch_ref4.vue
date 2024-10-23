<!-- 监听ref对象类型、reactive对象数据中的属性变化  写为函数形式  开启深度监视 -->
<!-- 监听reactive对象中多个属性  仅限同级的子属性  写为函数形式  开启深度监视 -->
<script setup>
  import { reactive, watch } from 'vue'

  let example = reactive({
    obj1: 1,
    obj2: 'aaaaa',
    obj3: {
        x: 0,
        y: 0,
    },
    obj4: [0, 0, 0]
  })

  function obj1() {
    example.obj1 *= 2
    console.log('obj1', example.obj1)
  }

  function obj2() {
    example.obj2 += 'bbbbb'
    console.log('obj2', example.obj2)
  }

  function obj3_obj4() {
    example.obj3.x += 1
    example.obj3.y -= 1
    example.obj4[0] += 1
  }
  
  //监听响应式对象中的属性  基本类型  写为函数形式
  //属性为对象类型  需开启深度监视
  watch( () => example.obj1, (newValue, oldValue) => {
    console.log('obj1 变化值', newValue,'原始值', oldValue)
  })

  //监听同一reactve对象中的多个属性  仅限属性分级  属性内部不可同时监听  写为函数形式  开启深度监视
  watch([ () => example.obj3.x,example.obj4 ], (newValue, oldValue) => {
    console.log('obj3.x obj4 变化值', newValue,'原始值', oldValue)
  }, { deep: true })
</script>

<template>
  <div>
    <p>{{ example.obj1 }} {{ example.obj2 }} <br> {{ example.obj3.x }} {{ example.obj3.y }} <br> {{ example.obj4 }}</p>
    <button @click="obj1()">obj1</button>
    <button @click="obj2()">obj2</button>
    <button @click="obj3_obj4()">obj3_obj4</button>
  </div>
</template>

<style></style>