var man, run;
var stand;
var gameState="intro";
var hit=false;
//Level 1 var
var ground, ground2, ground3, invisibleground1, invisibleground2,invisibleground3,invisibleground4,invisibleground5, invisibleground6, invisibleground7, groundimg, arrow, arrowimg;

var Level=1;
var bg, bgimg;

function preload(){
    run=loadAnimation("Man Image/1.png", "Man Image/3.png","Man Image/5.png","Man Image/7.png","Man Image/9.png","Man Image/11.png","Man Image/13.png","Man Image/15.png","Man Image/17.png");

    bgimg=loadImage("Images/bg.jpg");

    arrowimg=loadImage("Images/arrow.png");
  
    stand=loadAnimation("Man Image/standing.png");

    groundimg=loadImage("Images/ground.png");
  
}

function setup() {
  createCanvas(1280, 720);
  bg=createSprite(640, 250, 1280, 720);
  bg.addImage('bg', bgimg)
  bg.scale=0.5

  if(Level===1){
    lev1sprites();
  }

}

function draw() {
  background(bgimg);

  if(Level===1){
  //running.debug=true;

  
  man.addAnimation("stand",stand )

  man.setCollider("rectangle", 0, 0, 100, 400)
  //invisibleground1.debug=true;
  invisibleground1.setCollider("rectangle", 0, 120, 800, 80)
  //invisibleground2.debug=true;
  invisibleground2.setCollider("rectangle", 0, 120, 800, 80)
  //invisibleground3.debug=true;
  invisibleground3.setCollider("rectangle", 0, 120, 800, 40)
  //invisibleground4.debug=true;
  invisibleground4.setCollider("rectangle", 0, 120, 800, 40)
  //invisibleground5.debug=true;
  invisibleground5.setCollider("rectangle", 0, 120, 800, 40)
  //invisibleground6.debug=true;
  invisibleground6.setCollider("rectangle", 0, 120, 800, 40)
  //invisibleground7.debug=true;
  invisibleground7.setCollider("rectangle", 0, 120, 800, 40)
  }

  
  if(Level==="running1"){
    man.changeAnimation("run", run )
  }

  man.collide(invisibleground1);
  man.collide(invisibleground2);
  man.collide(invisibleground4);
  man.collide(invisibleground3);
  man.collide(invisibleground5);
  man.collide(invisibleground6);
  man.collide(invisibleground7);
  
  console.log(Level);

  man.velocity.y= man.velocity.y+1

  if(Level===1||"running1"){
    movementlv1()
  }
  drawSprites();

  if(Level===1||"running1"){
    textSize(30);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    text("Use", 400, 200);
    text("To Move", 650, 200);
  


  }
}

