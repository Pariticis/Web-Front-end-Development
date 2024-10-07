import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器
import * as dat from "dat.gui";

const gui = new dat.GUI();
//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const planeG = new THREE.PlaneGeometry(10, 10);
const planeM = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const plane = new THREE.Mesh(planeG, planeM);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -0.5;
scene.add(plane);

//坐标轴视图
const axes = new THREE.AxesHelper(2, 2, 2);
scene.add(axes);

//3.光线
const light = new THREE.AmbientLight();
scene.add(light);

//4.相机
/*相机一  透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
*/
//相机二  正交相机  无近大远小效果
const camera = new THREE.OrthographicCamera(
  -window.innerWidth / 30,
  window.innerWidth / 30,
  window.innerHeight / 30,
  -window.innerHeight / 30,
  0.1,
  1000
);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

camera.zoom =  2; //放缩大小  需更新相机计算矩阵

const floder = gui.addFolder("相机");
floder.add(camera.position, "x", -5, 5);
floder.add(camera.position, "y", -5, 5);
floder.add(camera.position, "z", -5, 5);

const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);



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
function loop() {
  camera.updateProjectionMatrix(); //改变相机位置需更新相机计算矩阵
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();
