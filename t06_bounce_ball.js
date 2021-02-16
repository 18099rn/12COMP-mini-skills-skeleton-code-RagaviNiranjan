var xPos = 100;
var yPos = 100;
var xVel = 10;
var yVel = 12;
var diameter = 10;


function setup() {
  createCanvas(400, 400);
  
}


function draw() {
  background('cyan');

  xPos = xPos + xVel;
  yPos = yPos + yVel;

  if (xPos >= width - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel = xVel * -1;
    xPos = width - diameter / 2;
  }
  if (xPos <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel = xVel * -1;
    xPos = diameter / 2;
  }

  if (yPos >= height - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel = yVel * -1;
    yPos = height - diameter / 2;
  }
  if (yPos <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel = yVel * -1;
    yPos = diameter / 2;

  }

  ellipse(xPos, yPos, diameter);
}
