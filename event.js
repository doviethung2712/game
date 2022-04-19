document.addEventListener('keydown', function (e) {

  // nghe các sự kiện bàn phím để di chuyển các mái chèo
  if (e.keyCode === 38) {
      paddle.paddleRight.dy = -paddleSpeed;
  }
  // phím mũi tên xuống
  else if (e.keyCode === 40) {
      paddle.paddleRight.dy = paddleSpeed;
  }

  // w key
  if (e.keyCode === 87) {
      paddle.paddleLeft.dy = -paddleSpeed;
  }
  // a key
  else if (e.keyCode === 83) {
      paddle.paddleLeft.dy = paddleSpeed;
  }
});

//lắng nghe các sự kiện bàn phím để dừng paddlkeyCode phím được nhả ra
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
      paddle.paddleRight.dy = 0;
  }

  if (e.keyCode === 83 || e.keyCode === 87) {
      paddle.paddleLeft.dy = 0;
  }
});