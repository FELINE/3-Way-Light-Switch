// This code is exactly from the original 2-way light

var theCanvas = document.querySelector("#theCanvas");
var ctx = theCanvas.getContext("2d");

// A 2D Coordinate object representing a point on a 2D plane (e.g. the canvas context)
var Coord2D = function (x, y) {
    return {
        x: x,
        y: y,
    };
};

theCanvas.center = new Coord2D(theCanvas.width / 2, theCanvas.height / 2);

function clearCanvas() {
    ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);

}

//  Light and Light Switch MODEL

// The radius of lights drawn by this app.
var LIGHT_SIZE = 20;
var LIGHT_OFF_COLOR = 'black';
var LIGHT_ON_COLOR = 'yellow';

// A Light object that responds to a lightSwitch and knows how to draw itself on a canvas 2d context
var Light = function (lightSwitch, centerCoord) {
    this.center = centerCoord;
    this.radius = LIGHT_SIZE;
    this.switch = lightSwitch; // the lightSwitch that controls this light.

    this.draw = function (ctx) {
        ctx.beginPath();
        if (this.switch.isOn) {
            ctx.fillStyle = LIGHT_ON_COLOR;
        } else {
            ctx.fillStyle = LIGHT_OFF_COLOR;
        }
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
};

// The dimensions of the light switch drawn by the app
var SWITCH_LENGTH = 50;
var SWITCH_WIDTH = 20;

// A LightSwitch object that toggles on and off, and can draw itself on a canvas 2d context
var LightSwitch = function (centerCoord) {
    this.center = centerCoord;
    this.length = SWITCH_LENGTH;
    this.width = SWITCH_WIDTH;

    // The data model for this app: 1 boolean!
    this.isOn = false;

    this.switch = function (on) {
        this.isOn = on;
    }
    this.switchOn = function () {
            this.switch(true);
        }, // delegation
        this.switchOff = function () {
            this.switch(false);
        }, // delegation
        this.toggle = function () {
            this.switch(!this.isOn);
        }, // delegation

        this.draw = function (ctx) {
            var width, height;

            if (this.isOn) { // on is normal orientation
                width = this.width;
                height = this.length;
            } else { // off is inverse orientation
                width = this.length;
                height = this.width;
            }
            var x = this.center.x - width / 2;
            var y = this.center.y - height / 2;
            ctx.strokeRect(x, y, width, height);
        }
};


// 3-way switch illustrates how careful abstraction leads to re-use
var threeWaySwitch = function (coord1, coord2) {
    this.switches = [new LightSwitch(coord1), new LightSwitch(coord2)];

    this.isOn = false;

    this.toggle = function (whichSwitch) {
        // whichSwitch must be 0 or 1, indicating which switch to toggle.
        this.switches[whichSwitch].toggle();
        // the 3-way switch is "on" when the 2 switches are opposed
        this.isOn = this.switches[0].isOn != this.switches[1].isOn;
    }

    this.draw = function (ctx) {
        for (var i = 0; i < this.switches.length; i++) {
            this.switches[i].draw(ctx);
        }
    }
}

// Positions for the switch and light
var LIGHT_CENTER = new Coord2D(theCanvas.center.x, theCanvas.center.y)
var SWITCH1_CENTER = new Coord2D(SWITCH_LENGTH, theCanvas.center.y)
var SWITCH2_CENTER = new Coord2D(theCanvas.width - SWITCH_LENGTH, theCanvas.center.y)

// Construct the Switch and the Ligth it switches
var threeWaySwitch = new threeWaySwitch(SWITCH1_CENTER, SWITCH2_CENTER);
var light = new Light(threeWaySwitch, LIGHT_CENTER);


// Switch control:
theCanvas.onclick = switchLight;

function switchLight(event) {
    console.log('toggle light', event);
    clearCanvas();
    // which light to toggle depends which side of the canvas user clicked on.
    if (event.clientX < theCanvas.center.x)
        threeWaySwitch.toggle(0);
    else
        threeWaySwitch.toggle(1);

    threeWaySwitch.draw(ctx);
    light.draw(ctx);
}

threeWaySwitch.draw(ctx);
light.draw(ctx);