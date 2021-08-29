let colors = ['#f0101c', '#f05697', '#0b469b', '#32b6c3', '#f78000', '#fddf0e', '#9fe063', '#315423', '#16141b'];
let ivy_arr = [];

function setup() {
    createCanvas(600, 600);
    background(200);

    let col = color(random(colors));
    ivy_arr[0] = new Ivy(width / 2, height / 2, 4, col);
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
        let col = color(random(colors));
        ivy_arr.push(new Ivy(mouseX, mouseY, 4, col));
    }
}