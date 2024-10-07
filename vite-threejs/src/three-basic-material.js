import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器
import * as dat from "dat.gui"; //加载dat.gui模块

const gui = new dat.GUI();

//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry = new THREE.SphereGeometry(1);

//不需灯光的材质
const material1 = new THREE.MeshBasicMaterial();
material1.wireframe = true;
material1.visible = true;
material1.color.set(0xff0000);

const material2 = new THREE.MeshNormalMaterial();


//需要灯光的材质
//lambert材质：漫反射光照  无高光  较粗糙  设置为绿色
const material3 = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
});
//phong材质：高光反射光照  设置为灰色
const material4 = new THREE.MeshPhongMaterial();
material4.color.set("grey");
material4.shininess = 100;//高光度
//standard材质：高光反射光照  设置为橘黄色
const material5 = new THREE.MeshStandardMaterial({
  color: "orange",
  roughness: 0,//粗糙度
  metalness: 0,//金属度(0非金属 1金属)
  emissive: 0x000000,//自发光颜色
  emissiveIntensity: 1,//自发光强度
});
//调节standard材质的粗糙度与金属度
const floder2 = gui.addFolder("标准材质调节");
floder2.add(material5, "roughness", 0, 1, 0.1);
floder2.add(material5, "metalness", 0, 1, 0.1);

const sphere1 = new THREE.Mesh(geometry, material1);
const sphere2 = new THREE.Mesh(geometry, material2);

const sphere3 = new THREE.Mesh(geometry, material3);
const sphere4 = new THREE.Mesh(geometry, material4);
const sphere5 = new THREE.Mesh(geometry, material5);

sphere1.position.set( 0, -5, 0)
sphere2.position.set( 0, -2.5, 0)

sphere3.position.set( 0, 0, 0)
sphere4.position.set( 0, 2.5, 0)
sphere5.position.set( 0, 5, 0)

scene.add(sphere1);
scene.add(sphere2);

scene.add(sphere3);
scene.add(sphere4);
scene.add(sphere5);

//坐标轴视图
const axes = new THREE.AxesHelper(2, 2, 2);
scene.add(axes);

//3.光线
const light = new THREE.DirectionalLight(0xffffff, 1);//方向光
light.position.set(5, 10, 5);
scene.add(light);

//光源位置控制
const floder = gui.addFolder("光源");
floder.add(light.position, "x", -5, 5, 1).name("环境光-x");
floder.add(light.position, "y", -5, 10).name("环境光-y");
floder.add(light.position, "z", -5, 5, 1).name("环境光-z");

scene.add(new THREE.AmbientLight(0xffffff, 0.1));//环境光

//4.相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(8, 0, 8);
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
