'use strict';
class Animation {
  constructor (playerX, playerY) {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.spriteSheet = new Image();
    this.spriteSheet.src = 'knight-idle.png';
    this.frameIndex = 0;
    this.frameSpeed = 45;
    this.speedCounter = 0;
    this.amountOfFrames = 3;
    this.playerX = playerX;
    this.playerY = playerY;
    this.imageWidth = 42;
    this.timeOutId = null;
    this.knightAttacking = false;
  }
  // create counter for the frame index for slow down
  frameIndexCounter () {
    this.speedCounter++;
    if (this.speedCounter === this.frameSpeed) {
      if (this.frameIndex < this.amountOfFrames - 1) {
        this.speedCounter = 0;
        this.frameIndex++;
      } else {
        this.speedCounter = 0;
        this.frameIndex = 0;
      }
    }
  }
  renderKnight (game) {
    this.amountOfFrames = 3;
    this.spriteSheet.src = 'knight-idle.png';
  }
  // walk right
  knightWalk (game) {
    this.amountOfFrames = 3;
    this.spriteSheet.src = 'knight-walk.png';
  }
  knightWalkLeft (game) {
    this.amountOfFrames = 3;
    this.imageWidth = 42;
    this.spriteSheet.src = 'knight-walk-left.png';
  }
  die (game) {
    this.amountOfFrames = 1;
    this.imageWidth = 31;
    this.spriteSheet.src = 'knight-death.png';
  }
  knightAttack (game) {
    this.knightAttacking = true;
    // time out is getting rid of idle?
    this.timeOutId = setTimeout(this.knightAttack2.bind(this), 500);
    this.renderKnight();
  }
  knightAttackLeft (game) {
    this.timeOutId = setTimeout(this.knightAttackLeft2.bind(this), 200);
  }
  knightAttack2 (game) {
    if (this.knightAttacking) {
      this.imageWidth = 42;
      this.spriteSheet.src = 'knight-attacking.png';
      this.amountOfFrames = 8;
    } else {
      this.renderKnight();
    }
    this.knightAttacking = false;

    clearTimeout(this.timeOutId);
  }
  update (x, y) {
    this.playerX = x;
    this.playerY = y;
  }
  draw () {
    this.ctx.drawImage(
      this.spriteSheet,
      this.frameIndex * 42,
      0,
      this.imageWidth, // 23
      this.imageWidth, // 162
      this.playerX,
      this.playerY,
      this.imageWidth, // 23
      this.imageWidth); // 162

    this.frameIndexCounter();
  }
  // end of animation
}

/* Animation.prototype.knightAttackLeft2 = function (game) {
  this.imageWidth = 42;
  // this.spriteSheet = new Image();
  this.spriteSheet.src = 'knight-attacking.png';
  clearTimeout(this.timeOutId);
  this.renderKnight();
}; */
