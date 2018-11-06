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
     /*  function randomCounter(){
        var random = Math.random()* 300000
        return random;
    }
        counter = randomCounter();
        if(counter < 10000) {
            this.y--;
            
            
        } else if(counter < 40000){
            this.x++;
    
        } else if(counter < 80000){
            this.y--;
            this.x--;
            
        } else if(counter < 100000){
            this.y++
            
    
        } else if(counter < 140000){
            this.x--;
    
        } else if(counter < 180000){
            this.y++
            this.x++;
    
        } else if(counter < 220000){
            this.y--
            this.x--;
    
        }  else if(counter < 260000){
            this.y++
            this.x++;
    
        } else{
            //put in here to put overall direction eg an x random that eventually ends with a certain direction
        } */
        this.runAnimation.update(this.x, this.y)
            
        
    
}

Player.prototype.setDirection = function(direction){
        this.direction = direction;   
}

Player.prototype.draw = function(){
    this.runAnimation.renderKnight();
    this.runAnimation.frameIndexCounter();
    
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