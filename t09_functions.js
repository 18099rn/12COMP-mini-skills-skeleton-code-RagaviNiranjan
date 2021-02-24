/********************************************************/
//
/********************************************************/
var ball1 = {
  diameter: 10,
  posX: 0,
  posY: 0,
  velX: 0,
  velY: 0,
  R: 0,
  G: 0,
  B: 0
}

var ball2 = {
  diameter: 10,
  posX: 0,
  posY: 0,
  velX: 0,
  velY: 0,
  R: 0,
  G: 0,
  B: 0
}


  function moveBall (){

  this.posX = this.posX + this.velX;
  this.posY= this.posY + this.velY;
  
  }

  function bounceBall (){

     function bounceBall1() {


 if ( this.posX >= width - this.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    this.velX = this.velX * -1;
     this.posX = width - this.diameter / 2;
  }
  if ( this.posX<= this.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    this.velX = this.velX * -1;
     this.posX = this.diameter / 2;

  }

  if (this.posY >= height - this.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    this.velY = this.velY * -1;
    this.posY = height - this.diameter / 2;

  }
  if (ball1.posY <= ball1.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball1.velY = ball1.velY * -1;
    ball1.posY = ball1.diameter / 2;
    
  }

  }


function setup() {
  createCanvas(400, 400);
  ball1.posX = random(ball1.diameter/2, width - ball1.diameter/2);
  ball1.posY = random(ball1.diameter/2, width - ball1.diameter/2);
  ball1.velX = random(5, 10);
  ball1.velY = random(4, 12);

  ball2.posX = random(ball2.diameter/2, width - ball2.diameter/2);
  ball2.posY = random(ball2.diameter/2, width - ball2.diameter/2);
  ball2.velX = random(3, 10);
  ball2.velY = random(5, 19);
}

function draw() {
   background('black');
   move

 

 ball2.posX = ball2.posX + ball2.velX;
ball2.posY = ball2.posY + ball2.velY;

}

  ellipse(ball1.posX, ball1.posY, ball1.diameter);

  function bounceBall2(){

     if (ball2.posX >= width - ball2.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball2.velX = ball2.velX * -1;
    ball2.posX = width - ball2.diameter / 2;

  }
  if (ball2.posX <= ball2.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball2.velX = ball2.velX * -1;
   ball2.posX = ball2.diameter / 2;

  }

  if (ball2.posY >= height - ball2.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ball2.velY = ball2.velY * -1;
    ball2.posY = height - ball2.diameter / 2;

  }
  if (ball2.posY <= ball2.diameter / 2) {
    fill(random(0, 255), random(0, 255), random(0, 255));
   ball2.velY = ball2.velY * -1;
    ball2.posY = ball2.diameter / 2;


  }

  
  }

  ellipse(ball2.posX, ball2.posY, ball2.diameter);
}

