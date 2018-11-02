'use strict';

function Player(canvasElement, lives){
    this.x = 150
	this.y = 0
    this.canvasElement = canvasElement;
    this.size = 30;
    this.lives = lives;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed = 5;
	this.direction = 0;
}

Player.prototype.update = function(){
    
    console.log("Player Update");
    if (this.y <= this.size / 2) {
        this.setDirection(1);
      }
    
      if (this.y >= this.x - this.size / 2) {
        this.setDirection(-1);
      }
    
      this.y += this.speed * this.direction;
    }.bind(this);

Player.prototype.setDirection = function(){
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