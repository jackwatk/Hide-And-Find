Game() {
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

Game.prototype.start = function() {
   
    this.startLoop();

}
Game.prototype.startLoop = function(){
    
}