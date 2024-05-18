function Circle(x,y,r)
{
    var options = {
        friction: .4,
        restitution: .5
    }
    this.body = Bodies.circle(x,y,r,options);
    this.body.friction = 0;
    this.r =r;
    World.add(world,this.body);

    this.isOffScreen = function(){
        var pos = this.body.position;
        return(pos.y > height + 100);

    }
    this.removeFromWorld = function()
    {
        World.remove(world, this.body);
    }

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        noStroke(255);
        fill(0,255,255);
        ellipse(0, 0, this.r*2);
        pop();
    }
}