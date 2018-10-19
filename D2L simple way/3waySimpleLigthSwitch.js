var theCanvas = document.querySelector("#theCanvas");
var c = theCanvas.getContext("2d");


theCanvas.onclick = click;
var switch1 = true;
var switch2 = true;

leftSide();
rightSide();
drawLight();

function click(event) {
  var x = event.clientX;
  c.clearRect(0, 0, theCanvas.width, theCanvas.height);
  if (x < 150) {
    leftSide();
  } else {
    rightSide();
  }
  drawLight();
}

function leftSide() {
	// Update the switch data model
  switch1 = !switch1;
  
  // redraw the switch
  if (switch1) {
    c.strokeRect(10, 100, 50, 50);

  } else {
    c.strokeRect(10, 100, 50, 100);
  }
}

function rightSide() {
  switch2 = !switch2;

	if (switch2) {
    c.strokeRect(200, 100, 50, 50);
  } else {
    c.strokeRect(200, 100, 50, 100);
  }
}

function black() {
  c.beginPath();
  c.arc(150, 100, 20, 0, 2 * Math.PI);
  c.fillStyle = 'black';
  c.fill();
  c.closePath();
}

function yellow() {
  c.beginPath();
  c.arc(150, 100, 20, 0, 2 * Math.PI);
  c.fillStyle = 'yellow';
  c.fill();
  c.closePath();
}

function drawLight()
{
  // the light is on if the switches are in opposite positions, false if they are the same
  var on = (switch1 != switch2)
  if (on)
      yellow();
  else
      black();
}
