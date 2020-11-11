var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  
fixedrect=createSprite(400,400,30,70);
fixedrect.shapeColor="red";

movingrect=createSprite(200,200,70,30);
movingrect.shapeColor="red";

}

function draw() {
  background(0);  
 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
 
  drawSprites();
}