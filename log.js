class Log {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     this.image = loadImage("th.jpg");
      this.visibilty=255 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER)
      if (this.body.speed<3) {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        
        image(this.image,0,0,50,50)
      pop();
      }
      else{
        World.remove(world, this.body);
        this.visibilty=this.visibilty-3
        push();
        tint (255,this.visibilty)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();

        
      
    }
  }
    calculateScore(){
      console.log(this.visibilty)
      if(this.visibilty<0 && this.visibilty>-105){
        score++;
      }
    }
  
  };

