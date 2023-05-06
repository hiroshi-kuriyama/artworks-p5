/* real-time faec tracking with p5.js accroding to
YouTube -> https://www.youtube.com/watch?v=3yqANLRWGLo
GitHub -> https://github.com/Creativeguru97/YouTube_tutorial/tree/master/Play_with_APIs/ml5_faceApi/face-api_videoInput/final
*/

let faceapi;
let detections = [];

let video;
let canvas;

function setup() {
  canvas = createCanvas(480, 360);
  canvas.id("canvas");

  video = createCapture(VIDEO);// Creat the video: ビデオオブジェクトを作る
  video.id("video");
  video.size(width, height);
  video.hide();

  const faceOptions = {
    withLandmarks: true,
    withExpressions: false,
    withDescriptors: false,
    minConfidence: 0.3
  };

  //Initialize the model: モデルの初期化
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function faceReady() {
  faceapi.detect(gotFaces);// Start detecting faces: 顔認識開始
}

function draw(){
    drawBoxs(detections);//Draw detection box: 顔の周りの四角の描画
}

// Got faces: 顔を検知
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result;　//Now all the data in this detections: 全ての検知されたデータがこのdetectionの中に
//   console.log(detections);

  faceapi.detect(gotFaces);// Call the function again at here: 認識実行の関数をここでまた呼び出す
}

function drawBoxs(detections){
  if (detections.length > 0) {//If at least 1 face is detected: もし1つ以上の顔が検知されていたら
    clear();
    tmpShowVideo();
    for (f=0; f < detections.length; f++){
      let {_x, _y, _width, _height} = detections[f].alignedRect._box;
      stroke(44, 169, 225);
      strokeWeight(1);
      noFill();
      drawEye(_x, _y, _width, _height);
      rect(width - (_x + _width), _y, _width, _height);
    }
  }
}

function drawEye(_x, _y, _width, _height){
    circle(width - (_x + _width /  2), _y + _height / 2, 100);
}

function tmpShowVideo(){
    push();
    scale(-1, 1);  // Flip the video horizontally
    image(video, -width, 0, width, height);
    pop();
}