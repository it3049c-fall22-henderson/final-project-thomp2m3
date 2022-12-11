var gameSettings = {
  playerSpeed: 200,
}
var config = {
  width: 800,
  height: 600,
  parent: 'gameContainer',
  transparent: true,
  scene: [bootscreen, aboutscreen, Level1, Level2, Level3],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
