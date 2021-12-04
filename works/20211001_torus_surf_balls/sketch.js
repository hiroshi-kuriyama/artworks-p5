

let u_init, v_init, R, r, a, b;
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    u_init = random(2 * PI);
    v_init = random(2 * PI);
    R = min(windowWidth, windowHeight / 4);
    r = min(windowWidth, windowHeight / 8);
    n = int(random(3, 8));
    m = random_non_divisor(n);
}


let t = 0;
function draw(){
    for (let i = 0; i < 100; i++) {
        push();
        t += 1
        let u, v;
        u = (u_init + t / m);
        v = (v_init + t / n);
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
        pop();
    }
}

function torus_surf(u, v, R, r) {
    let x, y, z;
    x = (R + r * cos(u)) * cos(v);
    y = (R + r * cos(u)) * sin(v);
    z = r * sin(u);
    return [x, y, z];
}

function random_non_divisor(n) {
    let m = int(random(2, n));
    while(n % m == 0) {
        m = int(random(2, n));
    }
    return m;
}