let color_palette = ['#FBFFB9', '#fffff5', '#2b90d9', '#a6172d', '#FADAD8'];
// 黄色、白、水色、深紅、淡いピンク

let stains = [];

function setup() {
    createCanvas(800, 800);
    background('#08101E');
    // let CENTER = [400, 400];
    // let stain = new Stain(CENTER, 600, color('yellow'));
    // stain.display();
}

function draw(){
    if(stains.length > 0) {
        stains[0].display();
        stains.shift();
    }
}

function mousePressed() {
    let center = [mouseX, mouseY];
    let size = random(50, 600);
    let col = random(color_palette);
    stains.push(new Stain(center, size, col));
}