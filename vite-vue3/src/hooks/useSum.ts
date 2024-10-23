// 在Hook.vue中调用
import { ref } from 'vue'

export default function() {
    let count = ref(0)

    function add() {
        count.value++
    }

    // 对外部暴露数据
    return { count, add }
}