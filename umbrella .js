class Umbrella{
    constructor(x,y){
    var options = {
    isStatic : true
    }
    this.x = x;
    this.y = y;
    this. r = 50;
    this.animation = loadImage("walking_1.png");
    this.body = Bodies.circle(x,y, 50, options)
    World.add(world, this.body)
    }
    
    display(){
    var pos = this.body.position;
      // push()
      // translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.animation,pos.x,pos.y + 30, 300,300)
       //pop()
    }
}