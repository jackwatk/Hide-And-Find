'use strict';

function Pole(canvasElement, initialPosition){
    this.x = initialPosition.x;
	this.y = initialPosition.y;
    this.canvasElement = canvasElement;
    this.size = 80;
    this.ctx = this.canvasElement.getContext('2d');
    this.hasChimedForPlayer = false;
    this.hasChimedForPlayer2 = false;
    this.img = new Image();
    this.img.src = "tower_round_flag.png";
}


Pole.prototype.draw = function() {
/*     this.ctx.fillStyle="#FF0000";
    this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size) */

    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);

    
}

    
    
