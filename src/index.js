import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/fpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';
import { FighterDirection } from './constants/fighter.js';

window.addEventListener('load', function () {
  const canvasComp = document.querySelector('canvas');
  const context = canvasComp.getContext('2d');
  context.imageSmoothingEnabled = false;

  const entities = [
    new Stage(),
    new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
    new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
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
