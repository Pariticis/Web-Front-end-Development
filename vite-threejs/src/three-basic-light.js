import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器
import * as dat from "dat.gui"; //加载dat.gui模块
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js"; //加载区域光辅助线

const gui = new dat.GUI();

//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry = new THREE.SphereGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
  color: 'orange',
  roughness: 0,
  metalness: 0.2,
});
const sphere = new THREE.Mesh(geometry, material); 
sphere.position.set(0,0,0);
scene.add(sphere);

//添加平面
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 'grey',
  roughness: 0,
  metalness: 0.2,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0,-2, 0);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

//坐标轴视图
const axes = new THREE.AxesHelper(2, 2, 2);
scene.add(axes);

//3.光线
//环境光  整体提亮
const light = new THREE.AmbientLight();
light.intensity = 0.2;

//调节颜色需添加对象  此对象通用多个灯光调节
const colors = {
  color: 0xffffff,
  color2: 0xffffff,
};

//点光源  无死角照射
const pointLight = new THREE.PointLight('white', 1, 10);
pointLight.position.set(1, 1, 1);

const pointFloder = gui.addFolder("点光源");
pointFloder.addColor(colors, 'color').onChange(() => {
  pointLight.color.set(colors.color);
});
pointFloder.add(pointLight, "intensity", 0, 2).name("intensity");
pointFloder.add(pointLight.position, "x", -5, 5, 1);
pointFloder.add(pointLight.position, "y", -5, 5, 1);
pointFloder.add(pointLight.position, "z", -5, 5, 1);
pointFloder.add(pointLight, "visible").name("光源可见性");

const pointHelper = new THREE.PointLightHelper(pointLight);
pointFloder.add(pointHelper, "visible").name("辅助线可见性");
scene.add(pointHelper);

//平行光
const directionalLight = new THREE.DirectionalLight('white', 1);
directionalLight.position.set(1, 1, 1);

const directionFloder = gui.addFolder("平行光");
directionFloder.addColor(colors, 'color').onChange(() => {
  directionalLight.color.set(colors.color);
});
directionFloder.add(directionalLight, "intensity", 0, 2).name("intensity");
directionFloder.add(directionalLight.position, "x", -5, 5, 1);
directionFloder.add(directionalLight.position, "y", -5, 5, 1);
directionFloder.add(directionalLight.position, "z", -5, 5, 1);
directionFloder.add(directionalLight, "visible").name("光源可见性");

const directionalHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
directionFloder.add(directionalHelper, "visible").name("辅助线可见性");
scene.add(directionalHelper);

//圆锥光
const spotLight = new THREE.SpotLight('yellow', 1);
spotLight.position.set(3, 3, 3);
spotLight.angle = Math.PI / 4;

const spotFloder = gui.addFolder("圆锥光");
spotFloder.addColor(colors, 'color').onChange(() => {
  spotLight.color.set(colors.color);
});
spotFloder.add(spotLight, "intensity", 0, 2).name("intensity");
spotFloder.add(spotLight.position, "x", 0, 8, 1);
spotFloder.add(spotLight.position, "y", 0, 8, 1);
spotFloder.add(spotLight.position, "z", 0, 8, 1);
spotFloder.add(spotLight, "angle", 0, Math.PI / 2, 0.01).name("角度");
spotFloder.add(spotLight, "penumbra", 0, 1, 0.01).name("阴影");
spotFloder.add(spotLight, "visible").name("光源可见性");

const spotHelper = new THREE.SpotLightHelper(spotLight);
spotFloder.add(spotHelper, "visible").name("辅助线可见性");
scene.add(spotHelper);

//双面光
const hemisphereLight = new THREE.HemisphereLight('red', 'green', 1);
hemisphereLight.visible = false;

const hemisphereFloder = gui.addFolder("双面光");
hemisphereFloder.addColor(colors, 'color').onChange(() => {
  hemisphereLight.color.set(colors.color);
}).name("顶层颜色");
hemisphereFloder.addColor(colors, 'color2').onChange(() => {
  hemisphereLight.groundColor.set(colors.color2);
}).name("底层颜色");
hemisphereFloder.add(hemisphereLight, "visible").name("光源可见性");

//区域光  只对standard及physical材质有效
const areaLight = new THREE.RectAreaLight(0xffffff, 2);
areaLight.position.set(0, 3, 0);
areaLight.rotation.x = -Math.PI / 2;
areaLight.width = 1;
areaLight.height = 1;

const areaFloder = gui.addFolder("区域光");
areaFloder.addColor(colors, 'color').onChange(() => {
  areaLight.color.set(colors.color);
});
areaFloder.add(areaLight, "intensity", 0, 2).name("intensity");
areaFloder.add(areaLight.position, "x", -5, 5, 1);
areaFloder.add(areaLight.position, "y", -5, 5, 1);
areaFloder.add(areaLight.position, "z", -5, 5, 1);
areaFloder.add(areaLight, "width", 0, 5, 0.1).name("宽度");
areaFloder.add(areaLight, "height", 0, 5, 0.1).name("高度");
areaFloder.add(areaLight, "visible").name("光源可见性");

const areaHelper = new RectAreaLightHelper(areaLight);
areaFloder.add(areaHelper, "visible").name("辅助线可见性");
scene.add(areaHelper);

scene.add(light);
scene.add(pointLight);
scene.add(directionalLight);
scene.add(spotLight);
scene.add(hemisphereLight);
scene.add(areaLight);

//4.相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 5);
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
  directionalHelper.update();
  spotHelper.update();
}

loop();

