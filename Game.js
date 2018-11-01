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
    this.startLoop();

} 
Game.prototype.startLoop = function(){
    
    console.log("im looping");
    

     }

Game.prototype.gameIsOver= function(){
    this.gameIsOver = true;
    console.log("game over");
}

