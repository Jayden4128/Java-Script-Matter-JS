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
var ground;
var mConstraint;

function setup() {
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    var prev = null;
    for(var x = 300; x < width; x+= 20)
    {
        var fixed = false;
        if(!prev)
        {
            fixed = true;
        }
        var p = new Particle(x,100,8,fixed);
        // var p2 = new Particle(200,150,10);
        particles.push(p);
        // particles.push(p2);
        

        if(prev)
        {
            var options = {
                bodyA: p.body,
                bodyB: prev.body,
                length: 20,
                stiffness: 0.4
            }
            
            var constraint = Constraint.create(options);
            World.add(world, constraint);
            }
            prev = p;
        }   

    boundaries.push(new Boundary(300,height,width,50));
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
    for(var i = 0; i < particles.length; i++)
    {
        particles[i].show();
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