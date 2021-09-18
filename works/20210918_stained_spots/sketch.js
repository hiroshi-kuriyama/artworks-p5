// https://ja.javascript.info/bezier-curve

let t = 0;
let NOISE_SCALE = 30;
let RESOLUTION = 100
let p1 = [200, 600];
let p2 = [400, 200];
let p3 = [600, 600];

function setup() {
    createCanvas(800, 800);
    background(0);
    fill('red');
    ellipse(p1[0], p1[1], 10);
    ellipse(p2[0], p2[1], 10);
    ellipse(p3[0], p3[1], 10);

    for (let i = 0; i < RESOLUTION; i++) {
        let t = i / RESOLUTION;
        let x, y;
        x = (1-t)**2 * p1[0] + 2*(1-t)*t * p2[0] + t**2 * p3[0];
        y = (1-t)**2 * p1[1] + 2*(1-t)*t * p2[1] + t**2 * p3[1];
        fill(255);
        noStroke();
        ellipse(x, y, 3);
    }
}


function draw() {
}
    