'use strict';
function Game(canvasElement) {
	this.gameIsOver = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');    
    this.lives = 1;
        
	this.initialPositionPole = {
		x: 40,
		y: 40
	}
		this.player = null;
		this.player2 = null;
		this.animation = null;
		this.computerPlayersAmount = 10;
		this.polesAmount = 5;
	this.computerPlayers = [];
	this.poles = [];
	this.playerTouchingComputerPlayer = false;
	this.playersTouching = false;
	this.chimeCount = 0;
	this.playerPressed = [];
	this.playerKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "a","d","w","s"];
		
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
			//player1
		this.player = new Player(this.canvasElement);
			//player2
		this.player2 = new Player(this.canvasElement);
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
					y:40
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			//bottom left
			if(i === 2) {
				this.initialPositionPole={
					x:40,
					y:320
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			// middle
			if(i === 3) {
				this.initialPositionPole={
					x:320,
					y:200
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
			//bottom right
			if(i === 4) {
				this.initialPositionPole={
					x:600,
					y:320
				}
				this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
			}
		}
    //get context

    //button handling for player
	// change to switch
			
    this.handleKey = function(event) {
			
			if (this.playerKeys.includes(event.key) && !this.playerPressed.includes(event.key)) {
				this.playerPressed.push(event.key);
			}
			console.log(this.playerPressed)

			this.playerPressed.forEach(function(key){
				if(key === "ArrowLeft"){
					this.player.moveLeft();
				}
				if(key === "ArrowRight"){
					this.player.moveRight();
				}
				if(key === "ArrowUp"){
					this.player.moveUp();
				}
				if(key === "ArrowDown"){
					this.player.moveDown();
				}
				if(key === "a"){
					this.player2.moveLeft();
				}
				if(key === "d"){
					this.player2.moveRight();
				}
				if(key === "w"){
					this.player2.moveUp();
				}
				if(key === "s"){
					this.player2.moveDown();
				}
			}.bind(this))
		}.bind(this);
			//player1

		var handleKeyUp = function () {
			this.playerPressed = []
		}.bind(this)

		document.addEventListener('keydown', this.handleKey);
		document.addEventListener('keyup', handleKeyUp)
		document.addEventListener('keydown', this.handleAttack);	
			
		this.handleAttack = function(event) {
			if(event.key === '/' && this.playersTouching){
				console.log("attacked success");
				attackSound.play();
				this.playersTouching = false;
				fallSound.play();
				this.finishGame();
			} else if(event.key === "/" && this.playerTouchingComputerPlayer){
					console.log("attack enemy");
					
			}	else if (event.key === '/') {
				console.log("random attack");
				this.player.runAnimation.knightAttack();
				attackSound2.play();
			}
		}.bind(this);
		
		this.backToIdle = function(event){
			//if(event.key === "ArrowLeft"){
			this.player.runAnimation.renderKnight();
			this.player2.runAnimation.renderKnight();
			//}
		}.bind(this);
		//player1
		document.addEventListener('keydown', this.handleAttack);
	
		//back to idle
		document.addEventListener('keyup', this.backToIdle);

		 // change to switch
   
		
		this.handlePlayer2Attack = function(event) {
			if(event.key === 'z' && this.playersTouching){
				console.log("attacked success");
				attackSound.play();
				this.playersTouching = false;
				this.player.runAnimation.die();
				fallSound.play();
				this.finishGame();
			}else if (event.key === 'z') {
				console.log("random attack");
				this.player2.runAnimation.knightAttack();
				attackSound2.play();
			} else if(event.key === "z" && this.collidedEnemy){
				this.animation.die();
			}
		}.bind(this);
   //player2
	 	//document.addEventListener('keydown', this.handlePlayer2Key);
		document.addEventListener('keydown', this.handlePlayer2Attack);	

    var gameLoop = function() {
        
        this.clearAll();   
        this.drawAll();
				this.updateAll();
				this.checkAllCollisions();
        
      
       
			

			if (!this.gameIsOver) {
				requestAnimationFrame(gameLoop);
				
			}
			if (this.chimeCount === 5){
				this.finishGame();
				
				
				
			}
    }.bind(this);
  
    gameLoop();
	}
	

Game.prototype.updateAll = function(){
    //player
		this.player.update();
		this.player2.update();
    //computer Players
		this.computerPlayers.forEach(function(computerPlayer){
			computerPlayer.update();
		})
		
    //poles
}
  Game.prototype.drawAll = function(){
      //player
				this.player.draw();
				this.player2.draw();
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
		//check computer player collisions
		this.computerPlayers.forEach(function(computerPlayer){
			if (this.player.collidesWithComputerPlayer(computerPlayer)) {
						console.log("collision computer");
						this.playerTouchingComputerPlayer = true;
						
			}
				else{
						this.playerTouchingComputerPlayer = false;
				}

		
			
			}.bind(this));
			//check pole collisions
			this.poles.forEach(function(pole){
				if (this.player.collidesWithPole(pole) && pole.hasChimed === false || this.player2.collidesWithPole(pole) && pole.hasChimed === false) {
							console.log("collision Pole");
							pole.hasChimed = true;
							this.chimeCount = this.chimeCount + 1;
							console.log(this.chimeCount);
							
							poleSound.play();
							
				}
					}.bind(this));
				//check player collisions
			
				if (this.player.collidesWithPlayer(this.player2)){
					this.playersTouching = true;
				} else{
					this.playersTouching = false;
				}
				








	}







  Game.prototype.onGameOverCallBack = function(callback){
       
    this.gameOverCallback = callback;

  }

  Game.prototype.finishGame = function(){
				
		console.log("game finished")
			this.gameOverCallback();
			
      
      this.gameIsOver = true;
  }

 