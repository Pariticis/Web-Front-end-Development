<script setup>
import Test from './components/Test.vue'
import Refreactive from './components/core/Ref-reactive.vue'
import Torefs from './components/core/Torefs.vue'
import Computed from './components/core/Computed.vue'
import Watch_ref1 from './components/core/watch/Watch_ref1.vue'
import Watch_ref2 from './components/core/watch/Watch_ref2.vue'
</script>

<!-- vue根组件 所有子组件的父组件 -->
<template>
  <div>
  <Watch_ref2 />
  </div>
</template>

<style scoped>

</style>
