function Boundary(x,y,w,h)
{
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h=h;
    World.add(world, this.body);
}

Boundary.prototype.show = function()
{
    if(frameCount % 30 == 0)
    {
        this.rColor = random(100,255);
        this.gColor = random(0,255);
        this.bColor = random(0,255);
    }
    fill(this.rColor,0,0);
    noStroke();
    //stroke(this.rColor,this.gColor,this.bColor);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
    
}
