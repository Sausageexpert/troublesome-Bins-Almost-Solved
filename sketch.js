


var garbage, canvas;
var engine, world;
var ground;
var bin1, bin2, bin3;
var rightEdge, leftEdge;
var rightBody, leftBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	garbage = new Waste(50, 300, 20, 20);
	ground = new Ground(400, 650, 800, 10);

	bin1 = new Bin(600, 552, 200, 10, 90);
//	bin2 = new Bin(700, 592, 200, 10, 90);
//	bin3 = new Bin(650, 640, 200, 10, 90);


	
	Engine.run(engine);

}

function draw() {
	background(0);
	Engine.update(engine);
	ground.display();
	
	garbage.display();
	bin1.display();


	drawSprites();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(garbage.body, garbage.body.position, { x: 16, y: -25 });


	}
}







