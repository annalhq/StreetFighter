import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/fpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';

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
    new Ken(80, STAGE_FLOOR, 150),
    new Ryu(80, STAGE_FLOOR, -150),
    new FpsCounter(),
  ];

  // fps

  let frameTime = {
    previous: 0,
    secondsPassed: 0,
  };

  function frame(time) {
    window.requestAnimationFrame(frame);

    frameTime = {
      secondsPassed: (time - frameTime.previous) / 1000,
      previous: time,
    };

    for (const entity of entities) {
      entity.update(frameTime, context);
    }

    for (const entity of entities) {
      entity.draw(context);
    }
  }

  window.requestAnimationFrame(frame);
});
