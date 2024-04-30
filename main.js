noseX=0;
noseY=0;
function preload(){
mustache=loadImage("m.png")
}

function setup(){   
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose" , gotPoses);
}
function modelLoaded(){
    console.log("posent loaded")
}

function draw(){
image(video , 0 , 0 ,300 , 300);
image(mustache , noseX , noseY, 40 , 30)
}

function gotPoses(result){
noseX=result[0].pose.nose.x-17;
noseY=result[0].pose.nose.y+6;
console.log(noseX);
console.log(noseY);
}
