const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

// Set the canvas size (16:9 aspect ratio)
canvas.width = 1024;
canvas.height = 576;

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
ctx.fillRect(0, 0, canvas.width, canvas.height); // fillRect(x, y, width, height) draws a rectangle whose starting point is at (x, y) and whose width and height

const gravity = 0.2

class Sprite {
   constructor({ position, velocity }) {
     this.position = position;
     this.velocity = velocity;
     this.height = 150;
   }
  
  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y += gravity 
  }
}

const player = new Sprite({
  position:{
    x:0,
    y:0
  },
  velocity:{
    x:0,
    y:0
  }
})

const enemy = new Sprite({
  position:{
    x:400,
    y:100
  },
  velocity:{
    x:0,
    y:0
  }
})

function animate() {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update()
  enemy.update()
}

animate();