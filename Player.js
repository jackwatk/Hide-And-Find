'use strict';

function Player(canvasElement, lives){
    this.x = 0
	this.y = 0
    this.canvasElement = canvasElement;
    this.size = 30;
    this.lives = lives;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed;
	this.Direction;
}

Player.prototype.update = function(){
    console.log("Player Update");
}

Player.prototype.draw = function(){
    console.log("Player Draw");
    this.ctx = fillRect(this.x,this.y, this.size);
}

Player.prototype.setDirection = function(){
    console.log("Player Direction Set")
} 

Player.prototype.collidedWithPlayer() = function(){
    console.log("you bumped into a player");
}
Player.prototype.collidedWithComputerPlayer() = function(){
    console.log("you bumped into a computerPlayer")
}
