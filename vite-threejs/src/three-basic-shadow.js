import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器
import * as dat from "dat.gui"; //加载dat.gui模块

const gui = new dat.GUI();

//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry = new THREE.SphereGeometry(0.5);
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
});
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 0.5, 0);

sphere.castShadow = true; //阴影照射对象

const planeGeometry = new THREE.PlaneGeometry(4, 4);
const planeMaterial = new THREE.MeshStandardMaterial();
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
planeMaterial.side = THREE.DoubleSide; //设置双面渲染
plane.rotation.x = -Math.PI / 2;

plane.receiveShadow = true; //阴影接收对象

scene.add(sphere);
scene.add(plane);

//坐标轴视图
const axes = new THREE.AxesHelper(2, 2, 2);
scene.add(axes);

//3.光线
const light = new THREE.AmbientLight();
light.intensity = 0.2;
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

directionalLight.castShadow = true; //阴影产生对象
directionalLight.shadow.mapSize.width = 1024;//阴影贴图大小  默认为512
directionalLight.shadow.mapSize.height = 1024;

console.log(directionalLight.shadow);

const colors = {
  color: 0xffffff,
};

const directionFloder = gui.addFolder("方向光");
directionFloder.addColor(colors, "color").name("颜色").onChange(() => {
  directionalLight.color.set(colors.color);
});
directionFloder.add(directionalLight, "intensity", 0, 10).name("强度");
directionFloder.add(directionalLight.position, "x", -5, 5, 1).name("x");
directionFloder.add(directionalLight.position, "y", -5, 5, 1).name("y");
directionFloder.add(directionalLight.position, "z", -5, 5, 1).name("z");

const directionalHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(directionalHelper);

//4.相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(-4, 4, 4);
camera.lookAt(0, 0, 0);

//5.渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;//开启阴影

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

  sphere.position.y = Math.abs(Math.sin(time)) * 2 + 0.5;//绝对值保证球体在y轴上方

  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();

