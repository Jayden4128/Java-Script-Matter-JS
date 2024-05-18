function Box(x,y,w,h)
{
    var options = {
        friction: .8,
        restitution: .8,
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    //this.body.angle = PI / 4;
    this.w = w;
    this.h = h;
    World.add(world,this.body);

    this.show = function(){
        var pos = this.body.position;
        push();
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(1);
        noStroke();
        fill(255,50,50);
        rect(0, 0, this.w, this.h);
        pop();
    }
}