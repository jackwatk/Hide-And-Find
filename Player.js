'use strict';

class Player {
  constructor (canvasElement, lives) {
    this.x = Math.random() * 650;
    this.y = Math.random() * 400;
    this.canvasElement = canvasElement;
    this.size = 40;
    this.lives = lives;
    this.ctx = this.canvasElement.getContext('2d');
    this.speed = 1;
    this.directionY = 0;
    this.directionX = 0;
    this.runAnimation = new Animation(this.x, this.y);
    this.winner = 0;
    this.chimeCount = 0;
  }
  // Update Method
  update () {
    if (this.directionX === 1) {
      this.x += this.speed * this.directionX;
    }

    if (this.directionX === -1) {
      this.x += this.speed * this.directionX;
    }
    if (this.directionY === 1) {
      this.y += this.speed * this.directionY;
    }
    if (this.directionY === -1) {
      this.y += this.speed * this.directionY;
    }

    this.runAnimation.update(this.x, this.y);
  }
  // Set x axis direction and animate
  setDirectionX (directionX) {
    this.directionX = directionX;
    if (this.directionX === -1) {
      this.runAnimation.knightWalkLeft();
    } else if (this.directionX === 1) {
      this.runAnimation.knightWalk();
    } else {
      this.runAnimation.renderKnight();
    }
  }
  // Set y axis direction and animate
  setDirectionY (directionY) {
    this.directionY = directionY;
    if (this.directionY === -1) {
      this.runAnimation.knightWalkLeft();
    } else if (this.directionY === 1) {
      this.runAnimation.knightWalk();
    } else {
      this.runAnimation.renderKnight();
    }
  }
  // animate on draw
  draw () {
    this.runAnimation.draw();
  }
  // detect collision with cp
  collidesWithComputerPlayer (computerPlayer) {
    const collidesTop = computerPlayer.y <= this.y + this.size;
    const collidesBottom = computerPlayer.y + computerPlayer.size >= this.y;
    const collidesRight = computerPlayer.x <= this.x + this.size;
    const collidesLeft = computerPlayer.x + this.size >= this.x;
    return collidesRight && collidesBottom && collidesTop && collidesLeft;
  }
  // detect collision with pole
  collidesWithPole (pole) {
    const collidesTop = pole.y <= this.y + this.size - 5;
    const collidesBottom = pole.y + pole.size - 5 >= this.y;
    const collidesRight = pole.x <= this.x + this.size - 5;
    const collidesLeft = pole.x + this.size - 5 >= this.x;

    return collidesRight && collidesBottom && collidesTop && collidesLeft;
  }
  // detect collison with Player
  collidesWithPlayer (playertwo) {
    const collidesTop = playertwo.y <= this.y + this.size;
    const collidesBottom = playertwo.y + playertwo.size >= this.y;
    const collidesRight = playertwo.x <= this.x + this.size;
    const collidesLeft = playertwo.x + this.size >= this.x;

    return collidesRight && collidesBottom && collidesTop && collidesLeft;
  }
  //
}
