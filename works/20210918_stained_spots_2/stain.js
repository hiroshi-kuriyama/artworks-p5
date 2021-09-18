class Stain {
    constructor(center, size, col) {
        this.center = center;
        this.size = size;
        this.col = col;
        this.rnd_1 = random(100);
        this.rnd_2 = random(100);
    }

    display() {
        fill(this.col);
        stroke('red');
        beginShape();
        let theta = 0;
        while (theta < 2 * PI) {
            let n, x, y;
            n = noise(0.5 * cos(theta) + this.rnd_1, 0.5 * sin(theta) - this.rnd_2);
            x = this.center[0] + this.size * n**2 * cos(theta);
            y = this.center[1] + this.size * n**2 * sin(theta);
            vertex(x, y);
            theta += 0.01;
        }
        endShape(CLOSE);
    }
}