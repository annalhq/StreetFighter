const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

// Set the canvas size (16:9 aspect ratio)
canvas.width = 1024;
canvas.height = 576;

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
ctx.fillRect(0, 0, canvas.width, canvas.height); // fillRect(x, y, width, height) draws a rectangle whose starting point is at (x, y) and whose width and height

const gravity = 0.7

class Sprite {
   constructor({ position, velocity }) {
     this.position = position
     this.velocity = velocity
     this.height = 150
     this.lastKey
     this.attackBox = {
      position: this.position,
      width: 100,
      height: 50
    }
   }
  
  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, 50, this.height)

    // draw attack box
    ctx.fillStyle = 'green'
    ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
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

const keys = {
  a: {
    isDown: false,
  },

  d: {
    isDown: false,
  },

  w: {
    isDown: false,
  },

  ArrowRight: {
    isDown: false,
  },

  ArrowLeft: {
    isDown: false
  }
}

function animate() {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update()
  enemy.update()

  player.velocity.x = 0 // reset player velocity, otherwise it will keep moving
  enemy.velocity.x = 0

  // player movements
  if (keys.a.isDown && player.lastKey == 'a') {
    player.velocity.x = -5
  } else if (keys.d.isDown && player.lastKey == 'd') {
    player.velocity.x = 5
  }

  // enemy movements
  
  if (keys.ArrowLeft.isDown && enemy.lastKey == 'ArrowLeft') {
    enemy.velocity.x = -5
  } else if (keys.ArrowRight.isDown && enemy.lastKey == 'ArrowRight') {
    enemy.velocity.x = 5
  }
}

animate();

// event listeners

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.isDown = true
      player.lastKey = 'd'
      break;
    case 'a':
      keys.a.isDown = true
      player.lastKey = 'a'
      break;
    case 'w':
      player.velocity.y = -20
      break;
  }

  // enemy controls
  switch (event.key) {
     case 'ArrowRight':
      keys.ArrowRight.isDown = true
      enemy.lastKey = 'ArrowRight'
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.isDown = true
      enemy.lastKey = 'ArrowLeft'
      break;
    case 'ArrowUp':
      enemy.velocity.y = -20
      break;
  }

})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.isDown = false
      break;
    case 'a':
      keys.a.isDown = false
      break;  
  }

  // enemy controls
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.isDown = false
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.isDown = false
      break;
  }
})