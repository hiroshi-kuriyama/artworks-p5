
let curve;

function setup() {
	// frameRate(10);
	createCanvas(800, 450);
	background(0);
    // noiseSeed(9999);
	curve = new Curve(width/2, 0);
}


function draw() {
	curve.update();
	curve.display();
}