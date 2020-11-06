var bullet,wall;
var speed,weight;
var deformation;
var thickness;
var damage;

function setup() {
  createCanvas(1600,800);

   speed = random(170,250);
   weight = random(30,52);
   thickness = random(22,83);

  bullet = createSprite(50,200,50,15);
  bullet.velocityX = speed;
  wall = createSprite(1200,300,thickness,400);
  wall.shapeColor = color(80,80,80); 

}

function draw() {
  background("black"); 
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage < 15){
      wall.shapeColor = color("green");
    }
    if(damage > 15){
      wall.shapeColor = color("red");
    }
   }  
  
   

  drawSprites();
}


