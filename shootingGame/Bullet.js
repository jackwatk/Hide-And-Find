class Bullet {
    constructor(canvas, iterator) {
        this.canvas = canvas;
        this.size = 30;
        this.x = 3 * iterator;
        this.y = this.canvas.height - 50
        this.ctx = canvas.getContext('2d');
        this.img = new Image();
        this.img.src = "shootingGame/animations/bullet.png"
      }
      draw = () => {
            this.ctx.drawImage(this.img, this.x,this.y,this.size,this.size);
      }
     
}