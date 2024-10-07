import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器
import * as dat from "dat.gui"; //加载dat.gui模块

const gui = new dat.GUI();

//1.房间
const scene = new THREE.Scene();

//2.物体
const geometry = new THREE.BoxGeometry(1);//立方体
const geometry2 = new THREE.SphereGeometry(0.6);//球体

//颜色放置在对象中
const boxcontrol = {
  color: 0xffffff
};
//gui控制颜色  设置对象  属性  实变函数
gui.addColor(boxcontrol, "color").onChange(() => {
  boxMaterial.color.set(boxcontrol.color);
});

const boxMaterial = new THREE.MeshBasicMaterial({color: boxcontrol.color});
const sphereMaterial = new THREE.MeshNormalMaterial()

const box = new THREE.Mesh(geometry, boxMaterial);
const sphere = new THREE.Mesh(geometry2, sphereMaterial);

box.position.set(0, 0, 0);
sphere.position.set(0, 0, 0);

scene.add(box);
scene.add(sphere);

//dat.gui控制器
gui.add(box.position, "x", -5, 5, 0.5).name("x");//对象 属性 最小值 最大值 步长
gui.add(box.position, "y", -5, 5).name("y");
gui.add(box.position, "z", -5, 5).name("z");

gui.add(sphereMaterial, "wireframe")//单选型控制


//控制项目过多  采用文件夹形式
const floder = gui.addFolder("立方体位姿")
floder.add(box.rotation, "x", 0, 2 * Math.PI, 0.01)
floder.add(box.rotation, "y", 0, 2 * Math.PI, 0.01)
floder.add(box.rotation, "z", 0, 2 * Math.PI, 0.01)

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
//dat.gui控制目标只能是对象
const control = {
  r: 1,
  speed: 1,
  stop: ()=>{
    control.speed = 0;
  }
};
const floder2 = gui.addFolder("球体位姿")
floder2.add(control, "r", 0.1, 5, 0.1).name("半径")
floder2.add(control, "speed", 0.1, 5, 0.5).name("旋转速度")
floder2.add(control, "stop")

const clock = new THREE.Clock();
function loop() {
  const time = clock.getElapsedTime();
  
  sphere.position.x = Math.sin(time * control.speed) * control.r;
  sphere.position.z = Math.cos(time * control.speed) * control.r;
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();
