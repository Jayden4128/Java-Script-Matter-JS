function gBox(x,y,w,h,a)
{
    var options = {
        friction: .4,
        restitution: .5,
        angle: a,
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    //this.body.angle = PI / 4;
    this.w = w;
    this.h = h;
    World.add(world,this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        noStroke();
        fill(75,75,75);
        rect(0, 0, this.w, this.h);
        pop();
    }
}