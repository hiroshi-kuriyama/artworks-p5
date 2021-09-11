class Curve {
    constructor(init_x, init_y) {
        this.init_x = init_x;
        this.init_y = init_y;
        this.angle_init = random() * 2 * PI;
        this.angular_velocity = random(PI/20, PI/5);
        this.i = 0
    }

    update() {
        this.i += 1;
        if (this.i > 60) {
            this.i = 0;
        }
    }

    display() {
        let i = this.i;
        let angle = this.angle_init + i * this.angular_velocity;
        let pos_x = this.init_x + (60-i) * noise(i/10) * sin(angle);
        let pos_y = this.init_y + i * 10;
        noStroke();
        // fill(211, 135, 189, 80);
        // ellipse(pos_x, pos_y, 3 * (60-i) / 10);
        // fill(245, 203, 232, 100);
        // ellipse(pos_x, pos_y, 2 * (60-i) / 10);
        fill(255);
        ellipse(pos_x, pos_y, 2 * (60-i) / 10);
    }

    // isDead() {
    //     if (this.i > 60) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}