const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var playb, playbImage;
var FIRST = 0;
var SECOND = 1;
var THIRD = 2;
var FOURTH = 3;
var FIFTH = 4;
var SIXTH = 5;
var gameState = FIRST;
var timer=30 ;

function preload(){
  bg=loadImage("bg img.jpg")
  playbImage=loadImage("playb.png")
  man1=loadImage("man1 2img.jpg")
  man2img=loadImage("man1 4img.png")
  nextbimage=loadImage("nextb.png")
  dj=loadImage("DJones.png")
  cPlace=loadImage("place.png")
  phoneimg=loadImage("phone2.png")
  handimg=loadImage("hand print.png")
  rectimg=loadImage("rect.png")
  bodyimg=loadImage("dead body.png")
  
}

function setup() {
  createCanvas(1250,570);

  playb=createSprite(800, 470,400,90);
  playb.addImage(playbImage)
  playb.scale=0.6

 nextb=createSprite(200,400,20,20)
 nextb.addImage(nextbimage)
 nextb.scale=0.2

 nextb2=createSprite(1000,430,20,20)
 nextb2.addImage(nextbimage)
 nextb2.scale=0.2

 nextb3=createSprite(800,400,20,20)
  nextb3.addImage(nextbimage)
  nextb3.scale=0.2
  
  nextb4=createSprite(900,400,20,20)
  nextb4.addImage(nextbimage)
  nextb4.scale=0.2

  nextb5=createSprite(1000,450,20,20)
  nextb5.addImage(nextbimage)
  nextb5.scale=0.2

  nextb6=createSprite(1100,400,20,20)
  nextb6.addImage(nextbimage)
  nextb6.scale=0.2
}

function draw() {
  background(bg); 
  
  if(gameState ===FIRST){
    
    playb.visible=true;
    nextb.visible=false;
    nextb2.visible=false;
    nextb3.visible=false;
    nextb4.visible=false;
    nextb5.visible=false;
    nextb6.visible=false;
   
  }
   if(mousePressedOver(playb)) {
   gameState=SECOND
      playb.visible=false;
      nextb2.visible=false;
      nextb3.visible=false;
      nextb4.visible=false;
      nextb5.visible=false;
      nextb6.visible=false;
      
    }
if(gameState===SECOND){
  nextb.visible=true;
  background(man1);
  textSize(25)
  fill ("black")
  strokeWeight(25);
  text("Hello i'am SMUEL KING .Today i'am a",100,200)
text (" little bit busy so i will introduce you",100,250)
text (" with DAVID JONES so,let's go!!!",100,300)

if(mousePressedOver(nextb)) {
  gameState=THIRD
  playb.visible=false;
  nextb.visible=false;
  nextb2.visible=true;
  nextb6.visible=false;
 
    }
}
if(gameState===THIRD){

  background(dj);
  textSize(25)
  fill ("white")
  strokeWeight(10)
  text("Hello i'am DAVID JONES , you can",850,200)
  text (" also call me jones",850,250)
  text (" i will guide you and help you in your ",830,300)
  text (" work. ",850,350)
  if(mousePressedOver(nextb2)) {
    gameState=FOURTH
      }
}
if(gameState===FOURTH){
  nextb2.visible=false;
  nextb3.visible=true;
  playb.visible=false;
  nextb.visible=false;
  nextb6.visible=false;
  
  background("white")
  textSize(30)
  fill ("black")
  text("So before going to crime place there are some things which you need to know:-",50,200)
  text ("1)- At the top of the canvas there are the shadow of the the things which you have to find. ",50,250)
  text (" 2)- You have only 30 sec to find that 4 things. ",50,300)
  text (" 3)- After finding all 4 things click on the next button ",50,340)
  if(mousePressedOver(nextb3)) {
    gameState=FIFTH
    nextb3.visible=false;
    nextb2.visible=false;
    playb.visible=false;
    nextb.visible=false;
    nextb6.visible=false;
   
      }
  }
if(gameState===FIFTH){
background(cPlace)
nextb4.visible=true;
fill (0)
textSize(50)
text (timer,1100,65);
if(frameCount%10===0&&timer>0){
  timer--
}
if(timer===0){
  background(bg);
  
  replay=createSprite(800, 470,400,90);
  replay.addImage(replayimg)
  replay.scale=0.1
  if(mousePressedOver(replay)){
    gameState=FOURTH
    replay.visible=false;
    phone1.visible=false;
  hand1.visible=false;
  rect1.visible=false;
  body1.visible=false;
  dummyphone.visible=false;
  dummyhand.visible=false;
  dummyrect.visible=false;
  dummybody.visible=false;
  }
}
dummyphone=createSprite(400,50,60,90)
dummyphone.shapeColor="red"
dummyphone.visible=false;
dummyhand=createSprite(500,50,60,90)
dummyhand.shapeColor="red"
dummyhand.visible=false;
dummyrect=createSprite(700,60,150,55)
dummyrect.shapeColor="red"
dummyrect.visible=false;
dummybody=createSprite(900,80,60,100)
dummybody.shapeColor="red"
dummybody.visible=false;

phone=createSprite(400,50,20,20)
phone.addImage(phoneimg)
phone.scale=0.05
hand=createSprite(500,50,20,20)
hand.addImage(handimg)
hand.scale=0.1
rect=createSprite(700,50,20,20)
rect.addImage(rectimg)
rect.scale=1
body=createSprite(900,80,20,20)
body.addImage(bodyimg)
body.scale=0.2

if(mousePressedOver(nextb4)) {
  
  dummyphone.visible=false;
  dummyhand.visible=false;
  dummyrect.visible=false;
  dummybody.visible=false;
  nextb6.visible=false;
  nextb4.visible=false;
 
  gameState=SIXTH
    }

phone1=createSprite(65,540,80,30)
phone1.visible=false;
hand1=createSprite(280,195,50,50)
hand1.visible=false;
rect1=createSprite(1060,520,100,40)
rect1.visible=false;
body1=createSprite(450,360,200,200)
body1.visible=false;
if(mousePressedOver(phone1)){
  dummyphone.visible=true;
}
if(mousePressedOver(hand1)){
  dummyhand.visible=true;
}
if(mousePressedOver(rect1)){
  dummyrect.visible=true;
}
if(mousePressedOver(body1)){
  dummybody.visible=true;
}
}
if(gameState===SIXTH){
  background(dj)
  
  textSize(25)
  fill ("white")
  strokeWeight(10)
  text("Good you find all 4 things",850,200)
  text (" thanks for your help bye... ",850,250)
  
  }
drawSprites();
}
