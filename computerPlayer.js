'use strict';

function ComputerPlayer(canvasElement){
    this.x = 300
	this.y = 300
    this.canvasElement = canvasElement;
    this.size = 10;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed = 5;
	this.direction = 0;
}

ComputerPlayer.prototype.update = function(){
    //this.x++
   
    
}

ComputerPlayer.prototype.setDirection = function(direction){
        this.direction = direction;   
}


ComputerPlayer.prototype.setDirection = function(direction){

}

ComputerPlayer.prototype.draw = function(){
    this.ctx.fillRect(this.x,this.y, this.size, this.size);
}

var randomWaitTime = function () {
    
    return 3 + Math.random()*4;
}

var randomWalkTime = function () {

        return 5 + Math.random()*10;
}
var randomDirection = function () {
    // needs to be 1 or - 1 randomly
    var random = Math.floor(Math.random()*1);

    if(random === 0){
        return -1
    }
    else{
        return 1
    }
}

/* ComputerPlayer.prototype.moveRandomly = function () {
    
        //if(this.x < 0){
     setInterval(function(){
        
        this.x -= 5
        console.log("waiting");
    },randomWaitTime)
}
}
 */

  

/* random logic
1 pick a direction randomly
2 walk in this direction for 5-25 seconds
3 wait for random amount of time from 3 to 7 seconds
4 back to step 1

fail Safes

1 if you are approaching the edge, recognise this
2 have a 1 in 10 chance of changing direction
    if true do step 2 of previous
    if false continue from step 3 from previous */
