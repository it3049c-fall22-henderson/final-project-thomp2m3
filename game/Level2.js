class Level2 extends Phaser.Scene {
  constructor() {
    super('playGameL2');
  }

  preload() {
    this.load.image('background', './assets/level2BG.jpg');
    this.load.audio('gameplay', './assets/music/gameplay/gameplay.wav');
    this.load.audio('gameover', './assets/music/gameover/gameover.wav');
  }

  create() {
    // Add background image to canvas
    var bg = this.add.image(400, 300, 'background');

    // play music
    let gameplayMusic = this.sound.add('gameplay', { loop: true });
    gameplayMusic.play();

  }
}
