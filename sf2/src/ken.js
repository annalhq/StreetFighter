const ken = document.querySelector("img[alt='ken']");

const position = {
  x: 80,
  y: 110,
};

let velocity = 3;

export function updateKen(context) {
position.x += velocity;

if (position.x > context.canvas.width - ken.width || position.x < 0) {
  velocity = -velocity;
}
}

export function drawKen(context) {
context.drawImage(ken, position.x, position.y);
}