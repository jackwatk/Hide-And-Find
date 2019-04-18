'use strict';
class Placeholder {
  constructor(canvasElement, playerPositionX, playerPositionY) {
    this.size = 40;
    this.x = playerPositionX
    this.y = playerPositionY;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.img = new Image();
    this.img.src = 'die.png'
    this.active = true;

  }

  draw = () => {
  
        this.ctx.drawImage(this.img,this.x+this.size/2, this.y+this.size/2, this.size, this.size);
      this.stopFall();
  }
  stopFall = () => {
    setTimeout(()=>{this.img.src = 'rip.png'}, 1500)
  }

}