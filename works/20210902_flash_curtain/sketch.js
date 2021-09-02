function setup() {
	createCanvas(800, 600);
	background(100);
    // noiseSeed(9999);
	let pos_x = width/2;
	let pos_y = height/2;
	let angle;
	let angle_init = PI/2 //random() * 2 * PI;
	
	for (let i = 60; i > 0; i--) {
		fill(0);
		ellipse(pos_x, pos_y, i /100);
		angle = angle_init + noise(pos_x/10000, pos_y/10000, i/10000) * 100;
		
		pos_x += 10 * sin(angle);
		pos_y += 10 * cos(angle);
	}
}

function draw() {
	
}