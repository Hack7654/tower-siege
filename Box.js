class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
  display(){
    if (this.body) {
      super.display();
    }
   var body1=this;
    var body2=bird;
    // console.log(body1.body.position.x-body2.body.position.x);
    // console.log(body2);
    if (this.body && Math.abs(body1.body.position.x-body2.body.position.x)<=body1.width/2+body2.width/2 && Math.abs(body1.body.position.y-body2.body.position.y)<=body1.height/2+body2.height/2) {
      World.remove(world, this.body);
      this.body=null;
      console.log("harsha");
    }
  }
};
