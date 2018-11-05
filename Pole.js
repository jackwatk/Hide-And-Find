'use strict';

function Pole(canvasElement,initialPosition){
    this.x = initialPosition.x;
	this.y = initialPosition.y;
    this.canvasElement = canvasElement;
    this.size = 20;
	this.ctx = this.canvasElement.getContext('2d');
}


Pole.prototype.draw = function() {
    this.ctx.fillStyle="#FF0000";
    this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size)
  
}

    
    
