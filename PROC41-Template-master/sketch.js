const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var backgroundimg,scene;
var man,manimg;
var helper,helperimg;
var stone,stoneimg,stonegroup;
var gameState = "play";


function preload(){


    backgroundimg = loadImage("image/b.jpg");
    manimg = loadAnimation("image/1.png","image/2.png","image/3.png","image/4.png","image/5.png","image/6.png");
    stoneimg = loadImage("image/s1.png");
    
}

function setup(){

    engine = Engine.create();
    world =  engine.world;

   createCanvas(displayWidth,displayHeight);
    scene = createSprite(displayWidth/2,displayHeight/2);
    scene.addImage("scene",backgroundimg);
    scene.scale = 2.2;

    man = createSprite(displayWidth/2,displayHeight-50);
    man.addAnimation("man",manimg);
    man.scale=1.2;

   
    ground= createSprite(displayWidth/2,displayHeight-50,displayWidth,20);
    

    ground.visible = false;
    
    stonegroup = new Group ();
    
     helper = new Robot (displayWidth-80,80,40,40);

    
}


    var ground;


function draw(){
   Engine.update(engine);

   background("blue");

   scene.velocityX=-2;

   if(scene.x < 750 ){
      scene.x = displayWidth/2;
   }



    if(gameState === "play"){

       
    if(keyDown("right")){

        man.x = man.x +5;
    }


    
    if(keyDown("left")){

        man.x = man.x-5;
    }



    if(man.x > displayWidth){
        man.x = 100;

    }

    if(keyDown("space")){

        man.velocityY = -10;

    }

    man.velocityY = man.velocityY + 0.8;
    man.collide(ground);

    Stone();

    if(stonegroup.isTouching(man)){
        man.destroy();
        stonegroup.destroyEach();
        gameState = "end";
    }


    }

    helper.display();
    


    drawSprites();


   


    if(gameState ===  "end"){
        textSize(50);
        fill("red");
        text("GAME OVER",displayWidth/2,displayHeight/2);
        
    }
}   

