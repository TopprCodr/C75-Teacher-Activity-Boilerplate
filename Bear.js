class Bear{
    constructor(x, y){
        var options = {
            friction: 1,
            restitution: 0.8,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(3);
        stroke("white");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
