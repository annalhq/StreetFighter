const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.onload = function () {
    const canvasComp = document.querySelector('canvas');
    const context = canvasComp.getContext('2d');

    const ken = document.querySelector('img')

    canvasComp.width = GameViewport.WIDTH;
    canvasComp.height = GameViewport.HEIGHT;

    context.strokeStyle = 'yellow';
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH, 0);
    context.lineTo(0, GameViewport.HEIGHT);
    context.stroke();

    context.drawImage(ken, 0, 0 );

    // fps logic
    function frame() {
        context.strokeStyle = 'yellow';
        context.moveTo(0, 0);
        context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        context.moveTo(GameViewport.WIDTH, 0);
        context.lineTo(0, GameViewport.HEIGHT);
        context.stroke();
        context.drawImage(ken, 0, 0 );
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}