class Level3 extends Phaser.Scene {
  constructor() {
    super('playGameL3');
  }

  preload() {
    this.load.audio('gameplay', './assets/music/gameplay/gameplay.wav');
    this.load.audio('gameover', './assets/music/gameover/gameover.wav');
  }

  create() {
    // Change background and border color
    var bg = document.getElementById('gameContainer');
    bg.style.backgroundColor = '#000';
    bg.style.border = '4px solid #EF971E';

    // play music
    let gameplayMusic = this.sound.add('gameplay', { loop: true });
    gameplayMusic.play();
  }
}
