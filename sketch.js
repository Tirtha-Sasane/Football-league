const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var goal;
var backgroundImg,platform;
var ball, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/Audience silhouettes.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
    goal = new GoalCoast(900, 350);
    ball = new Ball(100,100);

    slingshot = new SlingShot(ball.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    goal.display();
    ball.display();
    platform.display();
    slingshot.display(); 
    
    if(ball.isColliding(goal)){
       ball.visible=false;
       goal.visible=false;
       platform.visible=false;
       ground.visible=false;
       slingShot.visible=false;
       backgroundImg.loadImage("sprites/goal.png")
    }
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}