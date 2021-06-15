var rightEarX = 0;
var rightEarY = 0;
var leftEarX = 0;
var leftEarY = 0;
function preload(){
    bunnyleftEar=loadImage('Leftear.png')
    bunnyrightEar=loadImage('rightear.png')
}
function setup(){
    canvas=createCanvas(300,225)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function takeSnapshot(){
    save('myFilterImage.png')
}
function draw(){
    image(video,0,0,300,300);
    image(bunnyleftEar,leftEarX,leftEarY,50,50);
    image(bunnyrightEar,rightEarX,rightEarY,50,50);
}
function modelLoaded(){
    console.log("model is loaded,poseNet is initailaized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("leftEarx="+results[0].pose.leftEar.x);
        console.log("leftEary="+results[0].pose.leftEar.y);
        leftEarX=results[0].pose.leftEar.x-25;
        leftEarY=results[0].pose.leftEar.y-25;
        console.log("rightEarx="+results[0].pose.rightEar.x);
        console.log("rightEary="+results[0].pose.rightEar.y);
        rightEarX=results[0].pose.rightEar.x-25;
        rightEarY=results[0].pose.rightEar.y-25;
    }
}