<!-- 将同一功能的数据和方法进行封装 即模块化 组合式API -->
<script lang="ts" setup>
// 导入模块化的hooks
import useSum from '../../hooks/useSum'
import useDog from '../../hooks/useDog'

// 组合式API 调用函数的数据和方法
const { count, add } = useSum()
const { dogList, getDog } = useDog()
</script>

<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="add()">count</button>
        <hr>
        <img v-for="(item, index) in dogList" :src="item" :key="index"><br><br>
        <button v-on:click="getDog()">get dog</button>
    </div>
</template>

<style scoped>
.img {
    width: auto;
    height: auto;
    margin: 5px;
}
</style>