/********************************************************/
//
/********************************************************/


function setup() {
  createCanvas(400, 400);
  const numBalls = 3;
  var ballArray = [];
  
  
var ball1 = {
  diameter: 10,
  posX: 0,
  posY: 0,
  velX: 0,
  velY: 0,
  R: 0,
  G: 0,
  B: 0,

  init: function (){
    this.posX = random(this.diameter/2, width - this.diameter/2);
    this.posY = random(this.diameter/2, width - this.diameter/2);
    this.velX = random(5, 10);
    this.velY = random(4, 12); 
  },

  move: function(){
    this.posX = this.posX + this.velX;
    this.posY= this.posY + this.velY;
  },

  bounce: function(){
    if ( this.posX >= width - this.diameter / 2) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      this.velX = this.velX * -1;
      this.posX = width - this.diameter / 2;
  }
    if ( this.posX <= this.diameter / 2) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      this.velX = this.velX * -1;
      this.posX = this.diameter / 2;
  }
  if (this.posY >= height - this.diameter / 2) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      this.velY = this.velY * -1;
      this.posY = height - this.diameter / 2;
  }
  if (this.posY <= this.diameter / 2) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      this.velY = this.velY * -1;
      this.posY = this.diameter / 2;
    }
  },

  disp: function() {
    ellipse(this.posX, this.posY, this.diameter);
  },
}
}



function draw() {
  background('black');
  for (var i = 0; i <numBalls.length; i++) {
    if (numBalls<3) {
     ballArray[i].push();
    }
  
  ball1[0].move();
  ball1[0].bounce();
  ball1[0].disp();
  ball1[0].init();
  }
  }






  
  
 