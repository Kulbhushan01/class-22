class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.connon_image=loadImage("assets/canon.png");
    this.connon_base=loadImage("assets/cannonBase.png");
  }
  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.connon_image,0,0,this.width,this.height);
    pop();
    image(this.connon_base,70,20,200,200);
    noFill();
  }
}
