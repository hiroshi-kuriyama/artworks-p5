/*
tmp file to check the eye design
*/
let pg_1, pg_2;
let eye_width;// width of eye

// let palette = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
let palette = ["#f2eb8a", "#fed000", "#fc8405", "#ed361a", "#e2f0f3", "#b3dce0", "#4464a1", "#ffc5c7", "#f398c3", "#cf3895", "#6d358a", "#06b4b0", "#4b8a5f"];
let pupil_l1_bp = [];// breaking points of pupil layer 1
let pupil_l2_bp = [];// breaking points of pupil layer 2

function setup(){
    createCanvas(480, 360);

    pg_1 = createGraphics(width, height);
    pg_2 = createGraphics(width, height);

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

function draw(){
    clear();
    background(0);

    eye_width = width * (2 / 3);

    /* pupil */
    pupil_center_x = mouseX;
    pupil_center_y = mouseY;
    drawPupil(pupil_center_x, pupil_center_y);

    /* eyelids */
    drawEyelids();
}

function drawPupil(pupil_center_x, pupil_center_y){
    /* pupil layer 1 */
    pg_1.noStroke();
    for(i=0;i<pupil_l1_bp.length-1;i++){
        pg_1.fill(palette[i]);
        pg_1.arc(pupil_center_x, pupil_center_y, eye_width*(sqrt(2)-1), eye_width*(sqrt(2)-1), pupil_l1_bp[i], pupil_l1_bp[i+1]);
    }

    /* pupil layer 2 */

    for(i=0;i<pupil_l2_bp.length-1;i++){
        pg_1.fill(palette[i+pupil_l_color_num]);
        pg_1.arc(pupil_center_x, pupil_center_y, eye_width*(sqrt(2)-1)*2/3, eye_width*(sqrt(2)-1)*2/3, pupil_l2_bp[i], pupil_l2_bp[i+1]);
    }

    /* center of pupil */
    pg_1.fill(0);
    pg_1.ellipse(pupil_center_x, pupil_center_y, eye_width*(sqrt(2)-1)/3);
    
    image(pg_1, 0, 0);
    pg_1.clear();
}

function drawEyelids(){
    pg_2.background(0);
    /* Outer line of eyelids */
    pg_2.noStroke();
    pg_2.fill(palette[palette.length-1]);
    pg_2.arc(width/2, (height-eye_width)/2, eye_width*sqrt(2), eye_width*sqrt(2), (1/4)*PI, (3/4)*PI, OPEN);
    pg_2.fill(palette[palette.length-2]);
    pg_2.arc(width/2, (height+eye_width)/2, eye_width*sqrt(2), eye_width*sqrt(2), (5/4)*PI, (7/4)*PI, OPEN);

    /* Inner line of eyelids */
    pg_2.erase();
    pg_2.arc(width/2, (height-eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (1/3)*PI, (2/3)*PI, OPEN);
    pg_2.arc(width/2, (height+eye_width*sqrt(3))/2, eye_width*2, eye_width*2, (4/3)*PI, (5/3)*PI, OPEN);
    pg_2.noErase();

    image(pg_2, 0, 0);
}