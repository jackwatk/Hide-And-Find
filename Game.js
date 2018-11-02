function Game() {
	this.gameIsOver = false;
	this.canvasElement;
    this.lives
    //initalPosition to be randomised later
	this.initialPosition = {
        x:20,
        y: 40
    }
	this.player = null;
	this.computerPlayers = [];
		
}
console.log("linked Game");

Game.prototype.start = function() {
    this.gameIsOver = false;
    this.startLoop();

} 



Game.prototype.startLoop = function() {
    //player instance
    //enemy instance
    //get context

    //button handling for player

    var gameLoop = function() {
  
     console.log("hi there, im a frame");
  
      if (!this.gameIsOver) {
        requestAnimationFrame(gameLoop);
      }
  
    }.bind(this);
  
    gameLoop();
  }

  Game.prototype.gameIsOver = function(){
    this.gameIsOver = true;
    console.log("game over");
}