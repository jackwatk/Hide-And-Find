'use strict';
class AnimateCharacter {
  constructor (playerX, playerY) {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.xIndex = 0;
    this.yIndex = 0;
    this.cols = 9;
    this.rows = 1;
    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.sheet = new Image();
    this.sheet.onload = () => {
        this.animate();
    }
    this.sheet.src = "shootingGame/animations/goldCoin.png";
    this.frameCount = 0;
  }
  // create counter for the frame index for slow down
  animate = () => {
    this.frameCount++;
    if ((this.frameCount) % 1 > 0) return;
    // update the current column
    this.xIndex = (this.xIndex + 1) % this.cols;
    // update the current row if x is 0
  this.yIndex = this.xIndex === 0 ? (this.yIndex + 1) % this.rows : this.yIndex;
    // three cells are empty on the last row...
 
    this.draw()
      this.xIndex = this.yIndex = 0;

 

}
 
  update (x, y) {
    this.playerX = x;
    this.playerY = y;
  }
  draw () {
    this.ctx.drawImage(this.sheet, this.xIndex * this.spriteWidth, this.yIndex * this.spriteHeight, this.spriteWidth, this.spriteHeight,
    0, 0, this.spriteWidth, this.spriteHeight
    )
  }
  // end of animation
}

