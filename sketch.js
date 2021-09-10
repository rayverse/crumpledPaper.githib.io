const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
var world;
var radius = 40;

let engine;


var btn1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	fill("white");
	ball = Bodies.circle(260, 100, radius/2, ball_options);
	World.add(world, ball);

	groundObj = new GroundObj(width/2, 670, width, 20);
	leftSide = new GroundObj(1100, 600, 20, 120);
	rightSide = new GroundObj(1350, 600, 20, 120);


	btn1= createImg('up.png');
	btn1.position(100, 100);
	btn1.size(50, 50);
    btn1.mouseClicked(jump);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x, ball.position.y, radius, radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

//function keyPressed() {
  //	if (keyCode === UP_ARROW) {

	//	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  //	}
//}

function jump() 
	{
  		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}

