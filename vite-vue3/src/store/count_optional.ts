// 选项式写法
import { defineStore } from "pinia"

export const useCountStore = defineStore("count", {
    actions: {},
    state() {
        // 初始化一个count属性  默认值为0
        return {
            count: 0
        }
    },
    getters: {}
})

export const useTotalStore = defineStore("total", {
    actions: {
        // 传入的是x值
        increment(value: number) {
            this.total = value * 5
        }
    },
    state() {
        return {
            total: 0
        }
    },
    getters: {
        totalList():Array<number>{
            const totalList: number[] = []
            for(let i=0;i<10;i++) {
                let j = this.total + i
                totalList.push(j)
            }
            return totalList
        }
    }
})