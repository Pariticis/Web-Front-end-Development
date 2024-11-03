<script lang="ts" setup>
// import Test from './components/Test.vue'
// import Refreactive from './components/core/Ref_reactive.vue'
// import Torefs from './components/core/Torefs.vue'
// import Computed from './components/core/Computed.vue'
// import Watch_ref1 from './components/core/watch/Watch_ref1.vue'
// import Watch_ref2 from './components/core/watch/Watch_ref2.vue'
// import Watch_ref3 from './components/core/watch/Watch_ref3.vue'
// import Watch_ref4 from './components/core/watch/Watch_ref4.vue'
// import Watch_effect from './components/core/Watch_effect.vue'
// import Label_ref from './components/core/label_ref.vue'
// import Label_ref_parent from './components/core/Label_ref_parent.vue'
// import Props_top from './components/core/Props_top.vue'
// import Life_cycle from './components/Life_cycle.vue'
// import Hook from './components/core/Hook.vue'

import { RouterLink,RouterView } from 'vue-router'

</script>

<!-- vue根组件 所有子组件的父组件 -->
<template>
  <!-- 路由测试 -->
  <!-- <div>
    <p>APP.vue作为路由启动组件</p>
    <h1>replace: 替换当前路由 不保留历史记录</h1>
    <div class="navigate">
      <RouterLink replace :to="{name: 'ceshi1'}" class="button">测试界面1</RouterLink>
      <RouterLink :to="{path: '/test2'}" class="button">测试界面2</RouterLink>
      <RouterLink :to="{path: '/test2/test2_1'}" class="button">测试界面2_1</RouterLink>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div> -->
</template>

<style scoped>
p {
  position: fixed top;
  border:5px solid;
  text-align: center;
  font-size: 40px;
  background-color: gray;
}
.button {
  margin:5px;
  border:2px solid;
}
</style>
