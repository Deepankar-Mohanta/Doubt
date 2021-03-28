  function lev1sprites(){
  man=createSprite(150, 450, 20, 20);
  //running.addImage('standing', standing);
  man.scale=0.2;

  invisibleground1=createSprite(100, 465, 200, 10);
  invisibleground1.addImage('ground', groundimg);
  invisibleground1.scale=0.25;


  invisibleground2=createSprite(250, 465, 200, 10);
  invisibleground2.addImage('ground', groundimg);
  invisibleground2.scale=0.25;

  invisibleground3=createSprite(446, 520, 200, 10);
  invisibleground3.addImage('ground', groundimg);
  invisibleground3.scale=0.25;

  invisibleground4=createSprite(640, 520, 200, 10);
  invisibleground4.addImage('ground', groundimg);
  invisibleground4.scale=0.25;

  invisibleground5=createSprite(834, 520, 200, 10);
  invisibleground5.addImage('ground', groundimg);
  invisibleground5.scale=0.25;

  invisibleground6=createSprite(1000, 455, 200, 10);
  invisibleground6.addImage('ground', groundimg);
  invisibleground6.scale=0.25;

  invisibleground7=createSprite(1194, 455, 200, 10);
  invisibleground7.addImage('ground', groundimg);
  invisibleground7.scale=0.25;

  
  
  ground=createSprite(150, 628, 400, 270);
  ground.shapeColor="black";

  ground2=createSprite(630, 635, 570, 170);
  ground2.shapeColor="black";

  ground3=createSprite(1100, 620, 400, 270);
  ground3.shapeColor="black";

  arrow=createSprite(550, 170, 10, 10);
  arrow.addImage('arrow', arrowimg);
  arrow.scale=0.5

    console.log(man.x);

  }

  function movementlv1(){
    if(keyIsDown(RIGHT_ARROW)){
      Level="running1";
        man.x=man.x+5
        //Level="running1"
    }else if(keyWentUp(RIGHT_ARROW)){
      Level===1
    }
    
      if(keyIsDown(LEFT_ARROW)){
        Level="running1"
        man.x=man.x-5
         //Level="running1"
       
      }else if(keyWentUp(LEFT_ARROW)){
        Level=1;
      }
    
      if(keyIsDown(UP_ARROW)&&man.y>420){
        Level="running1"
        man.velocity.y= man.velocity.y-5
         //Level="running1"

      } else if(keyWentUp(UP_ARROW)){
        Level=1;
      }   

      

  
    } 