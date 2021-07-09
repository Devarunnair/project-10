var seaImg,seaImg1;
var shipImg1,edges;
var shipImg;

function preload(){
seaImg = loadImage("seapic.png");

shipImg = loadAnimation("s1.png", "s2.png", "s3.png","s4.png");
}


function setup(){
  createCanvas(400,400);
  background("blue")


  
  seaImg1 = createSprite(200,180,400,20);
  seaImg1.addImage("sea",seaImg);
  seaImg1.velocityX = -5;

 
  shipImg1 = createSprite(130,280,30,30);
  shipImg1.addAnimation("moving",shipImg);
  shipImg1.scale = 0.2;
  
edges = createEdgeSprites();
}

function draw() {
  background(0)
  seaImg1.velocityX = -3;
  if(seaImg.x < 0) {
    seaImg.x = seaImg.width/8;
  }
 drawSprites();
}