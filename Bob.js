class Bob{
    constructor(x, y, radius) {
        var options = {
           // 'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':3
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
        
      }
    
}