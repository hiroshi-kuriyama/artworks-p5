/*
tmp file to check the eye design
*/

let eye_width;// width of eye

// let palette = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
let palette = ["#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"];
let pupil_l1_bp = [];// breaking points
let pupil_l2_bp = [];// breaking points

function setup(){
    createCanvas(480, 360);
    background(0);
    noFill();
    stroke(255)
    rect(0, 0, width, height);

    eye_width = width * (2 / 3);


    /* pupil */
    palette = shuffle(palette, true);
    noStroke();
    for(i=0;i<5;i++){
        pupil_l1_bp[i] = random(0, TWO_PI);
    }
    pupil_l1_bp = sort(pupil_l1_bp);
    pupil_l1_bp[pupil_l1_bp.length] = pupil_l1_bp[0];
    for(i=0;i<pupil_l1_bp.length-1;i++){
        fill(palette[i]);
        arc(width/2, height/2, eye_width*(sqrt(2)-1), eye_width*(sqrt(2)-1), pupil_l1_bp[i], pupil_l1_bp[i+1]);
    }

    for(i=0;i<4;i++){
        pupil_l2_bp[i] = random(0, TWO_PI);
    }
    pupil_l2_bp = sort(pupil_l2_bp);
    pupil_l2_bp[pupil_l2_bp.length] = pupil_l2_bp[0];
    for(i=0;i<pupil_l2_bp.length-1;i++){
        fill(palette[i+5]);
        arc(width/2, height/2, eye_width*(sqrt(2)-1)*2/3, eye_width*(sqrt(2)-1)*2/3, pupil_l2_bp[i], pupil_l2_bp[i+1]);
    }

    fill(0);
    circle(width/2, height/2, eye_width*(sqrt(2)-1)/3);



    // /* Outer line of eyelids */
    // noStroke();
    // fill(255, 0, 0);
    // arc(width/2, (height-eye_width)/2, eye_width*sqrt(2), eye_width*sqrt(2), (1/4)*PI, (3/4)*PI, OPEN);
    // fill(0, 255, 0);
    // arc(width/2, (height+eye_width)/2, eye_width*sqrt(2), eye_width*sqrt(2), (5/4)*PI, (7/4)*PI, OPEN);

    // /* Inner line of eyelids */
    // erase();
    // arc(width/2, (height-eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (1/3)*PI, (2/3)*PI, OPEN);
    // arc(width/2, (height+eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (4/3)*PI, (5/3)*PI, OPEN);
    // noErase();





}

function draw(){
    
}