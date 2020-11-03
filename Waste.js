class Waste{
    constructor(x, y, width, height){
    var options ={
        'restitution': 0.1,
        'isStatic': false,
        'friction': 0.5,
        'density': 1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Paper.png");
    World.add(world, this.body);

    }
   display(){
        var where = this.body.position;
        push();
        translate(where.x, where.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();
    }

};
