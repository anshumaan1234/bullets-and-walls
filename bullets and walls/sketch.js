var bullet,wall;
var speed,weight,thickness;
var lbullet,lwall;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
speed=random(223,321);
weight=random(30,52);

thickness=random(22,83);

bullet=createSprite(50,200,55,5);
bullet.shapeColor=color(255);
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

}
function draw() {
  background(0);
 
if(hascollided(bullet,wall)){
 
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  bullet.velocityX=0;
  if(damage>10){

  wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
  //hascollided(bullet,wall);
}
function hascollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){

    return true;
  }
  return false;
}