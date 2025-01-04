import { Ken } from './entities/fighters/Ken.js';
import { Ryu } from './entities/fighters/Ryu.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from './entities/fpsCounter.js';
import { STAGE_FLOOR } from './constants/stage.js';
import { FighterDirection, FighterState } from './constants/fighter.js';

function populateMoveDropdown(){
  const dropdown = document.getElementById('stage-dropdown');

  Object.entries(FighterState).forEach(([, value])=> {
    const option = document.createElement('option');
    option.setAttribute('value', value);
    option.innerText = value;
    dropdown.appendChild(option);
  });
}


function handleFormSubmit(event, fighters) {
  event.preventDefault();

  const selectedCheckbox = Array.from(
    event.target.querySelectorAll('input[type="checkbox"]:checked')
  ).map(checkbox => checkbox.value);

  const select = event.target.querySelector('select');
  const selectedValue = select.value;

  fighters.forEach(fighter => {
    if (selectedCheckbox.includes(fighter.name)) {
      fighter.changeState(selectedValue);
    }
  });



}

window.addEventListener('load', function () {

  populateMoveDropdown();

  const canvasComp = document.querySelector('canvas');
  const context = canvasComp.getContext('2d');
  context.imageSmoothingEnabled = false;

  const fighters = [
    new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
    new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
    
  ];
  
  const entities = [
    new Stage(),
    ...fighters,
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

  this.document.addEventListener('submit', event => handleFormSubmit(event, fighters));
  
  window.requestAnimationFrame(frame);
});
