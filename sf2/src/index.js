const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.onload = function () {
  const canvasComp = document.querySelector('canvas');
  const context = canvasComp.getContext('2d');

  canvasComp.width = GameViewport.WIDTH;
  canvasComp.height = GameViewport.HEIGHT;

  // fps logic
  function frame() {
    context.drawImage(background, 0, 0);
    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
};
