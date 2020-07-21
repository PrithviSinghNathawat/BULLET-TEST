//WHY IS IT NOT WORKING?

var thickness,wall;
var bullet,speed,weight;




function setup() {

  thickness=random(22,83);
  var speed=random(223,321);
var weight=random(30,52);

bullet=createSprite(50, 200, 70,10);
bullet.velocityX=speed;
bullet.weight=weight;

wall=createSprite(1200,200,thickness,height/2);
  createCanvas(1600,400);

  bullet.debug=true;
  wall.debug=true;
}

function draw() {
  background(80,80,80);  
  drawSprites();

  var damage=0.5*bullet.weight*bullet.velocityX*bullet.velocityX/wall.width*wall.width*wall.width;

  if(bullet.isTouching(wall)){
     bullet.velocityX=0;
   
  }
  if(damage<10){
    bullet.color="green";
  }

  if(damage>10){
    bullet.color="red";
  }
}