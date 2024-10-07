<template>
  <client-only>
    <div>
      <div style="width:100%;height:70%;">
        <img src="../../vite-vue3/src/assets/blast/pi16.png" style="width:35%;height:100%;position:relative;">
        <img src="../../vite-vue3/src/assets/blast/pi13.png"
          style="width:3%;height:3%;position:relative;margin:0% 0% 0 45%;cursor: pointer;">
        <img src="../../vite-vue3/src/assets/blast/pi12.png" @click="handleButtonClick0()"
          style="width:3%;height:3%;position:relative;margin:0% 0% 0 3%;cursor: pointer;">
        <img src="../../vite-vue3/src/assets/blast/pic11.png"
          style="width:3%;height:3%;position:relative;margin:0% 0% 0 3%;cursor: pointer;">
      </div>
      <div class="default-page">

        <!-- <img src="@/assets/img/blast
/pi1" @click="handleButtonClick" style="width:33%;height:6%;margin:2% 0 0 34%;"> -->
        <div align="center">
          <button class="button" @click="to_lh()">
            <p>一键设计模块</p>
          </button>
        </div>

        <div
          style="border: 0.015rem solid;border-color:#00FFFF;border-radius: 0.2rem;width:66%;transform:translate(50%7%);margin-left:-16%">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img" @click="handleButtonClick1()"
            style="margin-left: 7.63%">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img" @click="handleButtonClick2()">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img" @click="handleButtonClick3()">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img" @click="handleButtonClick4()">
        </div>

        <div
          style="border: 0.015rem solid;border-color:#00FFFF;border-radius: 0.2rem;width:66%;transform:translate(50%10%);margin-left:-16%;margin-top: 3%">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img" style="margin-left: 7.63%">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img">
          <img src="../../vite-vue3/src/assets/blast/button.png" class="dir-img">
        </div>

        <div style="margin-top:6%;">
          <font color="white" style="margin:10% 0 0 25%;font-size:1.1vw;">
            技术支持：江汉大学精细爆破国家重点实验室</font>
          <font face="Arial" color="white" style="margin:30% 0 0 5%;font-size:1.1vw;">
            Tel：13283834260</font>
          <font face="Arial" color="white" style="margin:30% 0 0 5%;font-size:1.1vw;">
            Email：52472106@qq.com</font>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>

let meta = [
  {
    name: 'viewport',
    content: 'width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=no'
  }
]

function handleButtonClick() {
  window.location.href = '/'
}
function handleButtonClick0() {
  window.location.href = '/register'
}
function handleButtonClick1() {
  window.location.href = '/qdmdl_x'
}
function handleButtonClick2() {
  window.location.href = '/stjdl'
}
function handleButtonClick3() {
  window.location.href = '/qdmdl_s'
}
function handleButtonClick4() {
  window.location.href = '/stjdl_s'
}
function handleButtonClick9() {
  window.location.href = '/xtjdl'
}
function handleButtonClick7() {
  window.location.href = 'qdmdl_s'
}
function handleButtonClick13() {
  window.location.href = '/qdmdl_x_cd'
}
function handleButtonClick14() {
  window.location.href = '/stjdl_x_cd'
}
function handleButtonClick15() {
  window.location.href = '/mtjdl_x_cd'
}
function handleButtonClick21() {
  window.location.href = '/stjdl_x_cd'
}
function to_lh() {
  window.location.href = 'http://1.12.47.237/'
}


</script>

<style scoped>
.default-page {
  /* 设置背景图片的路径，可以根据实际情况调整路径 */
  background-image: url('../../vite-vue3/src/assets/blast/back.png');
  /* 设置背景图片的样式，这里使用 cover 表示图片铺满整个页面 */
  background-size: cover;
  /* 设置背景图片不平铺 */
  background-repeat: no-repeat;
  height: 100vh;
  
}

.button {
  margin: 2% auto;
  /* font-size: 0.1rem; */
  height: 0.3rem;
  width: 4rem;
  border-radius: 10px;
  border: 2px solid;
  border-color: #00FFFF;
  text-align: center;
  background: rgba(255 251 240 0.3);
  /*R G B opacity*/
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  user-select: none;
  font-weight: bold;
  position: relative;
  transition: transform .2s;
}

.button p {
  color: #f2f5ff;
  font-size: 0.12rem;
  margin: 0 0 1% 0;
}

.button:hover {
  color: rgb(8 12 241);
  background-color: rgba(0 0 0 0.05);
  transform: scale(1.1)
}

.dir-img {
  width: 11%;
  height: 12%;
  margin: 5% 9% 5% 3.8%;
  cursor: pointer;
  transition: transform .2s;
}

.dir-img:hover {
  transform: scale(1.1)
}

.dir-img2 {
  width: 12%;
  height: 12%;
  margin: 2% 0 1% 3.8%;
  cursor: pointer;
  transition: transform .2s;
}

.dir-img2:hover {
  transform: scale(1.1)
}
</style>
