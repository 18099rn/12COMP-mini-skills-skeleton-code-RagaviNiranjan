/********************************************************/
//
/********************************************************/
var xPos = 100;
var yPos = 100;
var xVel = 10;
var yVel = 12;
var diameter1 = 10;

var xPos1 = 200;
var yPos1 = 200;
var xVel1 = 20;
var yVel1 = 14;
var diameter = 10;


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background('cyan');

  xPos = xPos + xVel;
  yPos = yPos + yVel;

  xPos1 = xPos1 + xVel1;
  yPos1 = yPos1 + yVel1;

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

   if (xPos1 >= width - diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel1 = xVel1 * -1;
  }
  if (xPos1 <= diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel1 = xVel1 * -1;
  }

  if (yPos1 >= height - diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel1 = yVel1 * -1;
  }
  if (yPos1 <= diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel1 = yVel1 * -1;
  }

  ellipse(xPos1, yPos1, diameter);
}

