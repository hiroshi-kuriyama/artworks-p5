/*
いくつかのピクセルを確率的に抽出してその場所を母点としてボロノイ図を作成。セルの色は母点の色を使う。
明度が低いピクセルほど高確率で抽出されるようにする。
library: https://github.com/Dozed12/p5.voronoi
*/


let img;
let img_path = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg/335px-Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg'
function preload() {
    img = loadImage(img_path);    // 色抽出用の画像
}

let ALHPA = 1.0 // 抽出確率を決める閾値1
let BETA = 0.15 // 抽出確率を決める閾値2
let site_arr = []
function setup() {
    background(255);
    img.resize(img.width, img.height);
    createCanvas(img.width, img.height);    // 画面を画像の比に合わせる
    noSmooth();
    
    let x, y;
    let col, pick_prob_param;
    for (x = 0; x < img.width; x++){
        for (y = 0; y < img.height; y++){
            col = img.get(x, y);
            pick_prob_param = random() * (brightness(col) ** ALHPA);  //抽出確率のパラメータ
            // console.log(pick_prob_alpha);
            if (pick_prob_param < BETA) {   // 閾値以下の場合に色とピクセル位置を記録
                site_arr.push([x, y, col]);
            }
        }
    }
}

function draw() {
    if (mouseIsPressed) {
        image(img, 0, 0, width, height);
    } else {
        // 抽出したピクセルを母点としてボロノイ図を作成
        voronoiCellStrokeWeight(0);
        voronoiSiteFlag(false);
        voronoiSites(site_arr);
        voronoi(width, height);
        voronoiDraw(0, 0);
    }
}

