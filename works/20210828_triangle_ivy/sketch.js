
let ivy_arr = []

function setup() {
    createCanvas(600, 600);
    background(200);

    ivy_arr[0] = new Ivy(width / 2, height / 2, 4);
}

function draw() {
    for (let i = 0; i < ivy_arr.length; i++) {
        ivy_arr[i].display();
        ivy_arr[i].update();
        if (ivy_arr[i].isDead()) {
            ivy_arr.splice(i, 1);
        }
    }
    
    if (mouseIsPressed) {
        ivy_arr.push(new Ivy(mouseX, mouseY, 4));
    }
}