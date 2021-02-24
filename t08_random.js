/********************************************************/
//
/********************************************************/
var ball1 = {
  diameter = 10,
  posX = 0,
  posY = 0,
  velX = 0,
  velY = 0,
  R = 0,
  G = 0,
  B = 0
}

var ball2 = {
  diameter = 10,
  posX = 0,
  posY = 0,
  velX = 0,
  velY = 0,
  R = 0,
  G = 0,
  B = 0
}


function setup() {
  createCanvas(400, 400);
  ball1.posX = random(diameter/2, width - diameter/2);
  ball1.posY = random(diameter/2, width - diameter/2);
  ball1.velX = random(5, 10);
  ball1.velY = random(4, 12);
}

function draw() {
   background('black');
//ball1.posX = random(0, width); 
//ball1.posY = random(0, height);
//noLoop();

  ball1.posX =  ball1.posX + ball1.velX;
  ball1.posY= ball1.posY + ball1.velY;

  ball2.posX = ball2.posX + ball2.velX;
  ball2.posY = ball2.posY + ball2.velY;

  if ( ball1.posX >= width - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball1.velX = ball1.velX * -1;
     ball1.posX = width - diameter / 2;
  }
  if ( ball1.posX<= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball1.velX = ball1.velX * -1;
     ball1.posX = diameter / 2;

  }

  if (ball1.posY >= height - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball1.velY = ball1.velY * -1;
    ball1.posY = height - diameter / 2;

  }
  if (ball1.posY <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball1.velY = ball1.velY * -1;
    ball1.posY = diameter / 2;
    

  }

  ellipse(ball1.posX, ball1.posY, diameter);

   if (ball2.posX >= width - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball2.velX = ball2.velX * -1;
    ball2.posX = width - diameter / 2;

  }
  if (ball2.posX <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball2.velX = ball2.velX * -1;
   ball2.posX = diameter / 2;

  }

  if (ball2.posY >= height - diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball2.velY = ball2.velY * -1;
    ball2.posY = height - diameter / 2;

  }
  if (ball2.posY <= diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
   ball2.velY = ball2.velY * -1;
    ball2.posY = diameter / 2;

  }

  ellipse(pos.x1, ball2.posY, diameter);
}

