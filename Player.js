'use strict';

function Player(){
    this.x = 0
	this.y = 0
	this.canvasElement;
	this.ctx
	this.speed
	this.Direction
}

Player.prototype.update = function(){
    console.log("Player Update");
}

Player.prototype.draw = function(){
    console.log("Player Draw")
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
