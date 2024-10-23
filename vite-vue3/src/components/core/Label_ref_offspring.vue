<!-- 子组件使用defineExpose(不需import 直接使用)暴露数据给父组件 -->
<script lang="ts" setup>
import { ref } from 'vue'

let data = ref('example_data')
let number = ref(0)

defineExpose({
  data,
  number
})
</script>

<template></template>

<style></style>