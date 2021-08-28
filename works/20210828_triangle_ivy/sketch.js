
let v_a, v_b, v_c;
let vs = [];

function setup() {
    createCanvas(600, 600);
    background(200);

    fill(0);
    let INITIAL_SIDES_LENGHT = 10
    v_a = createVector(-INITIAL_SIDES_LENGHT, 0);
    v_b = createVector(0, -INITIAL_SIDES_LENGHT * Math.sqrt(3));
    v_c = createVector(INITIAL_SIDES_LENGHT, 0);
    vs = [v_a, v_b, v_c];
}


function draw() {
    translate(width / 2, height / 2);
    beginShape();
    vertex(vs[0].x, vs[0].y);
    vertex(vs[1].x, vs[1].y);
    vertex(vs[2].x, vs[2].y);
    endShape();

    let pick_id, v_tmp_old, v_tmp_new;
    pick_id = parseInt(2 * Math.random());
    v_tmp_old = vs[pick_id];
    vs.splice(pick_id, 1);
    // Flip the triangle
    v_tmp_new = p5.Vector.sub(p5.Vector.add(vs[0], vs[1]), v_tmp_old);
    v_tmp_new = v_tmp_new.mult(0.999);
    vs.push(v_tmp_new);
}