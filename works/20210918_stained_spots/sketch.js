
let NOISE_SCALE = 10;
let RESOLUTION = 100;
let CENTER = [400, 400];
let NUM_VERTEX = 3
let LEN_OUTER = 100;
let LEN_INNER = 20;
let p1 = [200, 600];
let p2 = [400, 200];
let p3 = [600, 600];

function setup() {
    createCanvas(800, 800);
    background(0);
    let theta_init = random(2 * PI);
    let outer_points = [];
    let inner_points = [];
    let theta_tmp = theta_init;
    while (theta_tmp < theta_init + 2 * PI) {
        let x_o, y_o, x_i, y_i;
        x_o = CENTER[0] + LEN_OUTER * cos(theta_tmp);
        y_o = CENTER[1] + LEN_OUTER * sin(theta_tmp);
        outer_points.push([x_o, y_o]);
        let theta_tmp_next, theta_inner;
        theta_tmp_next = theta_tmp + random(2 * PI / NUM_VERTEX);
        theta_inner = random(theta_tmp, theta_tmp_next);
        x_i = CENTER[0] + LEN_INNER * cos(theta_inner);
        y_i = CENTER[1] + LEN_INNER * sin(theta_inner);
        inner_points.push([x_i, y_i]);
        theta_tmp = theta_tmp_next;
    }
    for (let i = 0; i < outer_points.length - 1; i++) {
        plot_control_points(outer_points[i], inner_points[i], outer_points[i + 1]);
        bezier_curve(outer_points[i], inner_points[i], outer_points[i + 1]);
    }
    // connect the last dot
    plot_control_points(outer_points[outer_points.length - 1], inner_points[outer_points.length - 1], outer_points[0]);
    bezier_curve(outer_points[outer_points.length - 1], inner_points[outer_points.length - 1], outer_points[0]);
}

function draw() {
}
    
function bezier_curve(p1, p2, p3) {
    noFill();
    beginShape();
    for (let i = 0; i <= RESOLUTION; i++) {
        let t = i / RESOLUTION;
        // bezier curve (https://javascript.info/bezier-curve)
        let x, y;
        x = (1-t)**2 * p1[0] + 2*(1-t)*t * p2[0] + t**2 * p3[0];
        y = (1-t)**2 * p1[1] + 2*(1-t)*t * p2[1] + t**2 * p3[1];
        // noise
        // let x_n, y_n;
        // x_n = x + NOISE_SCALE * noise(x);
        // y_n = y + NOISE_SCALE * noise(y);
        stroke(255);
        strokeWeight(3);
        vertex(x, y);
    }
    endShape();
}

function plot_control_points(p1, p2, p3) {
    noStroke();
    fill('red');
    ellipse(p1[0], p1[1], 10);
    ellipse(p2[0], p2[1], 10);
    ellipse(p3[0], p3[1], 10);
}