// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

// 生成随机颜色的函数

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

//  建立小球实例化对象模型

function Ball(x,y,vx,vy,color,size) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.color = color;
  this.size = size;
};

//  画出小球与画布

Ball.prototype.draw = () => {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

//  更新小球的轨迹  碰到边缘时反弹

Ball.prototype.update = () => {
  if(this.x + this.size > width || this.x - this.size < 0) {
    this.vx = -this.vx;
  }
  if(this.y + this.size > height || this.y - this.size < 0) {
    this.vy = -this.vy;
  }
  this.x += this.vx;
  this.y += this.vy;
};

//  存储小球的数组

let balls = [];

while(balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7,7),
    random(-7,7),
    randomColor(),
    size,
  );
  balls.push(ball);
};

//  运动循环函数

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  };
  requestAnimationFrame(loop);
};

loop();
