function preload(){}

function setup() {
    var canvas = createCanvas(700,500);
    canvas.position(200,280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    circle(40,40,70);
    rect(75,25,230,30);
    circle(660,40,70);
    rect(395,25,230,30);
    rect(300,15,100,55,20);

    circle(40,460,70);
    rect(75,445,230,30);
    circle(660,460,70);
    rect(395,445,230,30);
    rect(300,435,100,55,20);
}

function take_snapshot() {
    save("my_filtered_image.png");
}