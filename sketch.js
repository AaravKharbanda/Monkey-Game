
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var surTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400, 400);
monkey = createSprite(50,260);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1  
  
ground = createSprite(300,300,900,20)  
ground.velocityX = -4
ground.x = ground.width/2
  
FoodGroup = new Group();
obstacleGroup = new Group();  

  
}


function draw() {
background("white")
  
//gravity
monkey.velocityY = monkey.velocityY + 0.8    
  
//monkey to collide with ground
monkey.collide(ground);  
  
//making monkey jump
if(keyDown("space")){
monkey.velocityY = -12;
} 

text("Survival Time =  " + surTime + " seconds", 150, 10)
  
if (frameCount%10 === 0){
  surTime = surTime+1;

}
 
if (ground.x < 0){
      ground.x = ground.width/2;
   }  
  
drawSprites();
food();  
obstacle();  
}


function food(){
  if (frameCount%80 === 0){
    banana = createSprite(400,50);
    banana.y = Math.round(random(120,200))
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1
    banana.velocityX = -4;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}


function obstacle(){
  if (frameCount%300 === 0){
    var obstacle = createSprite(400,270);
    obstacle.addImage("obstacle", obstaceImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}


