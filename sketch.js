const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var box1,box2;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,50,options);
  World.add(world,ground)

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100)


 
}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)

  box1.display();
  box2.display();
 
  

  
}