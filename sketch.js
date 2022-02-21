var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage
var Obb1
var Obb2
var Obb3
var Obb4
var Obb5
var Obb6

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png")
  Obb1 = loadImage("obstacle1.png")
  Obb2 = loadImage("obstacle2.png")
  Obb3 = loadImage("obstacle3.png")
  Obb4 = loadImage("obstacle4.png")
  Obb5 = loadImage("obstacle5.png")
  Obb6 = loadImage("obstacle6.png")
} 

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(180);
  
  spawnClouds()
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  
  drawSprites();
  spawnObstacles()
}

function spawnClouds(){
  if(frameCount%80==0){
    var clouds=createSprite(600,random(20,115),60,40)
    clouds.addImage(cloudImage)
    clouds.velocityX=-2
    clouds.depth=trex.depth
    clouds.depth-=20
    clouds.lifetime = 300
  }
  
  console.log('W')
}
function spawnObstacles(){
 if(frameCount%70==0){
   var Obb=createSprite(600,180,20,40)
   var rand = Math.round(random(1,6))
   switch(rand){
     case 1:
     Obb. addImage(Obb1) 
     break
     case 2:
      Obb. addImage(Obb2) 
      break
      case 3:
        Obb. addImage(Obb3) 
        break
        case 4:
          Obb. addImage(Obb4) 
          break
          case 5:
            Obb. addImage(Obb5) 
            break
            case 6:
              Obb. addImage(Obb6) 
              break
              default:break
   }

   Obb.velocityX=-5
   Obb.lifetime = 120
 }


}
