class Ivy {
    constructor(x, y, side_len, col) {
        // triangle vertexes
        this.tri_v = [
            createVector(x - side_len / 2, y)
            , createVector(x + side_len, y)
            , createVector(x, y - side_len * Math.sqrt(3))
        ];
        this.col = col
        this.lifespan = 300;
    }

    display() {
        fill(this.col);
        stroke(255);
        beginShape();
        vertex(this.tri_v[0].x, this.tri_v[0].y);
        vertex(this.tri_v[1].x, this.tri_v[1].y);
        vertex(this.tri_v[2].x, this.tri_v[2].y);
        endShape();
    }

    update() {
        let pick_id, v_tmp_old, v_tmp_new;
        pick_id = parseInt(2 * Math.random());
        v_tmp_old = this.tri_v[pick_id];
        this.tri_v.splice(pick_id, 1);
        // Flip the triangle
        v_tmp_new = p5.Vector.sub(p5.Vector.add(this.tri_v[0], this.tri_v[1]), v_tmp_old);
        // v_tmp_new = v_tmp_new.mult(0.999);
        this.tri_v.push(v_tmp_new);

        this.lifespan -= 1
    }

    isDead() {
        if(this.lifespan < 0) {
            return true;
        }
        else {
            return false;
        }
    }
}