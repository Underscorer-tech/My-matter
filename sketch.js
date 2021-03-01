
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine ;
var world; 
var object;
var gravityless;
var ground;
var myproperty;
var ball;
var ball_option;

function setup(){
  gravityless={isStatic:true};

  var canvas=createCanvas(400,400);

  engine = Engine.create();
  
  world= engine.world;

  object= Bodies.rectangle(200,200,50,50,gravityless);
ball_option={restitution:20};
  World.add(world,object);

  //console.log(object);

  console.log(object.position.x);

  console.log(object.position.y);

  ground=Bodies.rectangle(200,390,400,30,gravityless);

  World.add(world,ground);

  myproperty={isStatic:true};

ball = Bodies.circle(150,150,25,ball_option);

World.add(world,ball);

}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,20);
   circle(ball.position.x,ball.position.y,25);

  }
