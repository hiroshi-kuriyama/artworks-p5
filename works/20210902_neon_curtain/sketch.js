/*
NEON CURTAIN
Neon lights fall down in the dark. 
Each light oscillate randomly and gets its size and oscillation width  smaller as it goes down. 
To make lights look neon, I used lerpColor().
*/

let colors = ['#01FFC3', '#01FFFF', '#FFB3FD', '#9D72FF', '#EBF875'];
let lights = [];
let NUM_LIGHTS = 200;
let LIFE_SPAN = 500;

function setup() {
	createCanvas(800, 450);
	fill(0);
	rect(0, 0, width, height);
	for (let i = 0; i < NUM_LIGHTS; i++) {
		let init_x = random(0, width);
		let col = color(random(colors));
		lights[i] = new Light(init_x, 0, random(0, LIFE_SPAN), LIFE_SPAN , col);
	}
}


function draw() {
	// after-image
	fill(0, 5);
	rect(0, 0, width, height);
	// move neon lights
	for (let i = 0; i < lights.length; i++) {
		lights[i].update();
		lights[i].display();
		if (lights[i].isDead()) {
			let init_x = random(0, width);
			let col = color(random(colors));
			lights[i] = new Light(init_x, 0, 0, LIFE_SPAN , col);
		}
	}
}

