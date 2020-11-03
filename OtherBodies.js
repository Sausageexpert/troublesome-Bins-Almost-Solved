class otherBodies{
    constructor(x, y, width, height, angle){
    var  options = {
      'isStatic':true,
     }

     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    }

    display(){
        var pos2 = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos2.x, pos2.y);
        rect(0, 0, this.width, this.height);
        pop();
    }
}