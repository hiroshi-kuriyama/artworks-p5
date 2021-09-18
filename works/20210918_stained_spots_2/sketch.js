let CENTER = [400, 400];

function setup() {
    createCanvas(800, 800);
    background(0);
    fill('yellow');
    stroke('red');
    beginShape();
    let theta = 0;
    while (theta < 2 * PI) {
        let n, x, y;
        n = noise(cos(theta) + 0.1, sin(theta) + 0.5);
        x = CENTER[0] + 100 * n * cos(theta);
        y = CENTER[1] + 100 * n * sin(theta);
        vertex(x, y);
        theta += 0.1;
    }
    endShape(CLOSE);

}

function draw(){

}