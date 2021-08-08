class Log{
    constructor(x, y, height, angle){
        var options = {
            friction: 1.2,
            restitution: 0.8,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("grey");
        strokeWeight(3);
        stroke("white");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
