import * as THREE from "three"; //加载three.js模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载轨道控制器

//1.房间
const scene = new THREE.Scene();

//2.物体
const car = new THREE.Group();

const body = new THREE.Group();
const material = new THREE.MeshNormalMaterial();
const bottom = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 1), material);
body.add(bottom);
const people = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: "green" })
);
people.position.set(0, 0, 0.75);
body.add(people);

const wheelgroup = new THREE.Group();
const wheel1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 1.5, 1.5),
  new THREE.MeshBasicMaterial({ color: "gray" })
);
wheel1.position.set(1.2, 2, 0);
wheelgroup.add(wheel1);

const wheel2 = wheel1.clone();
wheel2.position.set(-1.2, 2, 0);
wheelgroup.add(wheel2);

const wheel3 = wheel1.clone();
wheel3.position.set(1.2, -2, 0);
wheelgroup.add(wheel3);

const wheel4 = wheel1.clone();
wheel4.position.set(-1.2, -2, 0);
wheelgroup.add(wheel4);

car.add(wheelgroup);

const tire1 = new THREE.Group();
for (let i = 0; i < 20; i++) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.2, 0.2),
    new THREE.MeshNormalMaterial()
  );
  mesh.position.set(
    1,
    Math.cos((i / 20) * Math.PI * 2),
    Math.sin((i / 20) * Math.PI * 2)
  );
  tire1.add(mesh);
};
tire1.position.set(0.2, 2, 0);
wheelgroup.add(tire1);

const tire2 = tire1.clone();
tire2.position.set(-2.2, 2, 0);
wheelgroup.add(tire2);

const tire3 = tire1.clone();
tire3.position.set(0.2, -2, 0);
wheelgroup.add(tire3);

const tire4 = tire1.clone();
tire4.position.set(-2.2, -2, 0);
wheelgroup.add(tire4);

car.add(body);
scene.add(car);

//坐标轴视图
const axes = new THREE.AxesHelper(4);
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

  wheel1.rotation.x = time;
  wheel2.rotation.x = -time;
  wheel3.rotation.x = time;
  wheel4.rotation.x = -time;

  tire1.rotation.x = time;
  tire2.rotation.x = -time;
  tire3.rotation.x = time;
  tire4.rotation.x = -time;

  car.position.y = Math.sin(time) * 5;
  car.position.x = Math.cos(time) * 5;
  car.rotation.z = time;

  renderer.render(scene, camera);
  requestAnimationFrame(loop);
  stats.update();
  orbitControl.update();
}

loop();
