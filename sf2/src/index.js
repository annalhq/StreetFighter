import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';

const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.onload = function () {
  const canvasComp = document.querySelector('canvas');
  const context = canvasComp.getContext('2d');

  canvasComp.width = GameViewport.WIDTH;
  canvasComp.height = GameViewport.HEIGHT;

  const ken = new Ken(80, 100, 150); 
  const ryu = new Ryu(80, 105, -150);
  const stage = new Stage();

  // fps

  let previousTime = 0;
  let secondsPassed = 0;

  function frame(time) {
    secondsPassed = (time - previousTime) / 1000;
    previousTime = time;

    ken.update(secondsPassed, context);
    ryu.update(secondsPassed, context);

    stage.draw(context);
    ken.draw(context);
    ryu.draw(context);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
};
