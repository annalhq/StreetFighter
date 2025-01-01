import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/fpsCounter.js';

const GameViewport = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.addEventListener('load', function () {
  const canvasComp = document.querySelector('canvas');
  const context = canvasComp.getContext('2d');

  canvasComp.width = GameViewport.WIDTH;
  canvasComp.height = GameViewport.HEIGHT;

  const entities = [
    new Stage(),
    new Ken(80, 100, 150),
    new Ryu(80, 105, -150),
    new FpsCounter(),
  ];

  // fps

  let previousTime = 0;
  let secondsPassed = 0;

  function frame(time) {
    window.requestAnimationFrame(frame);

    secondsPassed = (time - previousTime) / 1000;
    previousTime = time;

    for (const entity of entities) {
      entity.update(secondsPassed, context);
    }

    for (const entity of entities) {
      entity.draw(context);
    }

  }

  window.requestAnimationFrame(frame);
});
