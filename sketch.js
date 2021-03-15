const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ball1,power,wall1,wall2;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,80,80);
    box2 = new Box(200,200,60,60);
    box3 = new Box(200,100,40,40)
    ball1 = new Ball(600,520,20)
    ground = new Ground(400,height,800,20)
    wall1 = new Ground(5,height/2,10,height)
    wall2 = new Ground(width-5,height/2,10,height)
    power = 0;
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box3.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    ball1.display()
    ground.display();
    wall1.display()
    wall2.display();

    if(mouseIsPressed && power<20)
{
    power++
}}
function mousePressed(){
    Matter.Body.setVelocity(ball1.body,{x:power*-1,y:power})
    power =0;
}