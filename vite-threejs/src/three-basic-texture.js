import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器

import textureM from "../../site/images/texture.png";

//1.房间
const scene = new THREE.Scene();

//贴图
const loader = new THREE.TextureLoader(); //创建加载器
const texture = loader.load(
  "https://images.pexels.com/photos/2130475/pexels-photo-2130475.jpeg?auto=compress&cs=tinysrgb&w=400"
);

//贴图大小不一导入时  需设置填充方式
//邻近插值与双线性插值
const textureMin = loader.load(textureM);
//贴图比预设区域大时
textureMin.magFilter = THREE.NearestFilter; //缩小过滤器  使得图片变小  邻近插值
//贴图比预设区域小时
textureMin.minFilter = THREE.LinearMipMapLinearFilter; //放大过滤器  使得图片变大  双线性插值
//二维两个维度  类似xy坐标系
textureMin.wrapS = THREE.RepeatWrapping; 
textureMin.wrapT = THREE.RepeatWrapping;
textureMin.repeat.set(10, 10); //设置重复次数

//2.物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  map: texture, //材料属性中指定贴图  贴图初始化需在材料初始化之前
});
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);
console.log(cube);

const planeG = new THREE.PlaneGeometry(4, 3);
const planeM = new THREE.MeshBasicMaterial({
  map: textureMin,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeG, planeM);
plane.position.set(0, -2, 0);
plane.rotateX(-Math.PI / 2);
scene.add(plane);
console.log(plane);

//坐标轴视图
const axes = new THREE.AxesHelper(2, 2, 2);
scene.add(axes);

//3.光线
const light = new THREE.AmbientLight();
scene.add(light);

//4.相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

//5.渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.append(renderer.domElement); //canvas元素

//帧率监测
const stats = new Stat();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.append(stats.dom); //div元素

//鼠标控制  须在渲染器之后
const orbitControl = new OrbitControls(camera, renderer.domElement);

//动画
//three.js自带对象实现不同刷新率下的严格帧率
const clock = new THREE.Clock();
function loop() {
  const time = clock.getElapsedTime();

  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();

//窗口自适应
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
