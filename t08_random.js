/********************************************************/
//
/********************************************************/
var pos = {
x:100,
y:50
}
var xVel = 10;
var yVel = 12;
var diameter1 = 10;

var xPos1 = 100;
var yPos1 = 100;
var xVel1 = 20;
var yVel1 = 14;
var diameter = 10;


function setup() {
  createCanvas(400, 400);
   
}


function draw() {
   background('cyan');


  pos.x = random(0, width); 
  pos.y = random(0, height);

  pos.x = pos.x + xVel;
  pos.y = pos.y + yVel;

  xPos1 = xPos1 + xVel1;
  yPos1 = yPos1 + yVel1;

  if (pos.x >= width - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel = xVel * -1;
  }
  if (pos.x <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    xVel = xVel * -1;
  }

  if (pos.y >= height - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel = yVel * -1;
  }
  if (pos.y <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    yVel = yVel * -1;
  }

  ellipse(pos.x, pos.y, diameter);

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

