# store

## 介绍

保存全局状态与业务逻辑
可被任意读取

1.actions => methods
2.state => data
3.getters => computed

## 目录结构

```ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    actions: {
        // methods
    },
    state: () => {
        // data
    },
    getters: {
        // computed
    }
})
```
