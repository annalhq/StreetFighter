const [ken, background] = document.querySelectorAll('img');

const position = {
  x: GameViewport.WIDTH / 2 - ken.width / 2,
  y: 110,
};

let velocity = 3;

position.x += velocity;

if (position.x > GameViewport.WIDTH - ken.width || position.x < 0) {
  velocity = -velocity;
}

context.drawImage(ken, position.x, position.y);
