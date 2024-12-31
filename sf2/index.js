const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4,
}

window.onload = function () {
    const canvasComp = document.querySelector('canvas');
    const context = canvasComp.getContext('2d');

    canvasComp.width = GameViewport.WIDTH * GameViewport.SCALE;
    canvasComp.height = GameViewport.HEIGHT * GameViewport.SCALE;

    canvasComp.style.width = `${GameViewport.WIDTH*GameViewport.SCALE}px`;
    canvasComp.style.height = `${GameViewport.HEIGHT*GameViewport.SCALE}px`;
}