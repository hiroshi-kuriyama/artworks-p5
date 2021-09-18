class Stain {
    constructor(center, num_vertex, len_outer, len_inner) {
        this.center = center;
        this.num_vertex = num_vertex;
        this.len_outer = len_outer;
        this.len_inner = len_inner;
        this.outer_points = [];
        this.inner_points = [];
        this.theta_init = random(2 * PI);
        this.theta_tmp = this.theta_init;
    }

    get_dots() {
        while (this.theta_tmp < this.theta_init + 2 * PI) {
            let x_o, y_o, x_i, y_i;
            x_o = this.center[0] + this.len_outer * cos(this.theta_tmp);
            y_o = this.center[1] + this.len_outer * sin(this.theta_tmp);
            this.outer_points.push([x_o, y_o]);
            let theta_tmp_next, theta_inner;
            theta_tmp_next = this.theta_tmp + random(2 * PI / NUM_VERTEX);
            theta_inner = random(this.theta_tmp, theta_tmp_next);
            x_i = this.center[0] + this.len_inner * cos(theta_inner);
            y_i = this.center[1] + this.len_inner * sin(theta_inner);
            this.inner_points.push([x_i, y_i]);
            this.theta_tmp = theta_tmp_next;
        }
    }

    display() {
        for (let i = 0; i < this.outer_points.length; i++) {
            let p1, p2, p3;
            p1 = this.outer_points[i];
            p2 = this.inner_points[i];
            if (i + 1 < this.outer_points.length) {
                p3 = this.outer_points[i + 1];
            } else {
                p3 = this.outer_points[0];
            }
            this.plot_control_points(p1, p2, p3);
            this.bezier_curve(p1, p2, p3);
        }
    }

    bezier_curve(p1, p2, p3) {
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

    plot_control_points(p1, p2, p3) {
        noStroke();
        fill('red');
        ellipse(p1[0], p1[1], 10);
        ellipse(p2[0], p2[1], 10);
        ellipse(p3[0], p3[1], 10);
    }
}