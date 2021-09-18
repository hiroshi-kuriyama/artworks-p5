let color_palette = ['#FBFFB9', '#fffff5', '#2b90d9', '#a6172d', '#FADAD8'];
// 黄色、白、水色、深紅、淡いピンク

// let CENTER = [400, 400];
function setup() {
    createCanvas(800, 800);
    background('#08101E');
    // let stain = new Stain(CENTER, 600, color('yellow'));
    // stain.display();
}

let num = 10;

function draw(){
    if(frameCount % 60 == 1) {
        let center = [random(width), random(height)];
        let size = random(50, 600);
        let col = random(color_palette);
        let stain = new Stain(center, size, col);
        stain.display();
    }
}