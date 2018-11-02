function Game(canvasElement) {
	this.gameIsOver = false;
	this.canvasElement = canvasElement
    this.lives
        //initalPosition to be randomised later
	this.initialPosition = {
        x:100,
        y:100
    }
    this.player = null;
	this.computerPlayers = [];
		
}

console.log("linked Game");

Game.prototype.start = function() {
    this.gameIsOver = false;
    this.startLoop();
    this.ctx = this.canvasElement.getContext('2d');
    this.player = new Player(this.canvasElement, this.initialPosition);

} 

Game.prototype.startLoop = function() {
    //player instance
    this.player = new Player(this.canvasElement);
    //enemy instance
    //get context

    //button handling for player
  
    this.handleKey = function(event) {
        if (event.key === 'ArrowUp' || event.key === "w") {
        console.log("up");
        this.player.setDirection(-1);
        } else if (event.key === 'ArrowDown' || event.key === "s") {
        console.log("down");
        this.player.setDirection(1);
        }
    }.bind(this)
    
    document.addEventListener('keyup', this.handleKey);
 
   

    var gameLoop = function() {
        
     //console.log(".");
        this.drawAll();
        this.updateAll();
        
       


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

    //poles
}
  Game.prototype.drawAll = function(){
      //player
        this.player.draw();
      //computerPlayers

      //poles
  }

  
  Game.prototype.clearAll = function(){
    //player

    //computer Players

    //poles
  }
  
  Game.prototype.onGameOverCallBack = function(callback){
       
    this.gameOverCallback = callback;

  }

  Game.prototype.finishGame = function(){
        
      this.gameOverCallback();
      
      this.gameIsOver = true;
  }

 