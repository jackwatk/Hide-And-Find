'use strict';

function Player(canvasElement, lives){
    this.x = Math.random()*650;
	this.y = Math.random()*400;
    this.canvasElement = canvasElement;
    this.size = 20;
    this.lives = lives;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed = 5;
    this.direction = 0;
    this.runAnimation = new Animation(this.x, this.y);
}


var counter = 0;
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
     
        this.runAnimation.update(this.x, this.y)
            
        
    
}

Player.prototype.setDirection = function(direction){
        this.direction = direction;   
}

Player.prototype.draw = function(){
        this.runAnimation.draw();
}


 

Player.prototype.collidesWithComputerPlayer = function(computerPlayer) {

    var collidesTop = computerPlayer.y <= this.y + this.size;
    var collidesBottom = computerPlayer.y + computerPlayer.size >= this.y;
    var collidesRight = computerPlayer.x <= this.x + this.size;
    var collidesLeft = computerPlayer.x + this.size >= this.x;
    
   
    return collidesRight && collidesBottom && collidesTop && collidesLeft;
    
  }

  Player.prototype.collidesWithPole = function(pole) {

    var collidesTop = pole.y <= this.y + this.size-5;
    var collidesBottom = pole.y + pole.size-5 >= this.y;
    var collidesRight = pole.x <= this.x + this.size-5;
    var collidesLeft = pole.x + this.size-5 >= this.x;
    
   
    return collidesRight && collidesBottom && collidesTop && collidesLeft;
    
  }

  Player.prototype.collidesWithPlayer = function(playertwo){
    var collidesTop = playertwo.y <= this.y + this.size;
    var collidesBottom = playertwo.y + playertwo.size >= this.y;
    var collidesRight = playertwo.x <= this.x + this.size;
    var collidesLeft = playertwo.x + this.size >= this.x;
    
   
    return collidesRight && collidesBottom && collidesTop && collidesLeft;
}


//movement
Player.prototype.moveLeft = function(){
    
    this.setDirection(-1);
    this.x += this.speed*this.direction
    this.runAnimation.knightWalkLeft();
}

Player.prototype.moveRight = function(){
  
    this.runAnimation.knightWalk();
	this.setDirection(1);
	this.x += this.speed*this.direction
}
Player.prototype.moveUp = function(){
   
    this.setDirection(-1);
	this.y += this.speed*this.direction
}
Player.prototype.moveDown = function(){
    
    this.setDirection(1);
	this.y += this.speed*this.direction
}