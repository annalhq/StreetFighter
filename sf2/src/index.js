import { drawBackground } from './stage.js';
import { updateKen, drawKen } from './ken.js';

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
    updateKen(context);

    drawBackground(context);
    drawKen(context);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
};
