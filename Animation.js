'use strict';
function Animation(playerX,playerY){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.spriteSheet = new Image();
    this.spriteSheet.src = "knight-idle.png";
    this.frameIndex = 0;
    this.frameSpeed = 45;
    this.speedCounter = 0;
    this.amountOfFrames = 3;
    this.playerX = playerX;
    this.playerY = playerY;
    this.imageWidth = 42;
    this.timeOutId;
    this.knightAttacking = false;
}

//create counter for the frame index for slow down
Animation.prototype.frameIndexCounter = function(){
    this.speedCounter++;
        if(this.speedCounter === this.frameSpeed){
            if(this.frameIndex < this.amountOfFrames-1){
                this.speedCounter = 0;
                this.frameIndex ++;
            }else{
                this.speedCounter = 0;
                this.frameIndex = 0;
            }
        }
}

Animation.prototype.renderKnight = function(game){
    
    //this.spriteSheet = new Image();
    this.spriteSheet.src = "knight-idle.png";
    
}
//walk - right
Animation.prototype.knightWalk = function(game){
    this.imageWidth = 42;
    //this.spriteSheet = new Image();
    
    this.spriteSheet.src = 'knight-walk.png';
}
//walk - left

Animation.prototype.knightWalkLeft = function(game){
    this.imageWidth = 42;
    //this.spriteSheet = new Image();
    this.spriteSheet.src = 'knight-walk-left.png';
}

//die
Animation.prototype.die = function(game){
    this.imageWidth = 42;
    //this.spriteSheet = new Image();
    this.spriteSheet.src = 'knight-death.png';
    this.amountOfFrames = 10;
}

Animation.prototype.knightAttack = function(game){
    this.knightAttacking = true;
    this.timeOutId = setTimeout(this.knightAttack2.bind(this),200);
    
    
};

Animation.prototype.knightAttackLeft = function(game){
    this.timeOutId = setTimeout(this.knightAttackLeft2.bind(this),200);
    
};


Animation.prototype.knightAttack2 = function(game){
    if(this.knightAttacking = true){
    this.imageWidth = 42;
    //this.spriteSheet = new Image();
    this.spriteSheet.src = 'knight-attacking.png';
    this.amountOfFrames = 8;
    }
    else{
        this.renderKnight();
    }
    this.knightAttacking = false;
    
    clearTimeout(this.timeOutId)
    this.renderKnight();
    
};

Animation.prototype.knightAttackLeft2 = function(game){
    this.imageWidth = 42;
    //this.spriteSheet = new Image();
    this.spriteSheet.src = 'knight-attacking-left.png';
    this.amountOfFrames = 8;
    clearTimeout(this.timeOutId);
    this.renderKnight();
    
};

Animation.prototype.update = function(x,y){
    this.playerX = x;
    this.playerY = y;
}

Animation.prototype.draw =  function () {
    this.ctx.drawImage(
        this.spriteSheet,
        this.frameIndex*42,
        0,
        this.imageWidth , //23
        this.imageWidth , //162
        this.playerX,
        this.playerY,
        this.imageWidth , //23
        this.imageWidth ) //162    
    
    this.frameIndexCounter();
}
   