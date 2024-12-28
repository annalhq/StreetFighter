const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

// Set the canvas size (16:9 aspect ratio)
canvas.width = 1024;
canvas.height = 576;

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
ctx.fillRect(0, 0, canvas.width, canvas.height); // fillRect(x, y, width, height) draws a rectangle whose starting point is at (x, y) and whose width and height

class Sprite {
   constructor(position){
     this.position = position;
   }  
}

const player = new Sprite({})