/********************************************************/
//
/********************************************************/
var ball1 = {
  dia = 100,
  posX = 0,
  posY = 0,
  velX = 0,
  velY = 0,
  R = 0,
  G = 0,
  B = 0
}

var ball2 = {
  dia = 100,
  posX = 0,
  posY = 0,
  velX = 0,
  velY = 0,
  R = 0,
  G = 0,
  B = 0
}

var pos = {
x:0,
y:0,
x1:0,
y1:0,
}
var vel = {
x:0,
y:0,
x1:20,
y1:14,  
}

var diameter1 = 12;
var diameter = 12;

function setup() {
  createCanvas(400, 400);
  ball1.posX = random(diameter/2, width - diameter/2);
  ball1.posY = random(diameter/2, width - diameter/2);
  ball1.velX = random(5, 10);
  ball1.velY = random(4, 12);
}

function draw() {
   background('black');
//pos.x = random(0, width); 
//pos.y = random(0, height);
//noLoop();

  pos.x = pos.x + vel.x;
  pos.y = pos.y + vel.y;

  pos.x1 = pos.x1 + vel.x1;
  pos.y1 = pos.y1 + vel.y1;

  if (pos.x >= width - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.x = vel.x * -1;
    pos.x = width - diameter / 2;
  }
  if (pos.x <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.x = vel.x * -1;
    pos.x = diameter / 2;

  }

  if (pos.y >= height - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.y = vel.y * -1;
    pos.y = height - diameter / 2;

  }
  if (pos.y <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.y = vel.y * -1;
    pos.y = diameter / 2;
    

  }

  ellipse(pos.x, pos.y, diameter);

   if (pos.x1 >= width - diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.x1 = vel.x1 * -1;
    pos.x1 = width - diameter / 2;

  }
  if (pos.x1 <= diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.x1 = vel.x1 * -1;
    pos.x1 = diameter / 2;

  }

  if (pos.y1 >= height - diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.y1 = vel.y1 * -1;
    pos.y1 = height - diameter / 2;

  }
  if (pos.y1 <= diameter1 / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    vel.y1 = vel.y1 * -1;
    pos.y1 = diameter / 2;

  }

  ellipse(pos.x1, pos.y1, diameter);
}

