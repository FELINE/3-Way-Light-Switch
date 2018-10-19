/*
CPSC 1045 -- Final Exam
YOUR NAME:  Tomas Gonzalez
YOUR STUDENT ID: 100266942
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.onclick = click;
ligthIsOnLeft();
ligthIsOnRight();

function click(event) {
  var x = event.clientX;
  ctx.clearRect(0, 0, 600, 400);
  if (x < 300) {
    turnOnLeft();
  } else {
    turnOnRight();
  }
  drawLight();
}

function turnOnLeft() {
    ctx.clearRect(0, 0, 600, 400);
    if (ligthIsOnLeft) {
        ctx.rect(100, 200, 25, 75);
        ctx.stroke();
        ctx.rect(300, 300, 55, 25);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(400, 200, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();
    } else {
        //rectangle
        ctx.rect(100, 200, 75, 25);
        ctx.stroke();
        ctx.rect(300, 300, 25, 75);
        ctx.stroke();
        //circle
        ctx.beginPath();
        ctx.arc(400, 200, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
    }
}

function turnOnRight() {
    ctx.clearRect(0, 0, 600, 400);
    if (ligthIsOnRight) {
        ctx.rect(100, 200, 25, 75);
        ctx.stroke();
        ctx.rect(300, 300, 55, 25);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(400, 200, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();
    } else {
        //rectangle
        ctx.rect(100, 200, 75, 25);
        ctx.stroke();

        ctx.rect(300, 300, 25, 75);
        ctx.stroke();
        //circle
        ctx.beginPath();
        ctx.arc(400, 200, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
    }
}

var ligthIsOnRight = false;
var ligthIsOnLeft = false;


function () {
    if (ligthIsOnRight = false) {
        ligthIsOnRight = !ligthIsOnRight;
        turnOnRight(ligthIsOnRight);
    } else {

    }
};
