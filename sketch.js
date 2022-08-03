var BACKGROUND,NAVIO;
var backgroundImg,navioImg;

function preload(){
  backgroundImg = loadImage("BACKGROUND P C 10");
  backgroundImg = loadAnimation("BACKGROUND P C 10.png","BACKGROUND P C 10 (1).png",
                            "BACKGROUND P C 10.png","BACKGROUND P C 10 (1).png");
}

function setup(){
  createCanvas(400,400);
  background("white");

  // Plano de fundo móvel
  BACKGROUND=createSprite(400,200);
  BACKGROUND.addImage(backgroundImg);
  BACKGROUND.velocityX = -5;
  BACKGROUND.scale=0.3;

  
  NAVIO = createSprite(130,200,30,30);
  NAVIO.addAnimation("movingShip",shipImg1);
  NAVIO.scale =0.25;
  
}

function draw() {
  background(0);
  NAVIO.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(NAVIO.x < 0){
    NAVIO.x = NAVIO.width/8;
  }
    
  drawSprites();
}
