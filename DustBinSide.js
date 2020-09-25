class DustBinSide {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }
      display(){
        //push();
        //translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y, this.width, this.height)
        //pop();
      }
}