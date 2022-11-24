var config = {
  width: 800,
  height: 600,
  backgroundColor: 15701790,
  scene: [bootscreen, Level1, Level2, Level3],
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
