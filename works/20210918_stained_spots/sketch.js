
let NOISE_SCALE = 10;
let RESOLUTION = 100;

let CENTER = [400, 400];
let NUM_VERTEX = 3
let LEN_OUTER = 100;
let LEN_INNER = 20;

function setup() {
    createCanvas(800, 800);
    background(0);
    let stain = new Stain(CENTER, NUM_VERTEX, LEN_OUTER, LEN_INNER);
    stain.get_dots();
    stain.display();
}

function draw() {
}