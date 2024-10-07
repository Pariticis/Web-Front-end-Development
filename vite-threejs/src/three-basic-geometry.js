import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器

//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry1 = new THREE.BoxGeometry(1);//立方体
const geometry2 = new THREE.SphereGeometry(2);//球体

const geometry3 = new THREE.CylinderGeometry(1, 1, 2, 32);//圆柱
const geometry4 = new THREE.TorusGeometry(8, 0.5, 32, 16);//圆环

const geometry5 = new THREE.PlaneGeometry(2, 2, 32);//二维平面  二维有正反两面之分  反面默认不可见  材质中设置side : THREE.DoubleSide 可见反面

const material = new THREE.MeshNormalMaterial();

const box = new THREE.Mesh(geometry1, material);
box.position.set(0, 0, 5);
const sphere = new THREE.Mesh(geometry2, material);
sphere.position.set(0, 0, 10);
const ring = new THREE.Mesh(geometry3, material);
ring.position.set(10, 0, 0);

const cylinder = new THREE.Mesh(geometry4, material);
cylinder.position.set(0, 0, -5);
const torus = new THREE.Mesh(geometry5, material);
torus.position.set(0, 0, 15);


const group = new THREE.Group();
group.add(box);
group.add(sphere);

group.add(cylinder);
group.add(torus);

scene.add(group);
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
camera.position.set(15, 15, 20);
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
  
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();
