
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	ballObject=new Balls(200,450,40);
	ballObject2=new Balls(200,450,40);
	ballObject3=new Balls(200,450,40);
	ballObject4=new Balls(200,450,40);
	ballObject5=new Balls(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	rope = new Rope(ballObject.body,{x:300, y:50});
	rope2 = new Rope(ballObject2.body,{x:400, y:50});
	rope3 = new Rope(ballObject3.body,{x:500, y:50});
	rope4 = new Rope(ballObject4.body,{x:600, y:50});
	rope5 = new Rope(ballObject5.body,{x:700, y:50});


	Engine.run(engine);
	//Render.run(render); 
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
 
  ballObject.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  rope.display();   
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 
  
  
  groundObject.display();
  
}


