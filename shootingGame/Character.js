'use strict!';
class Character {
  constructor(canvas) {
    this.canvas = canvas;
    this.size = 40;
    this.x = Math.random() * this.canvas.width - this.size / 2;
    this.y = Math.random() * this.canvas.height - this.size / 2;
    this.ctx = canvas.getContext('2d');
    this.frames = 0;
    this.speed = 1.2;
    this.directionY = 0;
    this.directionX = 0;
    this.runAnimation = new Animation(this.x, this.y);
    this.img = new Image()
    this.img.src = "shootingGame/animations/single-blob.png"

  }
  draw = () => {
    //this.ctx.drawImage(this.img,this.x,this.y,this.size,this.size);
    this.runAnimation.draw();
  }
  update = () =>{
    this.frames++;
    if (this.frames % 80 === 0) {
      this.setDirection();
    }
    this.movePlayer();
    this.runAnimation.update(this.x,this.y);
  }
  movePlayer = () => {
    if (this.x < 0 || this.x + this.size > this.canvas.width) {
      this.directionX *= -1;
    }
    if (this.y < 0 || this.y + this.size > this.canvas.height) {
      this.directionY *= -1;
    }
    this.y += this.speed * this.directionY;
    this.x += this.speed * this.directionX;
  }

  setDirection = () => {
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

  getRandomDirection = () => {
    const possibleDirections = [-1, 0, 1];
    let randomIndex = Math.floor(Math.random() * possibleDirections.length);
    return possibleDirections[randomIndex];
  }

  }