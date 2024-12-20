// 在Hook.vue中调用
import { reactive } from "vue"
import axios from "axios"

export default function () {
  let dogList = reactive(["初始状态"])

  async function getDog() {
    try {
      // 调用API获取数据 异步
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      )
      // 保存数据到dogList数组中
      dogList.push(result.data.message)
    } catch (error) {
      alert("error")
    }
  }

  // 对外部暴露数据
  return { dogList, getDog }
}
