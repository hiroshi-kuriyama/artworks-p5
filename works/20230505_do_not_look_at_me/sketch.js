/* real-time faec tracking with p5.js accroding to
YouTube -> https://www.youtube.com/watch?v=3yqANLRWGLo
GitHub -> https://github.com/Creativeguru97/YouTube_tutorial/tree/master/Play_with_APIs/ml5_faceApi/face-api_videoInput/final
*/

let faceapi;
let detections = [];

let video;
let canvas;

let pg_1, pg_2;
let eye_width;// width of eye
let palette = ["#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f", "#f2eb8a"];
let pupil_l1_bp = [];// breaking points of pupil layer 1
let pupil_l2_bp = [];// breaking points of pupil layer 2

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("canvas");
  background(0);

  /* Face tracking*/
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

  faceapi = ml5.faceApi(video, faceOptions, faceReady);//Initialize the model: モデルの初期化

  /* Eye design */
  eye_width = width * (2 / 3);
  pg_1 = createGraphics(width, height);// for drawPupil()
  pg_2 = createGraphics(width, height);// for drawEyelids()

  palette = shuffle(palette, true);
  pupil_l_color_num = 5;
  for(i=0;i<pupil_l_color_num;i++){
      pupil_l1_bp[i] = random(0, TWO_PI);
  }
  pupil_l1_bp = sort(pupil_l1_bp);
  pupil_l1_bp[pupil_l_color_num] = pupil_l1_bp[0];

  for(i=0;i<pupil_l_color_num;i++){
      pupil_l2_bp[i] = random(0, TWO_PI);
  }
  pupil_l2_bp = sort(pupil_l2_bp);
  pupil_l2_bp[pupil_l_color_num] = pupil_l2_bp[0]; 
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
    background(0);

    // tmpShowVideo();

    let {_x, _y, _width, _height} = detections[0].alignedRect._box;
    _x = width - (_x + _width);// Flip the bounding box position horizontally like a mirror

    /* pupil */
    face_center_x = _x + _width / 2;
    face_center_y = _y + _height / 2;
    pupil_center_x =  width/2 + (face_center_x/width-1/2)*eye_width*(sqrt(2)-1);// Restrict the area pupil position can move.
    pupil_center_y = height/2 + (face_center_y/height-1/2)*eye_width*(sqrt(2)-1);
    drawPupil(pupil_center_x, pupil_center_y);
    /* eyelids */
    drawEyelids();
  }
}

function drawPupil(pupil_center_x, pupil_center_y){
  /* pupil layer 1 */
  pg_1.clear();
  pg_1.noStroke();
  for(i=0;i<pupil_l1_bp.length-1;i++){// make a circle like pizza cut
      pg_1.fill(palette[i]);
      pg_1.arc(pupil_center_x, pupil_center_y, eye_width*(sqrt(2)-1), eye_width*(sqrt(2)-1), pupil_l1_bp[i], pupil_l1_bp[i+1]);
  }

  /* pupil layer 2 */
  for(i=0;i<pupil_l2_bp.length-1;i++){// make a circle like pizza cut smaller than layer 1
      pg_1.fill(palette[i+pupil_l_color_num]);
      pg_1.arc(pupil_center_x, pupil_center_y, eye_width*(sqrt(2)-1)*2/3, eye_width*(sqrt(2)-1)*2/3, pupil_l2_bp[i], pupil_l2_bp[i+1]);
  }

  /* center of pupil */
  pg_1.fill(0);
  pg_1.ellipse(pupil_center_x, pupil_center_y, eye_width*(sqrt(2)-1)/3);
  image(pg_1, 0, 0);
}

function drawEyelids(){
  pg_2.background(0);
  /* Outer line of eyelids */
  pg_2.noStroke();
  pg_2.fill(palette[palette.length-1]);// Upper eyelid
  pg_2.arc(width/2, (height-eye_width)/2, eye_width*sqrt(2), eye_width*sqrt(2), (1/4)*PI, (3/4)*PI, OPEN);
  pg_2.fill(palette[palette.length-2]);// Lower eyelid
  pg_2.arc(width/2, (height+eye_width)/2, eye_width*sqrt(2), eye_width*sqrt(2), (5/4)*PI, (7/4)*PI, OPEN);

  /* Inner line of eyelids */
  pg_2.erase();
  pg_2.arc(width/2, (height-eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (1/3)*PI, (2/3)*PI, OPEN);// Upper eyelid
  pg_2.arc(width/2, (height+eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (4/3)*PI, (5/3)*PI, OPEN);// Lower eyelid
  pg_2.noErase();

  image(pg_2, 0, 0);
}

function tmpShowVideo(){
    push();
    scale(-1, 1);  // Flip the video horizontally like a mirror
    image(video, -width, 0, width, height);
    pop();
}

