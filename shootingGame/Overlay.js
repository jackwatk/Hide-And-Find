class Overlay {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0
        this.ctx = canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
      }
      draw = () => {

          //#0101035e
          //#676775d9
            this.ctx.fillStyle = "#0101035e";
            this.ctx.fillRect(this.x,this.y,this.width,this.height);
      }
     
}