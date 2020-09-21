let trans =120;//transparency for fill
let img;

function setup() {
  createCanvas(466, 751);
  textSize(width / 5);
  img = loadImage('Muriel.jpg');
}

function draw() {
  
  background(253,239,228);

  trans = mouseX; //changes transparency
  blendMode(DARKEST);
  
  textFont('Helvetica Bold', 90);
  
  
  fill(255, 204, 0,trans);
  text('BAUHAUS', 0, 0,70);
  fill(255, 204, 0,trans);
  text('BAUHAUS', 0, 12,70);
  
  fill(255, 70, 20,trans);
  text('BAUHAUS', 0, 24,70);
  fill(255, 70, 20,trans);
  text('BAUHAUS', 0, 36,70);
  
  fill(0, 130, 255, trans);
  text('BAUHAUS', 0, 48,70);
  fill(0, 130, 255, trans);
  text('BAUHAUS', 0,  60,70);
  
  image(img, 0, 0); //load image
  
  blendMode(BLEND);
  
}
