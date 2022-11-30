class Level1 extends Phaser.Scene {
  constructor() {
    super('playGameL1');
  }
  preload() {
    this.load.image('background', './assets/level1BG.jpg');
  }
  create() {
    // Change background and border color
    this.add.image(400, 300, 'background');
  }
}
