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
  }

  
  create() {
    // Add background image to canvas
    this.background = this.add.tileSprite(0, 0, 1920, 662, 'background');
    this.background.setOrigin (0, 0);
    
    //Add player and controls
    this.player = this.physics.add.sprite(200,200, "player").setDisplaySize(80, 100);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    //coin animation
    this.anims.create({
      key: "coin_anim",
      frames: this.anims.generateFrameNumbers("coin",{
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });
    //random coins on the map
    let coinsToSpawn = Phaser.Math.Between(5, 15);
    for(let i = 0; i < coinsToSpawn; i++){
      let yCord = Phaser.Math.Between(0, 600);
      let xCord = Phaser.Math.Between(0, 800);
      this.coin = this.add.sprite(xCord, yCord, "coin");
      this.coin.play("coin_anim", true);
    }
    this.coin.touchable = true;
    this.coin.setInteractive();
    //score count
    this.score = 0;
    this.scoreLabel = this.add.bitmapText(15, 10, "pixelFont", "SCORE ", 30); 
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
