var wall,thickness;
var bullet,speed,weight;

function setup() 
{
  createCanvas(1600,400);
  bullet=createSprite(200,200,20,20);
  wall = createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
  speed=random(23,41);
  weight=random(30,52);
  bullet.velocityX=speed;
  
}

function draw()
 {
  background(0,0,0);  
  bullet.shapeColor="white";
  
  if(hascollided(bullet,wall))
  {
        bullet.velocityX=0;
        damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
        if (damage>=10) 
        {
            wall.shapeColor="green";
        }
        if (damage<10) 
        {
            wall.shapeColor="red";
        }
  }

  drawSprites();
}
 
 function hascollided(bullet,wall)
 {
      bulletRightEdge=bullet.x+bullet.width;
      wallLeftEdge=wall.x
      if (bulletRightEdge>=wallLeftEdge)
      {
        return true;
      }
      else
      {
      return false;
      }

 }