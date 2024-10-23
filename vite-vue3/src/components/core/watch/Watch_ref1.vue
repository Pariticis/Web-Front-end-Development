<!-- 监视ref基本类型数据的value值的变化 -->
<script setup lang="ts">
import {ref,watch} from 'vue'

let count = ref(0)

function sum(){
    count.value += 1
}

//watch(监听对象，回调函数)
const watchListener = watch(count,(newValue,oldValue)=>{
    console.log('新值:',newValue,'原值:',oldValue)
    //取消监听
    if(newValue >= 5) {
      watchListener()
    }
})

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="sum()">叠加</button>
  </div>
</template>

<style scoped></style>