class Shooter {
    constructor(canvasElement) {
        this.size = 40;
        this.x = playerPositionX
        this.y = playerPositionY;
        this.canvasElement = canvasElement;
        this.ctx = canvasElement.getContext('2d');
        this.belongsTo = player;
        this.active = true;
      }
      draw = () => {

            this.ctx.beginPath();
            this.ctx.strokeStyle = "#FF0000";
            this.ctx.arc(playerX+this.size/2, playerY+this.size/2, this.size, 0, 2 * Math.PI,);
            this.ctx.stroke();
      }
}