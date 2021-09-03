function setup() {
	createCanvas(800, 450);
	background(0);
    // noiseSeed(9999);
	let init_x = width/2;
	let init_y = 0;
	let angle_init = random() * 2 * PI;
	let angular_velocity = random(PI/20, PI/5);
	
	for (let i = 0; i < 60; i++) {
		fill(200);
		let angle = angle_init + i * angular_velocity;
		let pos_x = init_x + (60-i) * noise(i/10) * sin(angle);
		let pos_y = init_y + i * 10;
		ellipse(pos_x, pos_y, (60-i)/10);
	}
}

function draw() {
	
}