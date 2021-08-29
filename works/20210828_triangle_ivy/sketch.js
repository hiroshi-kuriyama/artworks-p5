let colors = ['#09E318', '#B4ED0C', '#D4B000', '#EB900C', '#E63901', '#05785B', '#695700', '#803906', '#820750', '#1E007D'];
let SIZE = 4;
let ivy_arr = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);

    // let col = color(random(colors));
    // ivy_arr[0] = new Ivy(width / 2, height / 2, 4, col);
}

function draw() {
    for (let i = 0; i < ivy_arr.length; i++) {
        ivy_arr[i].display();
        ivy_arr[i].update();
        if (ivy_arr[i].isDead()) {
            ivy_arr.splice(i, 1);
        }
    }

    if (frameCount % 10 == 0) {
        let col = color(random(colors));
        ivy_arr.push(new Ivy(parseInt(width * random()), parseInt(height * random()), SIZE, col));
    }
    
    if (mouseIsPressed) {
        let col = color(random(colors));
        ivy_arr.push(new Ivy(mouseX, mouseY, SIZE, col));
    }
}