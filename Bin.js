class Bin{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'isStatic':true
      }
      this.bottomBody = Bodies.rectangle(x, y, width, height, options);
      this.leftBody = Bodies.rectangle(x, y, width, height, options);
      this.rightBody = Bodies.rectangle(x, y, width, height, options);
      
      this.width = 200;
      this.height = 200;
    //  this.angle = PI/4;
      this.image = loadImage("bin.png");
      World.add(world, this.bottomBody);
      World.add(world, this.rightBody);
    }
    display(){
      var angle = this.bottomBody.angle;
    //  var angle2 = this.rightBody.angle;

      push();
      translate(this.leftBody.position.x, this.leftBody.position.y);
      rotate(this.angle);
      fill("white");
      rectMode(CENTER);
      rect(-100,0, 20, 200);
      pop();

      push();
      translate(this.rightBody.position.x, this.rightBody.position.y);
      rotate(-1*this.angle);
      fill("white");
      rectMode(CENTER);
      rect(100, 0, 20, 200);
      pop();

      push();
      translate(this.bottomBody.position.x, this.bottomBody.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}