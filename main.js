RightWristX = 0;
LeftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550)
    canvas = createCanvas(550,550);
    canvas.position(1000,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background("steelblue");
    document.getElementById("text_size").innerHTML = "Width and Height of the text is - " + difference+"px";
    textSize(difference);
    fill("darkred");
    text("Sarvambh" , 225,225);
}

function modelLoaded() {
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        RightWristX = results[0].pose.rightWrist.x;
        LeftWristX = results[0].pose.leftWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("LeftWristX - " + LeftWristX + "RightWristX - " + RightWristX + "difference - " + difference);
    }
}