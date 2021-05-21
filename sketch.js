var coronaimg,platform1img,platform2img,warriorimg,maskimg,sanitizerimg,bgimg,bg,vaccineimg
function preload(){
  coronaimg=loadImage("virus03_11.png")
  platform1img=loadImage("platform.png")
  platform2img=loadImage("ground_grass_broken.png")
  warriorimg=loadImage("download.png") 
  maskimg=loadImage("mask.png")
  sanitizerimg=loadImage("sani-removebg-preview.png")
  vaccineimg=loadImage("vaccine.png")
  bgimg=loadImage("bg.png")
}


function setup() {
  createCanvas(1100,730);
  edges=createEdgeSprites()
  var corona1=createSprite(700,400)
  corona1.addImage(coronaimg)
  corona1.scale=0.1
  var corona2=createSprite(600,300)
  corona2.addImage(coronaimg)
  corona2.scale=0.1
  var corona3=createSprite(500,500)
  corona3.addImage(coronaimg)
  corona3.scale=0.1
  var warrior=createSprite(400,300)
  warrior.addImage(warriorimg)
   vaccine=createSprite(500,200)
  vaccine.addImage(vaccineimg)
  vaccine.scale=0.3
  vaccine.velocityX=2;
  vaccine.velocityY=2;
  
  var platform1=createSprite(900,550) 
  platform1.addImage(platform1img) 
  var platform2=createSprite(700,200)
  platform2.addImage(platform2img)
  var mask=createSprite(900,450)
  mask.addImage(maskimg)
  mask.scale=0.5
  var sanitizer=createSprite(700,80)
  sanitizer.addImage(sanitizerimg)
  sanitizer.scale=0.3
  
  
}

function draw() {
  background("white"); 
  
  vaccine.bounceOff(edges[0]);
  vaccine.bounceOff(edges[1]);
  vaccine.bounceOff(edges[2]);
  vaccine.bounceOff(edges[3]);
  

  

  
drawSprites()
}