nosex=0;
nosey=0;
clownnoseimg; 

function preload(){
    clownnoseimg=loadImage("https://i.postimg.cc/DZjmcBNd/clown-nose-clipart-2-1.png");

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO)
video.hide();
video.size(300,300)
posenet=ml5.poseNet(video,modeloaded)
posenet.on('pose',gotresults)

}

function draw(){
    image(video,0,0,300,300);
    stroke(255,0,0);
    fill(255,0,0);
    circle(nosex,nosey,20);
    image(clownnoseimg,nosex-15,nosey-15,30,30);
}

function takesnapshot(){
    save('selfie.png');                 
}

function modeloaded(){
    console.log("posenet is initialized");
}

function gotresults(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}