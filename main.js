const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const grid = 15;
const paddleHeight = grid * 10; // 75
const maxPaddleY = canvas.height - grid - paddleHeight;
let right = 0;
let left = 0;

let paddleSpeed = 6;
let ballSpeed = 4;

let ball = new Ball(grid, ballSpeed);

let paddle = new Paddle();

function object() {
  ball.draw();
  paddle.draw();
  paddle.drawPaddle();

  //vẽ tường
  // context.beginPath();
  // context.fillStyle = '#00FF00';
  // for (let i = 0; i < canvas.width; i += grid*3) {
  //     context.fillRect(i + grid, 0, grid*2, grid);
  // }
  // for (let i = 0; i < canvas.width; i += grid*3) {
  //     context.fillRect(i + grid, canvas.height - grid, grid*2, grid);
  // }
  // context.closePath();
}
function start() {
  let hidden = document.getElementById("start").hidden;
  hidden = true;
  if (hidden) {
    requestAnimationFrame(loop);
  }
}
