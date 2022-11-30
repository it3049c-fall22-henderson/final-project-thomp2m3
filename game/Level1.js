class Level1 extends Phaser.Scene {
  constructor() {
    super('playGameL1');
  }

  preload() {
    this.load.image('background', './assets/level1BG.jpg');
  }

  create() {
    // Add background image to canvas
    var bg = this.add.image(400, 300, 'background');
  }
}
