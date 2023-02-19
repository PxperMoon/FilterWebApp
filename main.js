NoseX = 0;
NoseY = 0;

function preload() {
    lipstick = loadImage('glossy-lipss-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    background("white");
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized.");
} 

function draw() {
    image(video, 0, 0, 300, 300);

    image(lipstick, NoseX-31, NoseY, 70, 70);
}

function take_snapshot() {

}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;

        console.log("nose x = " + NoseX);
        console.log("nose y = " + NoseY);
    }
}
