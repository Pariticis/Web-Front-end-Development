import * as THREE from "three"; //加载three.js模块
import * as dat from "dat.gui"; //加载dat.gui模块
import Stat from "three/examples/jsm/libs/stats.module"; //加载性能监视器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //加载鼠标轨道控制器

//初始化
const gui = new dat.GUI(); //创建dat.gui对象
const stats = new Stat(); //创建Stats对象
document.body.append(stats.dom);

//场景
const scene = new THREE.Scene();

//相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

//光线
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

//渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

//控制
const orbitControls = new OrbitControls(camera, renderer.domElement); //创建OrbitControls对象
