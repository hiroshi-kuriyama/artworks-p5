// 黄色、白、深紅、水色、淡いピンク
let color_palette = ['#FBFFB9', '#ceedff', '#a6172d', '#2b90d9', '#FADAD8'];
let size_list = [600, 600, 400, 300, 200];
let order_list = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4];

let stains = [];

function setup() {
    createCanvas(800, 800);
    background('#08101E');
    // let center = [400, 400];
    // let stain = new Stain(center, 600, color('yellow'));
    // stain.display();
}

function draw(){
    if(stains.length > 0) {
        stains[0].display();
        stains.shift();
    }
}

let i = 0;
function mousePressed() {
    let idx = order_list[i];
    let center = [mouseX, mouseY];
    let size = size_list[idx];
    let col = color_palette[idx];
    stains.push(new Stain(center, size, col));
    if(i < order_list.length - 1) {
        i += 1;
    } else {
        i = 0;
    }
}