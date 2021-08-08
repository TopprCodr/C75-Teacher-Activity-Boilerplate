class Ghost{
    constructor(x, y){
        var options = {
            friction: 1,
            restitution: 0.8,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width = 70;
        this.height = 70;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("white");
        strokeWeight(3);
        stroke("grey");
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
