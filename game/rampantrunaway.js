var config = {
  width: 750,
  height: 400,
  backgroundColor: 0x000000,
  // scene: [bootscreen, Level1, Level2, Level3],
  // pixelArt: true,
  // physics: {
  //     default: "arcade",
  //     arcade: {
  //         debug: false
  //     }
  // }
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
