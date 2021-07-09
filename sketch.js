var jake, path;
var pathImg, jakeImg, invisibleleftboundaries, invisiblerightboundaries;

function preload(){
  //pre-load images
  pathImg = loadImage ("path.png");
  jakeImg1 = loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(130,200,30,30);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;


  jake = createSprite(130,200,30,30);
  jake.addAnimation("Runner-1,Runner-2",jakeImg1);
  jake.velocityY = -3;
  jake.scale = 0.5;

  invisibleleftboundaries = createSprite(0,10,400,10);
  invisiblerightboundaries = createSprite(400,200,400,10);
  invisibleleftboundaries.visible = false;
  invisiblerightboundaries.visible = false;
  
}
function draw() {
  background(0);
  jake.x = World.mouseX;

  jake.collide(invisibleleftboundaries);
  jake.collide(invisiblerightboundaries);

  if(path.y < 400){
    path.y = path.height/2;
  }
   drawSprites();
}
