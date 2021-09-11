class Curve {
    constructor(init_x, init_y, init_i, lifespan, col) {
        this.init_x = init_x;
        this.init_y = init_y;
        this.angle_init = random() * 2 * PI;
        this.angular_velocity = random(PI/200, PI/50);
        this.i = init_i;
        this.lifespan = lifespan;
        this.col = col;
    }

    update() {
        this.i += 1;
        if (this.i > this.lifespan) {
            this.i = 0;
        }
    }

    display() {
        let i = this.i;
        let angle = this.angle_init + i * this.angular_velocity;
        let pos_x = this.init_x + (this.lifespan-i)/10 * noise(i/100) * sin(angle);
        let pos_y =  - 20 + this.init_y + i * 1;
        noStroke();
        fill(this.col);
        ellipse(pos_x, pos_y, 4 * (this.lifespan-i) / 100);
    }

    // isDead() {
    //     if (this.i > 60) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}