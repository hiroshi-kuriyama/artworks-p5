/*
https://openprocessing.org/sketch/1269732
:::The back of the beast:::
This was inspired by a movie, Belle (2021 film). 
In the movie a beast has some stains on his back. The pattern was impressive.

『竜とそばかすの姫』に出てくるリュウの背中の模様（痣）を表現しました。
*/
let stains = [];

// 黄色、白、深紅、水色、淡いピンク
let color_palette = ['#FBFFB9', '#ceedff', '#a6172d', '#0e156b', '#FADAD8'];
let size_list = [600, 600, 400, 300, 200];
let order_list = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4];

function setup() {
    createCanvas(800, 800);
    background('#08101E');
}

function draw(){
    for(i = 0; i < stains.length; i++) {
        stains[i].display();
        if(stains[i].isDead()) {
            stains.splice(i, 1);
        }
    }
}

let col_i = 0;
function mousePressed() {
    // set the color and size following to the order_list
    let idx = order_list[col_i];
    let center = [mouseX, mouseY];
    let size = size_list[idx];
    let col = color(color_palette[idx]);
    stains.push(new Stain(center, size, col));
    if(col_i < order_list.length - 1) {
        col_i += 1;
    } else {
        col_i = 0;
    }
}