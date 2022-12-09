class Level1 extends Phaser.Scene {
  constructor() {
    super('playGameL1');
  }

  preload() {
    this.load.image('background', './assets/level1BG.jpg');
    this.load.image('player', './assets/Jetpack_Man/spriter_file_png_body_parts/guide.png');
    this.load.bitmapFont("pixelFont", "./assets/font/font.png", "./assets/font/font.xml");
    this.load.spritesheet('coin', './assets/coin.png', {
      frameWidth: 16,
      frameHeight: 16
  });
    this.load.audio('gameplay', './assets/music/gameplay/gameplay.wav');
    this.load.audio('gameover', './assets/music/gameover/gameover.wav');
  }

  
  create() {
    // Add background image to canvas
    this.background = this.add.tileSprite(0, 0, 1920, 662, 'background');
    this.background.setOrigin (0, 0);
    
    //Add player and controls
    this.player = this.physics.add.sprite(200,200, "player").setDisplaySize(80, 100);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);    
    //this.createPlayer();
  }
  update() {
    this.background.tilePositionX += 1;
    if(this.cursors.right.isDown){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }
    if(this.cursors.left.isDown){
      this.player.setVelocityX(-gameSettings.playerSpeed)
    }
    if(this.cursors.down.isDown){
      this.player.setVelocityY(gameSettings.playerSpeed)
    }
    if(this.cursors.up.isDown){
      this.player.setVelocityY(-gameSettings.playerSpeed)
    }
  }
}
