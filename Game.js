'use strict';
function Game(canvasElement) {
	this.gameIsOver = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');    
    this.lives = 1;
        
	this.initialPositionPole = {
		x: 100,
		y: 100
	}
		this.player = null;
		this.computerPlayersAmount = 2;
		this.polesAmount = 5;
	this.computerPlayers = [];
	this.poles = [];
	this.collided = false;
		
}
var poleSound = new Audio("pole.wav");
var attackSound = new Audio("attack.wav");
var attackSound2 = new Audio("attacking.wav");
var fallSound = new Audio("fall.wav");

Game.prototype.start = function() {
    this.gameIsOver = false;
    this.startLoop();
    

} 

Game.prototype.startLoop = function() {
    //player instance
    this.player = new Player(this.canvasElement);
		//ComputerPlayer instance
		for(var i=0; i<this.computerPlayersAmount; i++){
			this.computerPlayers.push(new ComputerPlayer(this.canvasElement));
		}
		//poles instance
		for(var i=0; i<this.polesAmount; i++){
			//top left
			if(i === 0) {
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			//top right
			if(i === 1) {
				this.initialPositionPole={
					x:600,
					y:100
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			//bottom left
			if(i === 2) {
				this.initialPositionPole={
					x:100,
					y:400
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			// middle
			if(i === 3) {
				this.initialPositionPole={
					x:350,
					y:250
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			//bottom right
			if(i === 4) {
				this.initialPositionPole={
					x:600,
					y:400
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
	
		
	
			
			
		}
    //get context

    //button handling for player
  // change to switch
    this.handleKey = function(event) {
			
        if (event.key === 'ArrowUp' && this.player.y>0) {
        this.player.setDirection(-1);
            this.player.y += this.player.speed*this.player.direction
        
        } else if (event.key === 'ArrowDown' && this.player.y<490) {
			
                this.player.setDirection(1);
                this.player.y += this.player.speed*this.player.direction
        
        }
        else if (event.key === 'ArrowLeft' && this.player.x>0) {
            
            this.player.setDirection(-1);
            this.player.x += this.player.speed*this.player.direction
            
            }
        else if (event.key === 'ArrowRight' && this.player.x<690){
						
			
            this.player.setDirection(1);
            this.player.x += this.player.speed*this.player.direction
        }
		}.bind(this)
		
		this.handleAttack = function(event) {
				if(event.key === '/' && this.collided){
					console.log("attacked success");
					attackSound.play();
					fallSound.play();
					this.finishGame();
				} else if (event.key === '/') {
					console.log("random attack");
					attackSound2.play();
				}
		}.bind(this);


		document.addEventListener('keydown', this.handleAttack);	
    document.addEventListener('keydown', this.handleKey);
		
   

    var gameLoop = function() {
        
        this.clearAll();   
        this.drawAll();
				this.updateAll();
				this.checkAllCollisions();
        
      
       
			

      if (!this.gameIsOver) {
        requestAnimationFrame(gameLoop);
      }
		
    }.bind(this);
  
    gameLoop();
  }

Game.prototype.updateAll = function(){
    //player
    this.player.update();
    //computer Players
		this.computerPlayers.forEach(function(computerPlayer){
			computerPlayer.update();
		})
		
    //poles
}
  Game.prototype.drawAll = function(){
      //player
        this.player.draw();
			//computerPlayers
			this.computerPlayers.forEach(function(computerPlayer){
				computerPlayer.draw();
			})

			//poles
			this.poles.forEach(function(pole){
				pole.draw();
			})
			
  }

  
  Game.prototype.clearAll = function(){

    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
 
}
	Game.prototype.checkAllCollisions = function(){
		this.computerPlayers.forEach(function(computerPlayer){
			if (this.player.collidesWithComputerPlayer(computerPlayer)) {
						console.log("collision");
						
						this.collided = true;
			}
				else{
						this.collided = false;
				}

		
			
			}.bind(this));

			this.poles.forEach(function(pole){
				if (this.player.collidesWithPole(pole) && pole.hasChimed === false) {
							console.log("collision Pole");
							pole.hasChimed = true;
							
							poleSound.play();
							
				}
					else{
							this.collided = false;
					}
	
			
				
				}.bind(this));
	








	}







  Game.prototype.onGameOverCallBack = function(callback){
       
    this.gameOverCallback = callback;

  }

  Game.prototype.finishGame = function(){
				
		console.log("game finished")
      this.gameOverCallback();
      
      this.gameIsOver = true;
  }

 