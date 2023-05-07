/*
tmp file to check the eye design
*/

let eye_width;// width of eye

function setup(){
    createCanvas(480, 360);
    background(0);
    noFill();
    stroke(255)
    rect(0, 0, width, height);

    // circle(width/2, height/2, 40);

    eye_width = width * (2 / 3);

    arc(width/2, (height-eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (1/3)*PI, (2/3)*PI);
    arc(width/2, (height+eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (4/3)*PI, (5/3)*PI);

    arc(width/2, (height-eye_width)/2, eye_width*2/sqrt(2), eye_width*2/sqrt(2), (1/4)*PI, (3/4)*PI);
    arc(width/2, (height+eye_width)/2, eye_width*2/sqrt(2), eye_width*2/sqrt(2), (5/4)*PI, (7/4)*PI);



}

function draw(){
    
}