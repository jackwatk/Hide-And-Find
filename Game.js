'use strict';
function Game(canvasElement) {
	this.gameIsOver = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');    
    this.lives;
        //initalPosition to be randomised later
	this.initialPosition = {
        x:100,
        y:300
    };
    this.player = null;
	this.computerPlayers = [];
	this.collided = false;
		
}

console.log("linked Game");

Game.prototype.start = function() {
    this.gameIsOver = false;
    this.startLoop();
    

} 

Game.prototype.startLoop = function() {
    //player instance
    this.player = new Player(this.canvasElement);
		//ComputerPlayer instance
		this.computerPlayers.push(new ComputerPlayer(this.canvasElement));
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
				} else if (event.key === '/') {
					console.log("random attack");
				}
		}.bind(this);


		document.addEventListener('keydown', this.handleAttack);	
    document.addEventListener('keydown', this.handleKey);
		
   

    var gameLoop = function() {
        
     //console.log(".");
        this.clearAll();   
        this.drawAll();
				this.updateAll();
				this.checkAllCollisions();
        
        console.log()
       


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
  }

  
  Game.prototype.clearAll = function(){

    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
 
}
	Game.prototype.checkAllCollisions = function(){
		this.computerPlayers.forEach(function(computerPlayer){
			if (this.player.collidesWithComputerPlayer(computerPlayer)) {
				console.log("collision");
				this.collided = true;}
				else{
					this.collided = false;
				}
			}.bind(this));

	}







  Game.prototype.onGameOverCallBack = function(callback){
       
    this.gameOverCallback = callback;

  }

  Game.prototype.finishGame = function(){
        
      this.gameOverCallback();
      
      this.gameIsOver = true;
  }

 