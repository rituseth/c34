const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render  =Matter . Render
var engine, world;
var g1 ; 
var b1  ,b2
var rope
var  ball1
function preload() {
  
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground(600 ,700,1200,20)
b1  =new Box(900,100,50,50)
   b2  =new Box(900,100,50,50)
   ball1 = new Ball(200,200,80,80)
   rope = new Rope (ball1.body , {x:105 , y:50})

   var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });


Render.run(render);
}

function draw(){
    background("white")
    Engine.update(engine)
    g1.display();
   b1.display();
   b2.display();
rope.display();
ball1.display();
}

function mouseDragged(){
Matter. Body.setPosition(ball1.body  , {x :mouseX  , y:mouseY})
}


