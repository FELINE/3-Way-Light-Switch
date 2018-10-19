var theCanvas = document.querySelector("#theCanvas");
var ctx = theCanvas.getContext("2d");


var Coord2D = function(x, y) {
    return {
        x : x,
        y : y,
    };
};

var lightSize = 70;
theCanvas.center = new Coord2D(theCanvas.width/2, theCanvas.height/2);

var leftButton = document.getElementById("left").onclick = flipSwitchbyLeft;
var rightButton = document.getElementById("right").onclick = flipSwitchbyRight;

function left(on){
	ctx.clearRect (0,0,800,600);
	if(on){
		ctx.beginPath();
		ctx.strokeRect(theCanvas.center.x-4*lightSize,theCanvas.center.y-0.5*lightSize,200,100);
		ctx.strokeRect(theCanvas.center.x+3*lightSize,theCanvas.center.y-0.5*lightSize,100,200);
		ctx.fillStyle="green";
		ctx.arc(theCanvas.center.x,theCanvas.center.y,70,0,2*Math.PI);
		ctx.fill();
	    console.log("on");
		} else { 
		ctx.beginPath();
		console.log("off");
		ctx.strokeRect(theCanvas.center.x-4*lightSize,theCanvas.center.y-0.5*lightSize,100,200);
		ctx.strokeRect(theCanvas.center.x+3*lightSize,theCanvas.center.y-0.5*lightSize,100,200);
		ctx.fillStyle="black";
		ctx.arc(theCanvas.center.x,theCanvas.center.y,70,0,2*Math.PI);
		ctx.fill();
	}
}

function right(on){
	ctx.clearRect (0,0,800,600);
	if(on){
		ctx.beginPath();
		ctx.strokeRect(theCanvas.center.x+4*lightSize,theCanvas.center.y-0.5*lightSize,200,100);
		ctx.strokeRect(theCanvas.center.x-4*lightSize,theCanvas.center.y-0.5*lightSize,100,200);
		ctx.fillStyle="green";
		ctx.arc(theCanvas.center.x,theCanvas.center.y,70,0,2*Math.PI);
		ctx.fill();
	    console.log("on");
		} else { 
		ctx.beginPath();
		console.log("off");
		ctx.strokeRect(theCanvas.center.x+3*lightSize,theCanvas.center.y-0.5*lightSize,100,200);
		ctx.strokeRect(theCanvas.center.x-4*lightSize,theCanvas.center.y-0.5*lightSize,100,200);
		ctx.fillStyle="black";
		ctx.arc(theCanvas.center.x,theCanvas.center.y,70,0,2*Math.PI);
		ctx.fill();
	}
}



var ligthIsOn = false;
left(ligthIsOn);
right(ligthIsOn);

function flipSwitchbyLeft(){
	console.log("switch");
	ligthIsOn = !ligthIsOn;
	left(ligthIsOn);
}

function flipSwitchbyRight(){
	console.log("switch");
	ligthIsOn = !ligthIsOn;
	right(ligthIsOn);
}
	




