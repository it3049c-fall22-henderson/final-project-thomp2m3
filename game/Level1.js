class Level1 extends Phaser.Scene {
  constructor() {
    super('playGameL1');
  }

  preload() {
    this.load.image('background', './assets/level1BG.jpg');
    this.load.image(
      'player',
      './assets/Jetpack_Man/spriter_file_png_body_parts/guide.png'
    );
    this.load.bitmapFont(
      'pixelFont',
      './assets/font/font.png',
      './assets/font/font.xml'
    );
    this.load.spritesheet('coin', './assets/coin.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image("projectile", './assets/Obstacles/PNG/Projectile/2.png');
    // this.load.audio('gameplay', './assets/music/gameplay/gameplay.wav');
    // this.load.audio('gameover', './assets/music/gameover/gameover.wav');
  }

  create() {
    // Add background image to canvas
    this.background = this.add.tileSprite(
      0,
      0,
      Number.MAX_SAFE_INTEGER,
      600,
      'background'
    );
    this.background.setOrigin(0, 0);
    //Add player and controls
    this.player = this.physics.add
      .sprite(200, 200, 'player')
      .setDisplaySize(80, 100);
    //Projectiles ***(WORK IN PROGRESS)***
    this.projectiles = this.physics.add.group();
      let spawnProjectile = Phaser.Math.Between(0, 3);
      for (let i = 0; i < spawnProjectile; i++) {
        // Get Random y and x position
        let yCord = Phaser.Math.Between(10, 600);
        let xCord = Phaser.Math.Between(100, 1000);
        this.projectile = this.add.sprite(xCord, yCord, 'projectile');
        //able to collect coins
        this.projectiles.add(this.projectile);
        this.projectiles.tilePositionX -= 10;
        this.projectile.setInteractive();
      }
    this.physics  .add.collider(this.projectiles, this.player, function(projectile, player){
      player.destroy();
  });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    //score count ****(UNSURE IF SCORE COUNT IS DECLARED IN CREATE OR UPDATE BC IT WONT UPDATE)*****
    //*******SEE LINE 103-110********

    // this.score = 0;
    // this.scoreLabel = this.add.text(15, 15, 'SCORE:' + this.score,{
    //   fontSize: '25pt',
    //   fill: '#000',
    // });
    // this.scoreLabel.setScrollFactor(0, 0);
    //coin animation
    this.anims.create({
      key: 'coin_anim',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // this.anims.create({
    //   key: "coin_glitter",
    //   frames: this.anims.generateFrameNumbers("coin", {
    //     start: 4,
    //     end: 7
    //   }),
    //   frameRate: 20,
    //   repeat: 0
    // });
    ////Generate random coins on map
    this.points = this.physics.add.group();
    setInterval( _ => {
      this.loadCoins();
  }, 2000);
    this.physics.add.collider(this.points, this.player, function(points, player){
      // this.score += 10;
      // var scoreFormatted = this.zeroPad(this.score, 6);
      // this.scoreLabel.text = "SCORE " + scoreFormatted;
      player.destroy();
  });
    //this.physics.add.collider(coin, player);
    this.cameras.main.setBounds(0, 0, this.width, 600, true, false, true, true);
    this.physics.world.setBounds(0, 0, this.width, 600, true, false, true, true);
    this.cameras.main.startFollow(this.player, true, 0.5, 0.5);
  }
  update() {
    //score count
    // this.score = 0;
    // this.scoreLabel = this.add.text(15, 15, 'SCORE:' + this.score,{
    //   fontSize: '25pt',
    //   fill: '#000',
    // });
    // this.scoreLabel.setScrollFactor(0, 0);

    this.background.tilePositionX += 1;
    if(this.cursors.right.isDown){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-30);
    }
    if (this.cursors.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    }
  }
  loadCoins(){
  let coinsToSpawn = Phaser.Math.Between(20, 50);
    for (let i = 0; i < coinsToSpawn; i++) {
      // Get Random y and x position
      let yCord = Phaser.Math.Between(10, 600); //-this.cameras.main.y, this.camera.main.y
      let xCord = Phaser.Math.Between(200, 20000); //-this.camera.main.x, this.camera.main.y
      this.coin = this.add.sprite(xCord, yCord, 'coin');
      //able to collect coins
      this.points.add(this.coin);
      this.coin.setInteractive();
      this.coin.play('coin_anim', true);
    }
  }
}
