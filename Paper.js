class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body)
    }
        display(){
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,30,30);
          //ellipse(RADIUS);
          //ellipse(this.body.position.x,this.body.position.y,30,30);
        }
    }