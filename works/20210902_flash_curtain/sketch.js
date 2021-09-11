
let curves = [];
let NUM_CURVES = 10;

function setup() {
	// frameRate(10);
	createCanvas(800, 450);
	background(0);
    // noiseSeed(9999);
	for (let i = 0; i < NUM_CURVES; i++) {
		let init_x = i * width / NUM_CURVES + random(0, width / NUM_CURVES);
		curves[i] = new Curve(init_x, 0);
	}
}


function draw() {
	background(0);
	// https://infosmith.biz/blog/it/shadow_glow_p5js_1
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;
	drawingContext.shadowBlur = 60;
	drawingContext.shadowColor = '#00FFAA';
	fill(200);
	for (let i = 0; i < curves.length; i++) {
		curves[i].update();
		curves[i].display();
	}
}

