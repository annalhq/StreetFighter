const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

// Set the canvas size (16:9 aspect ratio)
canvas.width = 1024;
canvas.height = 576;

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
ctx.fillRect(0, 0, canvas.width, canvas.height); // fillRect(x, y, width, height) draws a rectangle whose starting point is at (x, y) and whose width and height

class Sprite {
   constructor(position, velocity){
     this.position = position;
     this.velocity = velcoity;
   }
  
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, 50, 150)
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

player.draw()

const enemy = new Sprite({
  x:400,
  y:100
})

enemy.draw()

function animate(){
  window.requestAnimationFrame

}

animate()