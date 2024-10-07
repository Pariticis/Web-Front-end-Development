var canvas = document.querySelector(".canvas");                 //查询选择类为canvas的元素
var width = (canvas.width = window.innerWidth);                 //windows窗口可视区域宽度
var height = (canvas.height = window.innerHeight);
var context2d = canvas.getContext("2d");                        //获取canvas的上下文(即2D渲染画布)

context2d.fillStyle = "yellow";                                 //填充色
context2d.fillRect(width/4, height/4, 500, 500);                //填充区域类型与大小

context2d.fillStyle = "green";
context2d.fillRect(0, 0, width/2, height/2);                    //新层会覆盖旧层
context2d.fillText("Hello World", width/2, height/2);           //填充文字

context2d.strokeStyle = "black";                                //描边
context2d.strokeRect(width/3, height/3, 500, 500);                    
context2d.lineWidth = 3;                                        //线宽
context2d.font = "30px Arial";                                  //字体
context2d.strokeText("ABCD", 100, 100);                         //描边文字