class Ball {
    constructor(x ,y, radius) {
        var options = {
            frictionAir:0.005,
            density:1.0
        }
        this.radius = radius
        this.body = Bodies.circle(x ,y ,radius, options)
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        push();
translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("cyan")
        ellipse(0, 0, this.radius, this.radius)
        pop();
    }
}