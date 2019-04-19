'use strict';
class Placeholder {
  constructor(canvasElement, playerPositionX, playerPositionY,isPlayer) {
    this.size = 40;
    this.x = playerPositionX
    this.y = playerPositionY;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.img = new Image();
    this.img.src = 'die.png'
    this.active = true;
    this.isPlayer = isPlayer

  }

  draw = () => {
  this.ctx.drawImage(this.img,this.x+this.size/2, this.y+this.size/2, this.size, this.size);      
  this.isPlayer ? this.stopFall() : null;
  }
  
  stopFall = () => {
    setTimeout(()=>{this.img.src = 'rip.png'}, 1500)
  }

}