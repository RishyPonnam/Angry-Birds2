class chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain = Constraint.create(options)
    World.add(world,this.chain)
    }
    display() {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(3);
    stroke("brown")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}