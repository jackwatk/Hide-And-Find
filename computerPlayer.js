'use strict';

class ComputerPlayer {
  constructor (canvasElement) {
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.size = 40;
    this.x = Math.random() * this.canvasElement.width - this.size;
    this.y = Math.random() * this.canvasElement.width - this.size;
    this.speed = 1;
    this.directionY = 0;
    this.directionX = 0;
    this.lives = 1;
    this.runAnimation = new Animation(this.x, this.y);
    this.intervalID = null;
    this.frames = null;
    this.collidingWithPlayer = false;
    this.dieing = false;
  }
  update () {
    this.frames++;

    if (this.frames % 80 === 0) {
      this.setDirection();
    }

    if (this.x < 0 || this.x + this.size > this.canvasElement.width) {
      this.directionX *= -1;
    }
    if (this.y < 0 || this.y + this.size > this.canvasElement.height) {
      this.directionY *= -1;
    }
    this.y += this.speed * this.directionY;
    this.x += this.speed * this.directionX;
    this.runAnimation.update(this.x, this.y);
  }
  setDirection (direction) {
    this.directionY = this.getRandomDirection();
    this.directionX = this.getRandomDirection();
    if (this.directionY === -1 || this.directionX === -1) {
      this.runAnimation.knightWalkLeft();
    } else if (this.directionY === 1 || this.directionX === 1) {
      this.runAnimation.knightWalk();
    } else if (this.directionY === 3) {
      this.runAnimation.die();
    } else {
      this.runAnimation.renderKnight();
    }
  }
  getRandomDirection (direction) {
    const possibleDirections = [-1, 0, 1];
    let randomIndex = Math.floor(Math.random() * possibleDirections.length);

    return possibleDirections[randomIndex];
  }
  draw () {
    this.runAnimation.draw();
  }
  randomDecider () {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }
  randomiseMovement () {
    let randomPath = this.randomDecider();
    if (randomPath === 0) {
      this.moveLeft();
      this.x--;
    }
    if (randomPath === 1) {
      this.moveRight();
      this.x++;
    }
    if (randomPath === 2) {
      this.moveUp();
      this.y--;
    }
    if (randomPath === 3) {
      this.moveDown();
      this.y++;
    };
  }

  endRandomiseMovement (intervalID) {
    window.clearInterval(intervalID);
  }
  // end of computerplayer
}
