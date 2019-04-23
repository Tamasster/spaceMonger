let spaceMonger = {};

spaceMonger.game = new PIXI.Application({ width: 256, height: 256 });


spaceMonger.init = () => {
    spaceMonger.gameBox = document.getElementById("box");
    spaceMonger.gameBox.appendChild(spaceMonger.game.view);
}
