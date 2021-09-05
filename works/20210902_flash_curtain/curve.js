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
        background(0, 50);
        fill(200);
        let i = this.i;
        let angle = this.angle_init + i * this.angular_velocity;
        let pos_x = this.init_x + (60-i) * noise(i/10) * sin(angle);
        let pos_y = this.init_y + i * 10;
        ellipse(pos_x, pos_y, (60-i)/10);
    }

    // isDead() {
    //     if (this.i > 60) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}