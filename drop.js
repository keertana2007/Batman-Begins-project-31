class Drop{
    constructor(x,y){
    var options = {
          //isStatic: false,
        restitution: 0.1,
        friction: 0.001,
          // density: 0.8
    }
    
     //this.x = x; //not required
     //this.y = y;
    this.radius = 5;
    this.body = Bodies.circle(x,y,18, options);
    World.add(world,this.body)
    }

    display(){
    var paperpos = this.body.position;
     //push();
     //translate(paperpos.x,paperpos.y);
    fill("#0000A0");
    ellipseMode(CENTER);
    ellipse(paperpos.x,paperpos.y,this.radius,this.radius);
     //pop();

    
    }
    updateY(){     
        if(this.body.position.y > 700){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}