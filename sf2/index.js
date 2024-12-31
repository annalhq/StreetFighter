const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.onload = function () {
    const canvasComp = document.querySelector('canvas');
    const context = canvasComp.getContext('2d');

    canvasComp.width = GameViewport.WIDTH;
    canvasComp.height = GameViewport.HEIGHT;

    // cross lines for testing
    context.strokeStyle = 'yellow';
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH, 0);
    context.lineTo(0, GameViewport.HEIGHT);
    context.stroke();

    // characters image
    const ken = document.querySelector('img')

    const position = {
        x: 0,
        y: 0,
    }

    let velocity = 3;

    // fps logic
    function frame() {
        position.x += velocity;

        if (position.x > GameViewport.WIDTH - ken.width || position.x < 0) {
            velocity = -velocity;
        }

        context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT)

        context.strokeStyle = 'yellow';
        context.moveTo(0, 0);
        context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        context.moveTo(GameViewport.WIDTH, 0);
        context.lineTo(0, GameViewport.HEIGHT);
        context.stroke();

        context.drawImage(ken, position.x, position.y);
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}