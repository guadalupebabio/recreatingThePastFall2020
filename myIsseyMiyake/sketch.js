let video;
let poseNet;
let pose;
let skeleton;
let radEllipse;
let font, fontsize = 20;

function setup() {
  createCanvas(400, 700);
  //video = createCapture(VIDEO);
  video = createVideo('fashionshow.mov', videoLoad);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  radEllipse = 9;
  background(0);
  noStroke();
  
  // Set text characteristics
  //textFont(font);
  textSize(fontsize);
  //textAlign(CENTER, CENTER);
  textFont('Helvetica Bold');
  
}

function gotPoses(poses) {
  //console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  //image(video, 0, 0,400,700);
  background(0);
  
  fig_1();
  //fig_2();
  //letters();
  
}

//Fig1
function fig_1(){
    if (pose){
    fill(255,255,255);
    ellipse(pose.rightAnkle.x/2, pose.rightAnkle.y/2,radEllipse);
    ellipse(pose.nose.x/2, pose.nose.y/2,radEllipse);
    ellipse(pose.leftAnkle.x/2, pose.leftAnkle.y/2,radEllipse);
    ellipse(pose.rightShoulder.x/2, pose.rightShoulder.y/2,radEllipse);
    ellipse(pose.leftShoulder.x/2, pose.leftShoulder.y/2,radEllipse);
    ellipse(pose.rightElbow.x/2, pose.rightElbow.y/2,radEllipse);
    ellipse(pose.leftElbow.x/2, pose.leftElbow.y/2,radEllipse);
    ellipse(pose.rightWrist.x/2, pose.rightWrist.y/2,radEllipse);
    ellipse(pose.leftWrist.x/2, pose.leftWrist.y/2,radEllipse);
    ellipse(pose.rightHip.x/2, pose.rightHip.y/2,radEllipse);
    ellipse(pose.leftHip.x/2, pose.leftHip.y/2,radEllipse);
    ellipse(pose.rightKnee.x/2, pose.rightKnee.y/2,radEllipse);
    ellipse(pose.leftKnee.x/2, pose.leftKnee.y/2,radEllipse);
    stroke(255);
    line(pose.rightAnkle.x/2, pose.rightAnkle.y/2, pose.nose.x/2, pose.nose.y/2);
    line(pose.nose.x/2, pose.nose.y/2, pose.leftAnkle.x/2, pose.leftAnkle.y/2);
    line(pose.rightShoulder.x/2, pose.rightShoulder.y/2,pose.leftShoulder.x/2, pose.leftShoulder.y/2);
    line(pose.rightElbow.x/2, pose.rightElbow.y/2,pose.leftElbow.x/2, pose.leftElbow.y/2);
    line(pose.rightWrist.x/2, pose.rightWrist.y/2, pose.leftWrist.x/2, pose.leftWrist.y/2);
    line(pose.rightKnee.x/2, pose.rightKnee.y/2,pose.leftKnee.x/2, pose.leftKnee.y/2);
  }
}

//Fig2
function fig_2(){
    if (pose){
    fill(255,255,255);
    ellipse(pose.rightAnkle.x/2, pose.rightAnkle.y/2,radEllipse);
    ellipse(pose.nose.x/2, pose.nose.y/2,radEllipse);
    ellipse(pose.leftAnkle.x/2, pose.leftAnkle.y/2,radEllipse);
    ellipse(pose.rightShoulder.x/2, pose.rightShoulder.y/2,radEllipse);
    ellipse(pose.leftShoulder.x/2, pose.leftShoulder.y/2,radEllipse);
    ellipse(pose.rightElbow.x/2, pose.rightElbow.y/2,radEllipse);
    ellipse(pose.leftElbow.x/2, pose.leftElbow.y/2,radEllipse);
    ellipse(pose.rightWrist.x/2, pose.rightWrist.y/2,radEllipse);
    ellipse(pose.leftWrist.x/2, pose.leftWrist.y/2,radEllipse);
    ellipse(pose.rightHip.x/2, pose.rightHip.y/2,radEllipse);
    ellipse(pose.leftHip.x/2, pose.leftHip.y/2,radEllipse);
    ellipse(pose.rightKnee.x/2, pose.rightKnee.y/2,radEllipse);
    ellipse(pose.leftKnee.x/2, pose.leftKnee.y/2,radEllipse);
    stroke(255);
    line(pose.rightAnkle.x/2, pose.rightAnkle.y/2, pose.nose.x/2, pose.nose.y/2);
    line(pose.nose.x/2, pose.nose.y/2, pose.leftAnkle.x/2, pose.leftAnkle.y/2);
      
    line(pose.rightShoulder.x/2, pose.rightShoulder.y/2,pose.rightElbow.x/2, pose.rightElbow.y/2);
    line(pose.leftShoulder.x/2, pose.leftShoulder.y/2,pose.leftElbow.x/2, pose.leftElbow.y/2);
      
      line(pose.rightElbow.x/2, pose.rightElbow.y/2,pose.rightHip.x/2, pose.rightHip.y/2);
      line(pose.leftElbow.x/2, pose.leftElbow.y/2, pose.leftHip.x/2, pose.leftHip.y/2);
      
      line(pose.rightHip.x/2, pose.rightHip.y/2, pose.rightWrist.x/2, pose.rightWrist.y/2);
      line(pose.leftHip.x/2, pose.leftHip.y/2, pose.leftWrist.x/2, pose.leftWrist.y/2);
      
      
    line(pose.rightWrist.x/2, pose.rightWrist.y/2, pose.rightKnee.x/2, pose.rightKnee.y/2);
      line(pose.leftWrist.x/2, pose.leftWrist.y/2,pose.leftKnee.x/2, pose.leftKnee.y/2);

  }
}

//letters
function letters(){
    if (pose){
    let mouthx = pose.nose.x/2
    let mouthy = (pose.nose.y/2 + pose.leftShoulder.y/2)/2
    fill(255,255,255);
    text('S',mouthx, mouthy);
    text('I',pose.nose.x/2, pose.nose.y/2);
    text('S',pose.rightShoulder.x/2, pose.rightShoulder.y/2);
    ellipse(pose.leftShoulder.x/2, pose.leftShoulder.y/2,radEllipse);
    ellipse(pose.rightElbow.x/2, pose.rightElbow.y/2,radEllipse);
    text('E',pose.leftElbow.x/2, pose.leftElbow.y/2,radEllipse);
    text('I',pose.rightWrist.x/2, pose.rightWrist.y/2,radEllipse);
    text('Y',pose.leftWrist.x/2, pose.leftWrist.y/2);
    ellipse(pose.rightHip.x/2, pose.rightHip.y/2,radEllipse);
    text('M',pose.leftHip.x/2, pose.leftHip.y/2);
    ellipse(pose.rightKnee.x/2, pose.rightKnee.y/2,radEllipse);
    text('A',pose.leftKnee.x/2, pose.leftKnee.y/2);
    text('K',pose.rightAnkle.x/2, pose.rightAnkle.y/2);
    text('E',pose.leftAnkle.x/2, pose.leftAnkle.y/2);
      
   

  }
}

function videoLoad() {
  video.stop();
  video.loop();
  videoIsPlaying = true;
}