'use strict';

class Pole {
  constructor (canvasElement, initialPosition) {
    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.canvasElement = canvasElement;
    this.size = 80;
    this.ctx = this.canvasElement.getContext('2d');
    this.hasChimedForPlayer = false;
    this.hasChimedForPlayer2 = false;
    this.img = new Image();
    this.img.src = 'tower_round_flag.png';
  }
  draw () {
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}
