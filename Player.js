'use strict';

function Player(canvasElement, lives){
    this.x = 100
	this.y = 100
    this.canvasElement = canvasElement;
    this.size = 10;
    this.lives = lives;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed = 5;
	this.direction = 0;
}

Player.prototype.update = function(){
    
    if (this.y <= this.size / 2) {
        this.setDirection(1);
      }
    
      if (this.y >= this.size / 2) {
        this.setDirection(-1);
      }
      if (this.x >= this.size / 2) {
        this.setDirection(-1);
      }
      if (this.x <= this.size / 2) {
        this.setDirection(1);
      }
}

Player.prototype.setDirection = function(direction){
        this.direction = direction;   
}

Player.prototype.draw = function(){
    this.ctx.fillRect(this.x,this.y, this.size, this.size);
}




/* Player.prototype.collidedWithPlayer() = function(){
    console.log("you bumped into a player");
}
Player.prototype.collidedWithComputerPlayer() = function(){
    console.log("you bumped into a computerPlayer")
}
 */

Player.prototype.collidesWithEnemy = function(computerPlayer) {

    var collidesTop = computerPlayer.y <= this.y + this.size;
    var collidesBottom = computerPlayer.y + computerPlayer.size >= this.y;
    var collidesRight = computerPlayer.x <= this.x + this.size;
    var collidesLeft = computerPlayer.x >= this.x + this.size;
    
    return collidesRight && collidesBottom && collidesTop && collidesLeft;
    
  }