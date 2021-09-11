class Curve {
    constructor(init_x, init_y) {
        this.init_x = init_x;
        this.init_y = init_y;
        this.angle_init = random() * 2 * PI;
        this.angular_velocity = random(PI/200, PI/50);
        this.i = 0
        this.lifespan = 400
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
        let pos_y = this.init_y + i * 1;
        noStroke();
        fill('#00FFAA');
        ellipse(pos_x, pos_y, 3 * (this.lifespan-i) / 100);
    }

    // isDead() {
    //     if (this.i > 60) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}