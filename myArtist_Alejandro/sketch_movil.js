let xoff = 0.0;
let xincrement = 0.01;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  
}

function draw() {
  //background(220);
  let c = color(0, 100, 120);
  
  // Create an alpha blended background
  fill(0, 10);
  rect(0, 0, width, height);

  // Get a noise value based on xoff and scale
  // it according to the window's width
  let n = noise(xoff) * width;

  // With each cycle, increment xoff
  xoff += xincrement;
  
  
  push();
  fill(c);
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  rect( 0, -(155/2), 2, 155, 10);
  pop();
  
  push();
  fill(c);
  translate(width * 0.7, height * 0.7);
  rotate(frameCount / 50.0);
  rect( 0, -(155/2), 2, 155, 10);
  pop();
  
  push();
  fill(c);
  translate(width * 0.3, height * 0.3);
  rotate(frameCount / 50.0);
  rect( 0, -(155/2), 2, 155, 10);
  pop();
  
}