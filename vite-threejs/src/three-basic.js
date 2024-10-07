import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器

//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0,0,0);
cube.scale.x = cube.scale.y = cube.scale.z = Math.random() * 2;
scene.add(cube);
console.log(cube);

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
camera.position.set(0, 0, 8);
camera.lookAt(0, 0, 0);

//5.渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.append(renderer.domElement);

//帧率监测
const stats = new Stat();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.append(stats.dom);

//鼠标控制  须在渲染器之后
const orbitControl = new OrbitControls(camera, renderer.domElement);

//动画
//three.js自带对象实现不同刷新率下的严格帧率
const clock = new THREE.Clock();
function loop() {
  const time = clock.getElapsedTime();
  cube.position.x = Math.sin(time) * 2;
  cube.position.y = Math.cos(time) * 2;

  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();

//窗口自适应
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;//更新相机纵横比
  camera.updateProjectionMatrix();//打开相机更新计算矩阵
  renderer.setSize(window.innerWidth, window.innerHeight);//更新渲染器尺寸
});