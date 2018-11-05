'use strict';

function ComputerPlayer(canvasElement){
    this.x = 300
	this.y = 300
    this.canvasElement = canvasElement;
    this.size = 20;
	this.ctx = this.canvasElement.getContext('2d');
	this.speed = 5;
	this.direction = 0;
}

function randomCounter(){
    var random = Math.random()* 300000
    return random;
}
    var counter = 0;
ComputerPlayer.prototype.update = function(){
    counter = randomCounter();
    if(counter < 10000) {
        this.y--;
        
        
    } else if(counter < 40000){
        this.x++;

    } else if(counter < 80000){
        this.y--;
        this.x--;
        
    } else if(counter < 100000){
        this.y++
        

    } else if(counter < 140000){
        this.x--;

    } else if(counter < 180000){
        this.y++
        this.x++;

    } else if(counter < 220000){
        this.y--
        this.x--;

    }  else if(counter < 260000){
        this.y++
        this.x++;

    } else{
        //put in here to put overall direction eg an x random that eventually ends with a certain direction
    }
    
    
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


function moveRandomlyX1 () {
    counter = randomCounter(); 
    if(counter < 1000) {
        this.x--;
    } else if(counter < 4000){
        this.x++;

    } else if(counter < 8000){
        this.x--
        
    } else if(counter < 10000){
        this.x++

    } else if(counter < 14000){
        this.x--

    } else if(counter < 18000){
        this.x++

    } else if(counter < 22000){
        this.x--

    }  else if(counter < 26000){
        this.x++

    } else if(counter < 30000){
        this.x--

    } else{
        console.log("nothing")
    }
    
}


function moveRandomlyX2 (){
    counter = randomCounter(); 
    if(counter < 1000) {
        this.x++;
    } else if(counter < 4000){
        this.x--;

    } else if(counter < 8000){
        this.x++
        
    } else if(counter < 10000){
        this.x--

    } else if(counter < 14000){
        this.x++

    } else if(counter < 18000){
        this.x--

    } else if(counter < 22000){
        this.x++

    }  else if(counter < 26000){
        this.x--

    } else if(counter < 30000){
        this.x++
    }
    }

    
    



  

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
