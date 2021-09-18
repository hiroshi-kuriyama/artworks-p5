// let CENTER = [400, 400];
function setup() {
    createCanvas(800, 800);
    background(0);
    // let stain = new Stain(CENTER, 600, color('yellow'));
    // stain.display();
}

function draw(){
    if(frameCount % 60 == 1) {
        let center = [random(width), random(height)];
        let size = random(200, 600)
        let stain = new Stain(center, size, color('yellow'))
        stain.display();
    }
}