class Reveal {
  constructor(canvasElement, winnerX, winnerY) {
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.x = winnerX;
    this.y = winnerY;
    this.size = 80;
    this.img = new Image();
    this.img.src = 'reveal.png'
  }

  draw = () => {
  this.canvasElement.style.backgroundColor = '#c9c9c9'
  this.ctx.drawImage(this.img, this.x , this.y, this.size, this.size);
   
  }
  update = (playerX, playerY) => {
    this.x = playerX;
    this.y = playerY;
  }
  
}