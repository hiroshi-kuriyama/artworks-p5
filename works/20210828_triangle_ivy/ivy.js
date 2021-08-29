class Ivy {
    constructor(x, y, size, col) {
        this.col = col
        this.lifespan = 300;
        // triangle vertexes
        this.tri_v = []
        let rnd = random(0, 2 * PI);
        for (let i = 0; i < 3; i++) {
            this.tri_v[i] = createVector(
                x + size * sin((i + 1) * ((2 * PI) / 3) + rnd), 
                y + size * cos((i + 1) * ((2 * PI) / 3) + rnd)
                );
        }
    }

    display() {
        fill(this.col);
        stroke(255);
        // draw a triangle
        beginShape();
        vertex(this.tri_v[0].x, this.tri_v[0].y);
        vertex(this.tri_v[1].x, this.tri_v[1].y);
        vertex(this.tri_v[2].x, this.tri_v[2].y);
        endShape();
    }

    update() {
        // Flip the triangle
        /*
        Flip a triangle
        1. pick up a vertx (we call the vertex as v_tmp_old, the other two vertexes as v_A, v_B.)
        2. flip the triangle around the line which connects v_A and v_B
        3. So the new vertex, v_tmp_new is ((v_A + v_B) - v_tmp_old)
        */
        let pick_id, v_tmp_old, v_tmp_new;
        pick_id = parseInt(2 * random());
        v_tmp_old = this.tri_v[pick_id];
        this.tri_v.splice(pick_id, 1);
        v_tmp_new = p5.Vector.sub(
            p5.Vector.add(this.tri_v[0], this.tri_v[1]),
             v_tmp_old
             );
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