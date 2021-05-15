class Robot{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("image/helper.png");
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(pos.x,pos.y,this.width,this.height);
    }
}