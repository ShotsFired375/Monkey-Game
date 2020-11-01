var monkey , monkey_running, monkey_image
var ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score




function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}




function bananas() {
  if (frameCount % 115 === 0) {
    r = Math.round(random(120, 200));
    
    banana = createSprite(500, 250, 20, 20);
    banana.addImage("image", bananaImage);
    banana.scale=0.15;
    banana.velocityX=-6;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
}




function obstacles() {
  if (frameCount % 200 === 0) {
    obstacle = createSprite(500, 379, 20, 20);
    obstacle.addImage("image", obstacleImage);
    obstacle.scale=0.19;
    obstacle.velocityX=-6
    obstacleGroup.add(obstacle);
  }
}




function setup() {
  createCanvas(500,400);
  
  monkey = createSprite(50, 350, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15;

  ground = createSprite(500, 398, 1000, 10);
  if (ground.x<0); 

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  score=0;
}




function draw() {
  background("lightgrey");
  
  ground.velocityX=-4;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space") && monkey.y>340 ) {
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
  score = score+Math.round(frameCount%30===0);
  
  textSize(30);
  text("Survival Time: "+score, 140, 40)

  drawSprites();
}






