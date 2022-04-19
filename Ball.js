class Ball{
    constructor(grid, speed) {
        this._canvas = document.getElementById('game')
        this.x = canvas.width / 2;
        this.y = canvas.height /2;
        this.speed = speed;
        this.width = grid;
        this.height = grid;
        this.resetting = false;
        this.dx = speed;
        this.dy = -speed;
        this._context = this._canvas.getContext('2d');
    }

    draw() {
        this._context.clearRect(0,0,this._canvas.width, this._canvas.height)
        this._context.beginPath();
        this._context.fillStyle = "#00FF00";
        this._context.fillRect(this.x, this.y, this.width, this.height);
        this._context.closePath();
    }
}