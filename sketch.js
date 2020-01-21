var fixedrectangle,movingrectangle;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedrectangle=createSprite(200,200,50,80);
  movingrectangle=createSprite(400,200,20,70);
  fixedrectangle.shapeColor="red";
  movingrectangle.shapeColor="green";
  gameobject2=createSprite(100,100,50,50);
  gameobject2.shapeColor="green";
  gameobject1=createSprite(200,100,50,50);
  gameobject1.shapeColor="green";
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="green";
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  gameobject1.velocityX=-1;
  
  
 if(isTouching(movingrectangle,gameobject1)){
gameobject1.shapeColor="red";
movingrectangle.shapeColor="red";
 }
 else{
  gameobject1.shapeColor="green";
  movingrectangle.shapeColor="green";
 }
 
bounceOff(gameobject1,gameobject2);
  drawSprites();
}

