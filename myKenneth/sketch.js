//Forked Dice generator by xinxin <<https://editor.p5js.org/xinxin/sketches/y6p2f0lcf>>

let female;
let spacer;
let radio;
let rol;

function preload() {
  female = loadImage("unnamed.jpg");
  
}

function setup() {
  createCanvas(720, 600);
  frameRate(2);
  rol = floor(random(1, 4));
  spacer = 10;
  radio = spacer/5;
  print(female.width, female.height);  // image before adapting it
  female.resize(width, height);
  print(female.width, female.height);  // now it's the righ size!
}

function draw() {
  background(0);
  //image(female, 0, 0, width, height);
  noLoop();
  
  function dice_1(x,y) {
    fill(255, 255, 255);
    ellipse(spacer/2 +x, spacer/2 + y, radio);
  }
  function dice_2(x,y) {
    fill(255, 255, 255);
    ellipse(spacer/4 + x, spacer/2 + y, radio);
    fill(255, 255, 255);
    ellipse(spacer/4*3 + x, spacer/2 + y, radio);
  }
  function dice_3(x,y) {
    fill(255, 255, 255);
    ellipse(spacer/4 + x, spacer/4 + y, radio);
    ellipse(spacer/2 + x, spacer/2 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4*3 + y, radio);
  }
  function dice_4(x,y) {
    fill(255, 255, 255);
    ellipse(spacer/4 + x, spacer/4 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4 + y, radio);
    ellipse(spacer/4 + x, spacer/4*3 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4*3 + y, radio);
  }
  function dice_5(x,y) {
    fill(255, 255, 255);
    ellipse(spacer/4 + x, spacer/4 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4 + y, radio);
    ellipse(spacer/4 + x, spacer/4*3 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4*3 + y, radio);
    ellipse(spacer/2 + x, spacer/2 + y, radio);
  }
  function dice_6(x,y) {
    fill(255, 255, 255);
    ellipse(spacer/4 + x, spacer/4 + y, radio);
    ellipse(spacer/2 + x, spacer/4 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4 + y, radio);
    ellipse(spacer/4 + x, spacer/4*3 + y, radio);
    ellipse(spacer/2 + x, spacer/4*3 + y, radio);
    ellipse(spacer/4*3 + x, spacer/4*3 + y, radio);
    
  }
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      let c = female.get(x,y);
      fill(25, 25, 25);
      rect(x + spacer*0.05,y + spacer*0.05, spacer*0.9, spacer*0.9, 0.3);
      //fill(c);
      let value = brightness(c);
      
      if (value < 40){
        //fill(255, 0, 0);
        //fill(c);
        noStroke();
        //rect(x + spacer /2, y + spacer /2, spacer, spacer);
        
      } else if (value <50){
        //fill(170,170,170);//darkest <50
        noStroke();
        //rect(x + spacer /2, y + spacer /2, spacer, spacer);
        dice_1(x,y)
      }else if (value <60){
        //fill(100,100,100);//darkest <50
        noStroke();
        //rect(x + spacer /2, y + spacer /2, spacer, spacer);
        dice_2(x,y)
        
      }else if (value <70){
        //fill(50,50,50);//darkest <50
        noStroke();
        //rect(x + spacer /2, y + spacer /2, spacer, spacer);
        dice_3(x,y)
        
      }else if (value <80){
        //fill(50,50,50);//darkest <50
        noStroke();
        //rect(x + spacer /2, y + spacer /2, spacer, spacer);
        dice_4(x,y)
        
      }else if (value <85){
        //fill(0,0,0);//darkest <50
        noStroke();
        //rect(x + spacer /2, y + spacer /2, spacer, spacer);
        dice_5(x,y);
      }else{
        noStroke();
        dice_6(x,y);
      }
    }
  }

}

