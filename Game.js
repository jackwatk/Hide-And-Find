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
            this.player.y--
        this.player.setDirection(-1);
        } else if (event.key === 'ArrowDown' || event.key === "s") {
        console.log("down");
            this.player.y++
        this.player.setDirection(1);
        }
        else if (event.key === 'ArrowLeft' || event.key === "a") {
            console.log("left");
                this.player.x--
            this.player.setDirection(1);
            }
        else if (event.key === 'ArrowRight' || event.key === "d"){
            console.log("right");
                this.player.x++
            this.player.setDirection(-1);
        }
    }.bind(this)
    
    document.addEventListener('keydown', this.handleKey);
 
   

    var gameLoop = function() {
        
     //console.log(".");
        this.drawAll();
        this.updateAll();
        this.clearAll();
        
       


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
   // this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }
  
  Game.prototype.onGameOverCallBack = function(callback){
       
    this.gameOverCallback = callback;

  }

  Game.prototype.finishGame = function(){
        
      this.gameOverCallback();
      
      this.gameIsOver = true;
  }

 