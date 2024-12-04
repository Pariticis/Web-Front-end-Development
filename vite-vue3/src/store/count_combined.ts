// 组合式写法
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCountStore = defineStore("count", () => {
    // 定义一个返回值  设为0
    const count = ref(0)

    return { count }
})

export const useTotalStore = defineStore("total", () => {
    const total = ref(0)

    // 传入的value类型为x值
    const increment = (value: number) => {
        total.value = value * 5
    }

    // 采用计算属性处理数据  生成关于total的数组
    const totalList = computed(() => {
        const list: number[] = []
        for( let i = 0; i < 10; i++) {
            let j = total.value + i
            list.push(j)
        }
        return list
    })

    return { total, increment, totalList }
})