

let u_init, v_init, R, r;
function setup() {
    createCanvas(800, 800, WEBGL);
    background(0);
    u_init = random(2 * PI);
    v_init = random(2 * PI);
    R = 300;
    r = 50;
}



function draw(){
    rotateX(PI / 8);
    rotateZ(PI / 8);
    let u, v;
    u = (u_init + millis() / 2500);
    v = (v_init + millis() / 1000);
    let pos = [];
    pos = torus_surf(u, v, R, r);
    translate(pos[0], pos[1], pos[2]);

    fill(0, 100, 255, 123);
    noStroke();
    ambientLight(50);
    directionalLight(255, 255, 255, -1, 0, -1);
    ambientMaterial(122);
    specularMaterial(250);
    sphere(3);
    
    camera(sin(frameCount * 0.01) * 800, 0, cos(frameCount * 0.01) * 800, 0, 0, 0, 0, 1, 0);
}

function torus_surf(u, v, R, r) {
    let x, y, z;
    x = (R + r * cos(u)) * cos(v);
    y = (R + r * cos(u)) * sin(v);
    z = r * sin(u);
    return [x, y, z];
}