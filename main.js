NoseX=0
NoseY=0
leftWristX=0
rightWristX=0
difference=0

function preload(){}

function setup(){
    video=createCapture(VIDEO);
    video.size(300,300);
    video.position(850,250);
    
    canvas=createCanvas(300,300);
    canvas.position(500,250);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

document.getElementById("h123").innerHTML="The size of the square is "+difference+"px";

function draw(){

    background("#079af0");
    
    fill("#edb458");
    stroke("#edb458")
    square(NoseX,NoseY,difference);
  }

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log("Nose X is"+NoseX+" "+"Nose Y is"+NoseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftwrist X is"+leftWristX+" "+"rightWrist X is"+rightWristX);
        difference=floor(rightWristX-leftWristX);

    }
}