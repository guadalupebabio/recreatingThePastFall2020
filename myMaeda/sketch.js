let cx, cy;
let angleSeg = 0.0;
let angleMin = 0.0;
let angleHour = 0.0;
let myFont;

function setup() {
  createCanvas(720, 400);

  cx = width / 2;
  cy = height / 2;
  //textFont(inconsolata);
  //textSize(width / 10); //individually per text
  textAlign(CENTER, CENTER);
  myFont = loadFont('Retro Gaming.ttf');
}

function draw() {
  background(180);  
  //blendMode(LIGHTEST); //if uncomented everything disappears
  
  textFont(myFont);
  
  //Hours_Part 3
  push(); // Start a new drawing state
  textSize(width / 4);
  //angle parameters that are values between 0 and 360
  if (hour <= 12) {
        angleHour = hour() *(360/30); //div by num of hours
      } else {
        angleHour = (hour()-12)*(360/12); //div by num of hours
      }
  //move the shape to the center of the canvas
  translate(cx, cy);
  //apply the final rotation in radians() to convert your values
  rotate(radians(angleHour));
  //object to rotate
  text(hour(), 0, 0);
  pop(); // Restore original state
  
  //Minutes_Part 2
  push(); // Start a new drawing state
  textSize(width / 6);
  //angle parameters that are values between 0 and 360
  angleMin = minute()*(360/60); //div by num of mins
  //move the shape to the center of the canvas
  translate(width / 2, height / 2);
  //apply the final rotation in radians() to convert your values
  rotate(radians(angleMin));
  fill(255, 255, 255);
  //object to rotate
  text(minute(), 0, 0);
  pop(); // Restore original state
  
  
  //Seconds_Part 1
  push(); // Start a new drawing state
  textSize(width / 8);
  //angle parameters that are values between 0 and 360
  angleSeg = second()*(360/60); //div by num of hours
  //move the shape to the center of the canvas
  translate(width / 2, height / 2);
  //apply the final rotation in radians() to convert your values
  rotate(radians(angleSeg))
  fill(255, 0, 0);
  //object to rotate
  text(second(), 0, 0);
  pop(); // Restore original state

}
