import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器

//1.房间
const scene = new THREE.Scene();

//2.物体
const cubes = [];
function cubeCreate() {
  const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
  const material = new THREE.MeshBasicMaterial();
  const cube = new THREE.Mesh(geometry, material);
  cubes.push(cube);
}

//坐标轴视图
const axes = new THREE.AxesHelper(2, 2, 2);

//成组运动  可嵌套
const group = new THREE.Group();
const group2 = new THREE.Group();
for (let i = 0; i < 3; i++) {
  cubeCreate();
} 
group.add(cubes[0]);  
group2.add(cubes[1]);
group2.add(cubes[2]);
group2.position.set(5, 0, 0);//group2中心偏移group中心x方向5个距离
cubes[2].position.set(2, 0, 0);//cubes2相对于group2中心偏移x方向2个距离

cubes[0].material.color.set('yellow');
cubes[1].material.color.set('blue');
cubes[2].material.color.set('grey');

group.add(group2);
scene.add(group);//group嵌套group2
scene.add(axes);  

console.log(cubes[0].position);
console.log(cubes[1].position);
console.log(cubes[2].position);

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
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

//5.渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.append(renderer.domElement);

//帧率监测
const stats = new Stat();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.append(stats.dom);

//鼠标控制
const orbitControl = new OrbitControls(camera, renderer.domElement);

//动画
//three.js自带对象实现不同刷新率下的严格帧率
const clock = new THREE.Clock();
function loop() {
  const time = clock.getElapsedTime();
  
  group.rotation.z = time;
  group2.rotation.z = time * 2;

  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();
