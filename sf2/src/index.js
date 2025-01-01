import { Ken } from './ken.js';
import { Ryu } from './ryu.js';
import { Stage } from './stage.js';

const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.onload = function () {
  const canvasComp = document.querySelector('canvas');
  const context = canvasComp.getContext('2d');

  canvasComp.width = GameViewport.WIDTH;
  canvasComp.height = GameViewport.HEIGHT;

  const ken = new Ken(80, 100, 2); 
  const ryu = new Ryu(80, 105, -2);
  const stage = new Stage();

  // fps logic
  function frame() {
    ken.update(context);
    ryu.update(context);

    stage.draw(context);
    ken.draw(context);
    ryu.draw(context);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
};
