class Box {
    constructor(x, y) {
      var options = {
          restitution:0.0001,
          friction:5,
          
      }
      this.body = Bodies.rectangle(x, y, 20, 50, options);
      this.width = 50;
      this.height = 70;
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  