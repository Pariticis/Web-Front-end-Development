var canvas = document.querySelector(".canvas");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);
var context2d = canvas.getContext("2d"); 

context2d.translate(width / 2, height / 2);                             //移动原点到中心

function degToRad(deg) {
    return deg * (Math.PI / 180);
};

function random(min, max) {
    return Math.flooor(Math.random() * (max - min) ) + min;             //返回一个随机整数，范围从min到max-1
};

var length = 250;
var moveOffset = 20;

for(var i = 0; i < length; i++) {
    context2d.fillStyle = "rgba( " + " (255 - length) " + ", 0 ," + " (255 - length) " + ", 0.8)";
    context2d.beginPath();
    context2d.moveTo(moveOffset, moveOffset);
    context2d.lineTo(moveOffset + length, moveOffset);

    var height = (length / 2) * Math.tan(degToRad(60));
    context2d.lineTo(moveOffset + length/2, moveOffset + height);
    context2d.lineTo(moveOffset, moveOffset);
    context2d.fill();

    length --;
    moveOffset += 0.5;
    context2d.rotate(degToRad(5));
};