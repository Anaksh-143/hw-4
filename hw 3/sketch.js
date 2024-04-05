var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options ={
		isStatic : false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   matter.bodies.circle(50,60,10);
   groundObj.display();
   groundObj = new ground(width/2,670,width,20);
   leftSide = new ground(1100,600,20,120);
  
   if (keyCode === UPARROW){
	Matter.Body.applyForce(ball,50,60,0.6);
   }
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




