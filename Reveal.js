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
    
// Draw red rectangle after clip()
  this.canvasElement.style.backgroundColor = '#c9c9c9'
  this.ctx.drawImage(this.img, this.x - 40 , this.y - 40, this.canvasElement.width, this.canvasElement.height);
   
  }
  update = (playerX, playerY) => {
    this.x = playerX;
    this.y = playerY;
  }
}