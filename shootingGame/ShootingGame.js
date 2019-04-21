'use strict!';
class ShootingGame{
    constructor(canvas){
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      //players
      this.shooter = null;
      this.hiddenPlayer = null;
      //computer players
      this.characters = [];
      this.computerPlayerAmount = 35;
      //coins
      this.coins = [];
      this.coinAmount = 12;
      this.coinSound = new Audio();
      this.coinSound.src = 'shootingGame/coin.wav'
      //bullet handling
      this.gunShotSound = new Audio();
      this.gunShotSound.src = "shootingGame/gun-shot.wav";
      this.firstShot = false;
      this.bullets = [];
      this.bulletsAmount = 4;
      //overlay
      this.overlay = null;
      this.spotlight = null;
      this.main = document.querySelector("main")

    }
  startLoop = () => {
    
    this.gameIsOver = false;
    this.hiddenPlayer = new HiddenPlayer(this.canvas);
    this.overlay = new Overlay(this.canvas);
    this.shotFired()
    for(let i = 1; i < this.bulletsAmount + 1; i++){
      this.bullets.push(new Bullet(this.canvas,i*10))
    }
    for(let i =0; i < this.computerPlayerAmount; i++){
      this.characters.push(new Character(this.canvas))
    }
    for(let i =0; i < this.coinAmount; i++){
      this.coins.push(new Coin(this.canvas))
    }
    this.shooter = new Shooter(this.canvas);
    document.addEventListener('keydown', this.handlePlayerMovement);
    document.addEventListener('keyup', this.handlePlayerStop);
   
    this.canvas.onmousemove = () =>{this.handleShooterMovement.call(this,event)};
   
    
    this.gameLoop();
    
  }
  gameLoop = () => {
    this.clearAll();
    this.updateAll();
    this.drawAll();
    this.checkAllCollsions();
    this.checkForCoinsLeft();
      if (!this.gameIsOver) {
        requestAnimationFrame(this.gameLoop);
    }
  }
  drawAll = () =>{
    this.hiddenPlayer.draw();
    this.shooter.draw();
    this.characters.forEach((computerPlayer)=>{
      computerPlayer.draw();
     })
    this.coins.forEach((coin)=>{
      coin.draw();
    })
    this.bullets.forEach((bullet)=> bullet.draw())
    this.overlay.draw();
  }
  updateAll = () =>{
    this.shooter.update();
    this.hiddenPlayer.update();
    this.characters.forEach((character) => {
      character.update();
    })
  }
  clearAll = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  checkAllCollsions = () => {
    this.coins.forEach((coin, index)=>{
      //need to do something here so that it only collides once
      if(this.hiddenPlayer.checkCollisionWithPlayer(coin) && !coin.hasBeenTouched){
        this.coinSound.play();
        coin.hasBeenTouched = true;
        //coin.stopCoin();
        setTimeout(()=>{this.coins.splice(index,1)},3000)

      }
    })
    
  }
  checkForCoinsLeft = () => {
    if(this.coins.length === 0) {
      setTimeout(this.stopLoop,2000);
        this.buildGameOverScreen(6);
    }
  }
  
  handlePlayerMovement = (event) => {
    const {keyCode} = event;
    let { setDirectionX, setDirectionY } = this.shooter;
    let hiddenSetX = this.hiddenPlayer.setDirectionX;
    let hiddenSetY = this.hiddenPlayer.setDirectionY
    //arrow left
    keyCode === 37 ? setDirectionX(-1) : null;
    //arrow up
    keyCode === 38 ? setDirectionY(-1) : null;
    //arrow right
    keyCode === 39 ? setDirectionX(1) : null;
    //arrow down
    keyCode === 40 ? setDirectionY(1) : null;
    // a left 65
    keyCode === 65 ? hiddenSetX(-1) : null;
    // w up 87
    keyCode === 87 ? hiddenSetY(-1) : null;
    // d right 68
    keyCode === 68 ? hiddenSetX(1) : null;
    // s down 83
    keyCode === 83 ? hiddenSetY(1) : null;
    //spaceBar for shoot
    keyCode === 32 ? this.shotFired() : null;
  }
  handleShooterMovement = (event)=>{
    this.shooter.x = event.screenX;
    this.shooter.y = event.screenY + this.shooter.size/1.4;

    if(this.main.contains(this.spotlight)){
      this.main.removeChild(this.spotlight)
      this.makeDiv(main);
    } else {
      this.makeDiv(main);
    }

    } 
   

    

  makeDiv = () => {
    this.spotlight = document.createElement("div");
    this.spotlight.style.width = "100px";
    this.spotlight.style.height = "100px";
    this.spotlight.style.position = "absolute";
    this.spotlight.style.top = `${this.shooter.y + this.shooter.size/2}`;
    this.spotlight.style.right = `${this.canvas.width - this.shooter.x + this.shooter.size/2}`;
    this.spotlight.style.borderRadius = "50%";
    this.spotlight.style.boxShadow = "rgba(255, 255, 255, 0.25) 2px 1px 30px 60px, inset 30px 30px 30px 3px rgba(255, 255, 255, 0.25)";
    
    this.spotlight.onmousemove = () =>{this.handleShooterMovement.call(this,event)};
    this.main.appendChild(this.spotlight);
    
  }
  shotFired = () => {
    if(!this.bulletsAmount) return this.stopLoop();
    if(!this.firstShot){
      this.firstShot = true;
      this.gunShotSound.play();
      for(let i = 0; i < 10; i++){
      setTimeout(this.expandForShot,i*5);
      }
      setTimeout(this.revertForShot,50);
    } else{
      this.bulletsAmount--;
      this.bullets.splice(0,1);
      if(this.shooter.checkCollisionWithCrossHair(this.hiddenPlayer)){
        
        this.stopLoop();
        this.buildGameOverScreen(5);
      }
      this.gunShotSound.play();
      
    }
   
  }
  expandForShot = () => {
    this.shooter.size++
  }
  revertForShot = () => {
    this.shooter.size =- 100;
  }
  handlePlayerStop = () => {
    let { setDirectionX, setDirectionY } = this.shooter;
    let hiddenSetX = this.hiddenPlayer.setDirectionX;
    let hiddenSetY = this.hiddenPlayer.setDirectionY
    setDirectionX(0); 
    setDirectionY(0);
    hiddenSetX(0);
    hiddenSetY(0);
  }
  stopLoop = () => {
    this.gameIsOver = true
  }
  gameOverPassCallBack = (callback) => {
    this.buildGameOverScreen = callback
  }
}