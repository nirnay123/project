var backgroundImg,bgSprite, canvas, gamestate="play";
var gelatoImg, birdImg, chocoImg, arrowImg, fireballImg;

var gSprite;

function preload(){
    backgroundImg= loadImage("assets/background.jpg");
    birdImg= loadAnimation("assets/bird1.png", "assets/bird2.png", "assets/bird3.png");
    chocoImg=loadImage("assets/chocochip.png");
    arrowImg=loadImage("assets/arrow.png");
    fireballImg=loadImage("assets/fireball.png");
    gelatoImg=loadImage("assets/gelatoball.png")
}

function setup(){
    canvas=createCanvas(windowWidth, windowHeight);

    //SPRITES
    bgSprite=createSprite(830,height/2 ,width,height);
    bgSprite.addImage(backgroundImg);
    bgSprite.scale=2.9;
    bgSprite.velocityX=0;
    bgSprite.velocityY=0;

    gSprite=createSprite(width/2,height-150 ,100,100);
    gSprite.addImage(gelatoImg);
    gSprite.scale=0.7;
}

function draw(){
    background(0);
    if(gamestate=="play"){
        gelatoCont();
    }
    
    if(gSprite.velocityY<0 || gSprite.y!=height-150){
        gSprite.velocityY+=0.2;
    }
    if(gSprite.y>height-150){
        gSprite.velocityY=0;
        gSprite.y=height-150;
    }
    drawSprites();
}

function gelatoCont(){
    if(keyDown("RIGHT_ARROW")){
        bgSprite.velocityX-=0.1;
    }
    if(keyDown("LEFT_ARROW")){
        bgSprite.velocityX+=0.1;
    }
    if(keyDown("space")){
        gSprite.velocityY=-10;
    }

    if(bgSprite.x<400){
        bgSprite.x=830;
    }
}