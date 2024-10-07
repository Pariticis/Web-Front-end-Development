var scene = new THREE.Scene();                          //创建新场景
var camera = new THREE.PerspectiveCamera(               //创建摄影机
    75,                                                 //视角角度
    window.innerWidth / window.innerHeight,             //宽高比
    0.1,                                                //近裁剪面  
    1000                                                //远裁剪面
);

camera.position.z = 5;                                  //设置摄影机位置  距离z轴5米

var renderer = new THREE.WebGLRenderer();               //创建渲染器
renderer.getSize(window.innerWidth,window.innerHeight); //设置渲染器大小
document.body.appendChild(renderer.domElement);         //将渲染器添加到body中

var dinosaur;

var loader = new THREE.TextureLoader();                 //创建纹理加载器
loader.load("../../../site/images/dinosaur.png", function(texture) {
     texture.wrapS = THREE.RepeatWrapping;              //设置纹理重复模式
     texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set(1, 1);                          //设置纹理重复次数

     var geometry = new THREE.BoxGeometry(2, 2, 2);     //创建几何体
     var material = new THREE.MeshBasicMaterial({       //创建材质
        map: texture,
        shading: THREE.FlatShading
     });

     dinosaur = new THREE.Mesh(geometry, material);     //创建物体
     scene.add(dinosaur);                               //添加物体到场景
     draw();                                            //绘制场景
});

var light = new THREE.AmbientLight("rgb(255,255,255)"); //创建环境光(柔光)
scene.add(light);                                       //添加环境光到场景

var spotlight = new THREE.SpotLight("rgb(255,255,255)");//创建聚光灯
spotlight.position.set(100, 1000, 1000);                //设置聚光灯位置
spotlight.castShadow = true;                            //开启阴影
scene.add(spotlight);                                   //添加聚光灯到场景

function draw() {
    dinosaur.rotation.x += 0.01;
    dinosaur.rotation.y += 0.01;
    renderer.render(scene, camera);
  
    requestAnimationFrame(draw);                        //绘制动画
};
  