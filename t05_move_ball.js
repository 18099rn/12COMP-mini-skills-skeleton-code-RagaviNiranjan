/********************************************************/
//
/********************************************************/
var circleX = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('cyan');


   
  strokeWeight(2);
  fill(0,255,0,200)
  ellipse(circleX, 200, 100, 100);

  circleX = circleX + 1; 
}