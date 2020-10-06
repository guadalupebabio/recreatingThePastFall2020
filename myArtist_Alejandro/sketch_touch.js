let distances = [];
let maxDistance;
let spacer;
let xoff = 0.0;
let xincrement = 0.01;
let myrcolor=[];
let mybcolor=[];
let mygcolor=[];

function setup() {
  createCanvas(600, 600);
  maxDistance = dist(width / 2, height / 2, width, height);
  spacer = 8;
  
  for (let x = 0; x < width; x++) {
      let distance = dist(width / 2, height / 2, x);
      distances[x] = (distance / maxDistance) * 255;
  }

  for (let x = 0; x < width; x ++) {
    myrcolor.push(random(0, 255));
    mygcolor.push(random(0, 255));
    mybcolor.push(random(0, 255));
  }   
}

function draw() {
  background(0);
  randomSeed(99);
  for (let x = 0; x < width; x += spacer) {
    push();
    let num = Math.abs(mouseX - x);
      if (num < 40) {
        fill (myrcolor[x], mygcolor[x], mybcolor[x]);
        //scale(1,2);
        translate(0, (mouseY-(height/num)-random(0,50)));
        rect(x + spacer / 2, 0, 4, height/num*6);
      } 
    /*fill (myrcolor[x], mygcolor[x], mybcolor[x]);
    rect(x + spacer / 2, 0, 4, height);*/
    pop();
  }
}