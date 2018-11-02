function Game() {
	this.gameIsOver = false;
	this.canvasElement;
    this.lives
        //initalPosition to be randomised later
	this.initialPosition = {
        x:20,
        y: 40
    }
	this.player = new Player(this.canvasElement, this.lives);
	this.computerPlayers = [];
		
}
console.log("linked Game");

Game.prototype.start = function() {
    this.gameIsOver = false;
    this.startLoop();

    this.player = new Player(this.canvasElement, this.initialPosition);

} 

Game.prototype.startLoop = function() {
    //player instance
    this.player = new Player()
    //enemy instance
    //get context

    //button handling for player

    var gameLoop = function() {
  
     console.log("hi there, im a frame");
        this.player.draw();
      if (!this.gameIsOver) {
        requestAnimationFrame(gameLoop);
      }
  
    }.bind(this);
  
    gameLoop();
  }


  function drawAll(){
      //player
        this.player.draw();
      //computerPlayers

      //poles

  }
  