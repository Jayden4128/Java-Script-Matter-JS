var Engine = Matter.Engine,
//Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var ground;
var boundaries = [];
var particles = [];
var boxes = [];
var ground;
var mConstraint;

function setup() {
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    var prev = null;
    var x = 150;
    var p = new Particle(x,100,8,true);
    var p2 = new Particle(150,600,20,false);
    particles.push(p);
    particles.push(p2);
    var options = {
        bodyA: p.body,
        bodyB: p2.body,
        length: 480,
        stiffness: 0.4
    }
            

    var constraint = Constraint.create(options);
    World.add(world, constraint);
    for(var boxX = 0; boxX < 35; boxX+= 1)
    {
        var b = new Box(400,0,random(55,100),random(50,50));
        boxes.push(b);
    }    

            
     

    boundaries.push(new Boundary(400,height,width,50));
    //boxes.push(new Box(300,10,100,100));
    // ground = new Boundary(200,height,width,50);
    // World.add(world,ground);
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
        var options = {
            mouse: canvasMouse
        }
        
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world,mConstraint);
}

function draw() {
    background(41);
    Engine.update(engine);
    // ground.show();
    for(var i = 0; i< boundaries.length; i++)
    {
        boundaries[i].show();
    }
        particles[1].show();
    for(var i = 0; i< boxes.length; i++)
    {
        boxes[i].show();
    }
    // line(particles[0].body.position.x,particles[0].body.position.y,particles[1].body.position.x,particles[1].body.position.y);
    //Engine.run(engine);
    if(mConstraint.body)
    {
        var pos = mConstraint.body.position;
        var offset = mConstraint.constraint.pointB;
        var m = mConstraint.mouse.position;
        stroke(0,255,0);
        line(pos.x+offset.x,pos.y+offset.y,m.x,m.y);
    }

}