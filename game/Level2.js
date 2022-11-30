class Level2 extends Phaser.Scene {
  constructor() {
    super('playGameL2');
  }

  preload() {
    this.load.image('background', './assets/level2BG.jpg');
  }

  create() {
    // Add background image to canvas
    var bg = this.add.image(400, 300, 'background');
  }
}
