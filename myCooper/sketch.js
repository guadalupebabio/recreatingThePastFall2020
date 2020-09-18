let trans =120;//transparency for fill

function setup() {
  createCanvas(600, 600);
  textSize(width / 5);
}

function draw() {
  background(255);
  trans = mouseX;
  blendMode(DARKEST);
  
  fill(trans, trans, trans,trans);
  text('BAUHAUS', 0, 100,70);
  fill(255, 204, 0,trans);
  text('BAUHAUS', 0, 110,70);
  
  fill(255, 70, 20,trans);
  text('BAUHAUS', 0, 120,70);
  fill(255, 70, 20,trans);
  text('BAUHAUS', 0, 130,70);
  
  fill(0, 130, 255, trans);
  text('BAUHAUS', 0, 140,70);
  fill(0, 130, 255, trans);
  text('BAUHAUS', 0, 150,70);
  blendMode(BLEND);
}