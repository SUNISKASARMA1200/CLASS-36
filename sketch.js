var backgroundImage, database;
var gameState=0;
var playerCount=0;
var form,player,game,canvas;


function setup(){
  canvas=createCanvas(400,400);
 // background("black");
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start()
}

function draw(){
 
  
}


