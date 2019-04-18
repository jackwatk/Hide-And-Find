'use strict';
class Timer {
  constructor(canvasElement, timer) {
    this.maxWidth = 60;
    this.x = canvasElement.width/2 - this.maxWidth;
    this.y = canvasElement.height - 60;
    this.canvasElement = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.time = timer
  }
  draw = () => {
    //   let minuteString = this.timer.split
      this.ctx.font='30px Arial';
      this.ctx.fillText(`${this.time}`,20,50,200);
  }
 

}