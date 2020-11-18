class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
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
}