function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet (video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');

}


function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "width And Height of a square will be = " + difference +"px";
    fill('#F90093');
stroke('#f90093');
square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"nosey = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor (leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);

    }
}