function Plinko(x,y,r)
{
    var options = {
        restitution:1,
        friction:0,
        isStatic:true
    }
    
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world, this.body);
}

Plinko.prototype.show = function()
{
    if(frameCount % 30 == 0)
    {
        this.gColor = random(100,255);
    }
    
    fill(0,this.gColor,0);
    //stroke(0);
    noStroke();
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}