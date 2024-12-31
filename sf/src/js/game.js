export function initializeGame(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 576;
  
    const gravity = 0.7;
  
    class Sprite {
      constructor({ position, velocity, color = 'red', offset }) {
        this.position = position;
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.lastKey;
        this.attackBox = {
          position: { x: this.position.x, y: this.position.y },
          offset,
          width: 100,
          height: 50,
        };
        this.color = color;
        this.isAttacking = false;
      }
  
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  
        ctx.fillStyle = 'green';
        ctx.fillRect(
          this.attackBox.position.x,
          this.attackBox.position.y,
          this.attackBox.width,
          this.attackBox.height
        );
      }
  
      update() {
        this.draw();
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;
  
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
  
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
          this.velocity.y = 0;
        } else this.velocity.y += gravity;
      }
  
      attack() {
        this.isAttacking = true;
        setTimeout(() => (this.isAttacking = false), 100);
      }
    }
  
    const player = new Sprite({ position: { x: 0, y: 0 }, velocity: { x: 0, y: 0 }, offset: { x: 0, y: 0 } });
    const enemy = new Sprite({
      position: { x: 400, y: 100 },
      velocity: { x: 0, y: 0 },
      offset: { x: -50, y: 0 },
      color: 'blue',
    });
  
    const keys = { a: { isDown: false }, d: { isDown: false }, w: { isDown: false }, ArrowRight: { isDown: false }, ArrowLeft: { isDown: false } };
  
    function animate() {
      window.requestAnimationFrame(animate);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      player.update();
      enemy.update();
  
      player.velocity.x = 0;
      enemy.velocity.x = 0;
  
      if (keys.a.isDown && player.lastKey === 'a') player.velocity.x = -5;
      else if (keys.d.isDown && player.lastKey === 'd') player.velocity.x = 5;
  
      if (keys.ArrowLeft.isDown && enemy.lastKey === 'ArrowLeft') enemy.velocity.x = -5;
      else if (keys.ArrowRight.isDown && enemy.lastKey === 'ArrowRight') enemy.velocity.x = 5;
    }
  
    animate();
  
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'd': keys.d.isDown = true; player.lastKey = 'd'; break;
        case 'a': keys.a.isDown = true; player.lastKey = 'a'; break;
        case 'w': player.velocity.y = -20; break;
        case ' ': player.attack(); break;
        case 'ArrowRight': keys.ArrowRight.isDown = true; enemy.lastKey = 'ArrowRight'; break;
        case 'ArrowLeft': keys.ArrowLeft.isDown = true; enemy.lastKey = 'ArrowLeft'; break;
        case 'ArrowUp': enemy.velocity.y = -20; break;
      }
    });
  
    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'd': keys.d.isDown = false; break;
        case 'a': keys.a.isDown = false; break;
        case 'ArrowRight': keys.ArrowRight.isDown = false; break;
        case 'ArrowLeft': keys.ArrowLeft.isDown = false; break;
      }
    });
  }
  