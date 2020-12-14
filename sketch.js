
var sprite1, sprite2


function setup() {
  createCanvas(800,400);
  
  sprite1=createSprite(400, 200, 100, 50);
  sprite1.shapeColor="aqua";
  sprite1.debug=true;
  
  
  sprite2=createSprite(200, 200, 70, 140);
  sprite2.shapeColor="aqua";
  sprite2.debug=true;
}

function draw() {
  background("black");  

  sprite1.x=mouseX;
  sprite1.y=mouseY;
  
  if(sprite1.x-sprite2.x<sprite1.width/2 + sprite2.width/2 &&
    sprite2.x-sprite1.x<sprite1.width/2 + sprite2.width/2 &&
    sprite1.y-sprite2.y<sprite1.height/2 + sprite2.height/2 &&
    sprite2.y-sprite1.y<sprite1.height/2 + sprite2.height/2){
    sprite1.shapeColor="red";
    sprite2.shapeColor="red";
  }

  else{
    sprite1.shapeColor="aqua";
    sprite2.shapeColor="aqua"; 
  }
  
  text("sprite1 x position : "+ sprite1.x,50,30);
  text("sprite2 x position : "+ sprite2.x,50,50);
  text("sprite1 width : "+ sprite1.width/2,50,70)
  text("sprite2 width : "+ sprite2.width/2,50,90)
  drawSprites();
}