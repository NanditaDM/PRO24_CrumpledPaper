var groundSprite, groundBody;

var boxSide1Sprite, boxSide2Sprite, boxSide3Sprite;
var boxSide1Body, boxSide2Body, boxSide3Body;

var ballSprite, ballBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup(){
	createCanvas(1000, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	boxSide1Sprite = new DustBinSide(720, 650, 200, 20);

	boxSide2Sprite = new DustBinSide(630, 610, 20, 100);

	boxSide3Sprite = new DustBinSide(810, 610, 20, 100);

	paper1 = new Paper(200,400,15);

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	

	Engine.run(engine);

	//Create a Ground
	ground = Bodies.rectangle(groundSprite.x, groundSprite.y, groundSprite.width, 10 , {isStatic:true} );
	World.add(world, ground);

}

function draw() {
  rectMode(CENTER);
  background(0);
  	
	boxSide1Sprite.display();
	boxSide2Sprite.display();
	boxSide3Sprite.display();

	paper1.display();

	drawSprites();

	rectMode(CENTER)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 25, y: -20})
	}

	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x: -10, y: -10})
	}
}
