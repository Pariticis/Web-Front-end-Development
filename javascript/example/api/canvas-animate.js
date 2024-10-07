var canvas = document.querySelector(".canvas");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);
var context2d = canvas.getContext("2d"); 

context2d.translate(width / 2, height / 2);

var image = new Image();
image.src = "../../../site/images/dinosaur.png";                 //240x210
image.onload = draw;

var sprite= 0;                                                   //图序
var positionX = 0;

function draw() {
    if ( positionX % 13 == 0 ) {
        context2d.fillRect(-(width / 2), -(height / 2), width, height);
        context2d.drawImage(image, sprite * 240, 0, 240, 210, 0 + positionX, -105, 240, 210);
        if ( sprite == 5 ) {
            sprite = 0;
        } else {
            sprite ++;
        };
    };

    if ( positionX > width / 2) {
        let newPositionX = -width / 2;
        positionX = Math.ceil(newPositionX / 13) * 13;
        console.log(positionX);
    } else {
        positionX += 2;
    };

    window.requestAnimationFrame(draw);
};

