'use strict';

function ComputerPlayer(canvasElement){
    this.x = Math.random()*650;
	this.y = Math.random()*400;
    this.canvasElement = canvasElement;
    this.size = 20;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed = 1;
    this.directionY = 0;
    this.directionX = 0;
    this.lives = 1;
    this.runAnimation = new Animation(this.x, this.y);
    this.intervalID;
    this.frames = null;
}

ComputerPlayer.prototype.update = function(){

    this.frames++;

    if (this.frames % 80 === 0) {
        this.setDirection()
    }

    if (this.x < 0 || this.x + this.size > this.canvasElement.width) {
        this.directionX *= -1;
    } 
    if (this.y < 0 || this.y + this.size > this.canvasElement.height){
        this.directionY *= -1;
    }
    this.y += this.speed * this.directionY;
    this.x += this.speed * this.directionX;
    this.runAnimation.update(this.x, this.y)
}

ComputerPlayer.prototype.setDirection = function(direction){
    this.directionY = this.getRandomDirection(); 
    this.directionX = this.getRandomDirection();
}


ComputerPlayer.prototype.getRandomDirection = function(direction){
    var possibleDirections = [-1, 0, 1];
    var randomIndex = Math.floor(Math.random() * possibleDirections.length)
    
    return possibleDirections[randomIndex];
}

ComputerPlayer.prototype.draw = function(){
    this.runAnimation.draw();
   
}

ComputerPlayer.prototype.randomDecider = function(){
    var randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
}

ComputerPlayer.prototype.randomiseMovement = function(){
    var randomPath = this.randomDecider();
     if(randomPath === 0){
        this.moveLeft();
        this.x--
     }
     if(randomPath === 1){
        this.moveRight();
        this.x++
     }
     if(randomPath === 2){
        this.moveUp();
        this.y--
     }
     if(randomPath === 3){
        this.moveDown();
        this.y++
     };
}

ComputerPlayer.prototype.endRandomiseMovement = function(intervalID){
    window.clearInterval(intervalID);
}


    
ComputerPlayer.prototype.moveLeft = function(){
    this.setDirection(-1);
    this.x += this.speed*this.direction
    this.runAnimation.knightWalkLeft();
}

ComputerPlayer.prototype.moveRight = function(){

    this.runAnimation.knightWalk();
	this.setDirection(1);
	this.x += this.speed*this.direction
}
ComputerPlayer.prototype.moveUp = function(){
    this.setDirection(-1);
	this.y += this.speed*this.direction
}
ComputerPlayer.prototype.moveDown = function(){
    this.setDirection(1);
	this.y += this.speed*this.direction
}
