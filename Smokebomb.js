'use strict';
class Smokebomb {
  constructor(canvasElement, playerPositionX, playerPositionY) {
    this.size = 10;
    this.x = playerPositionX
    this.y = playerPositionY;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.img = new Image();
    this.img.src = 'smoke.png'
    this.active = true;
  }

  draw = () => {
    if(this.active){
        this.ctx.drawImage(this.img,this.x-this.size/2, this.y-this.size/2, this.size, this.size);
        
        this.size +=3 ;
    }
    this.stopSmokeBomb();
    
  }
  stopSmokeBomb = () => {
      setTimeout(()=>{this.active = false}, 3000)
  }
 

}