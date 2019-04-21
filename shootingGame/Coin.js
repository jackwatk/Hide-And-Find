class Coin {
  constructor(canvas) {
    this.canvas = canvas;
    this.size = 30;
    this.x = Math.random() * this.canvas.width - this.size;
    this.y = Math.random() * this.canvas.height - this.size;
    this.ctx = canvas.getContext('2d');
    this.img = new Image();
    this.img.src = "shootingGame/animations/single.png"
    this.active = true;
  }
  draw = () => {
    let makeImage =()=>{
    this.ctx.save();
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size)
    this.ctx.restore();
    }
    this.active ? makeImage() : this.stopCoin();
  }
  stopCoin = () => {
    this.interval = setInterval(()=>{this.ctx.globalAlpha--;}, 1000)
    setTimeout(()=>{clearInterval(this.interval)}, 3000)
  }
}