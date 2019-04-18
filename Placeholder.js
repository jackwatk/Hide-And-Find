'use strict';
class Placeholder {
  constructor(canvasElement, playerPositionX, playerPositionY) {
    this.size = 10;
    this.x = playerPositionX
    this.y = playerPositionY;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.img = new Image();
    this.img.src = 'rip.png'
    this.active = true;
    this.isPlayerDeath = false;
  }

  draw = () => {
    if(this.active){
        this.ctx.drawImage(this.img,this.x-this.size/2, this.y-this.size/2, this.size, this.size);
    }
    !this.isPlayerDeath ? this.stopPlaceholder() : null;
    
  }
  stopPlaceholder = () => {
      setTimeout(()=>{this.active = false}, 3000)
  }
 

}