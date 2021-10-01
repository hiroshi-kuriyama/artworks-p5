

let u_init, v_init, R, r;
function setup() {
    createCanvas(800, 800, WEBGL);
    background(0);
    u_init = random(2 * PI);
    v_init = random(2 * PI);
    R = 250;
    r = 100;
}


let t = 0;
function draw(){
    t += 1
    let u, v;
    u = (u_init + t / 13);
    v = (v_init + t / 17);
    let pos = [];
    pos = torus_surf(u, v, R, r);
    translate(pos[0], pos[1], pos[2]);

    fill(0, 100, 255, 123);
    noStroke();
    ambientLight(50);
    directionalLight(255, 255, 255, -1, 0, -1);
    ambientMaterial(122);
    specularMaterial(0, 100, 255, 100 + 50 * sin(u));
    sphere(3);
}

function torus_surf(u, v, R, r) {
    let x, y, z;
    x = (R + r * cos(u)) * cos(v);
    y = (R + r * cos(u)) * sin(v);
    z = r * sin(u);
    return [x, y, z];
}