var fixedRect,movingRect;
var car,wall;
function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 80, 30);
car = createSprite(100,100,50,50);
car.shapeColor = "lightgreen"
wall = createSprite(700,100,70,80);
wall.shapeColor = "lightblue"
car.velocityX = 4;
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(isTouching(car,wall)){
car.velocityX = 0;
car.shapeColor = "lightblue"
text("Car Stopped",200,200);
};

  drawSprites();
}
function isTouching(object1,object2){
  if(object2.x-object1.x<object1.width/2+object2.width/2 && object1.x-object2.x < object1.width/2+object2.width/2 
    && object2.y-object1.y<object1.height/2+object2.height/2 && object1.y-object2.y < object1.height/2+object2.height/2)
  {
  return true;
  }
  else{
    return false;
  
  
  }

}