
let colors = ['#01FFC3', '#01FFFF', '#FFB3FD', '#9D72FF', '#EBF875'];
let curves = [];
let NUM_CURVES = 1000;
let LIFE_SPAN = 400;

function setup() {
	// frameRate(10);
	createCanvas(800, 450);
	background(0);
    // noiseSeed(9999);
	for (let i = 0; i < NUM_CURVES; i++) {
		let init_x = i * width / NUM_CURVES + random(0, width / NUM_CURVES);
		col = random(colors)
		curves[i] = new Curve(init_x, 0, random(0, LIFE_SPAN), LIFE_SPAN , col);
	}
}


function draw() {
	// background(0);
	fill(0, 20);
	rect(0, 0, width, height);
	for (let i = 0; i < curves.length; i++) {
		curves[i].update();
		curves[i].display();
	}
}

