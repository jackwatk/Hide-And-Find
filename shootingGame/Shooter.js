'use strict!';
class Shooter {
  constructor(canvas) {
    this.canvas = canvas;
    this.size = 70;
    this.x = this.canvas.width / 2 - this.size / 2;
    this.y = this.canvas.height / 2 - this.size / 2;
    this.ctx = canvas.getContext('2d');
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 6;
    this.color = "#FF0000";
    this.img = new Image();
    this.img.src = 'shootingGame/scope.png';
    this.runAnimation = new Animation(this.x,this.y);
    this.isHidden = false;
    
  }
  draw = () => {
  this.isHidden ? this.runAnimation.draw() : this.ctx.drawImage(this.img,this.x-this.size/2,this.y-this.size/2,this.size,this.size)
  
  }
  update = () => {
    this.x = this.x + this.directionX * this.speed;
    this.y = this.y + this.directionY * this.speed;
    this.isHidden ? this.updateBrown() : null;
  }
  updateBrown = () => {
    if(this.isHidden){
      if (this.directionY === -1 || this.directionX === -1) {
        this.runAnimation.knightWalkLeft();
      } else if (this.directionY === 1 || this.directionX === 1) {
        this.runAnimation.knightWalk();
      } else if (this.directionX === null){
        this.runAnimation.die()
      } else {
        this.runAnimation.renderKnight();
      }
      this.runAnimation.update(this.x, this.y);
    }
  }
  setDirectionX = (direction) => {
    this.directionX = direction;
  }
  setDirectionY = (direction) => {
    this.directionY = direction;
  }
  checkCollisionWithCrossHair = (thing) => {
    let right = this.x < thing.x + thing.size;
    let left  = this.x > thing.x ; 
    let top = this.y < thing.y + thing.size/2;
    let bottom = this.y > thing.y - thing.size;
    return right && left && top && bottom;
  }

}
class HiddenPlayer extends Shooter {
  constructor(canvas) {
    super(canvas);
    this.x = Math.random() * this.canvas.width - this.size / 2;
    this.y = Math.random() * this.canvas.height - this.size / 2;
    this.size = 40;
    this.speed = 1.8;
    this.img.src = "shootingGame/animations/single-blob.png"
    this.isHidden = true;
    }
    checkCollisionWithPlayer = (thing) => {
    const collidesTop = thing.y <= this.y + this.size;
    const collidesBottom = thing.y + thing.size >= this.y;
    const collidesRight = thing.x <= this.x + this.size;
    const collidesLeft = thing.x + this.size >= this.x;
    return collidesRight && collidesBottom && collidesTop && collidesLeft;
    }
}