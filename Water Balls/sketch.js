var Engine = Matter.Engine,
//Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var circles = [];
var boundaries = [];

var ground;

function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    boundaries.push(new gBox(250, 300, width*.6, 25, -.3));
    boundaries.push(new gBox(100, 200, width*.6, 25, .3));

    //World.add(world,ground);
}

// function mouseDragged()
// {
//     circles.push(new Circle(mouseX, mouseY, random(5,20)));
// }
function draw() {
    background(120,160,120);
    circles.push(new Circle(200, 50, random(5,20)));
    //Engine.run(engine);
    for(var i = 0; i < circles.length; i++)
    {
        circles[i].show();
        if(circles[i].isOffScreen())
        {
            circles[i].removeFromWorld();
            circles.splice(i,1); 
            i--;
        }
    }
    for(var j = 0; j < boundaries.length; j++)
    {
        boundaries[j].show();
    }
}