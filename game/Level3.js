class Level3 extends Phaser.Scene {
  constructor() {
    super('playGameL3');
  }

  create() {
    // Change background and border color
    var bg = document.getElementById('gameContainer');
    bg.style.backgroundColor = '#000';
    bg.style.border = '4px solid #EF971E';
  }
}
