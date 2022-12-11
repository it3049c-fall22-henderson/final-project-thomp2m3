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

    this.load.spritesheet('gear', './assets/Obstacles/PNG/Sprite_Gear/gear_ani.png', {
      frameWidth: 200,
      frameHeight: 200,
    });

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
  //   this.projectiles = this.physics.add.group();
  //     let spawnProjectile = Phaser.Math.Between(0, 3);
  //     for (let i = 0; i < spawnProjectile; i++) {
  //       // Get Random y and x position
  //       let yCord = Phaser.Math.Between(10, 600);
  //       let xCord = Phaser.Math.Between(100, 1000);
  //       this.projectile = this.add.sprite(xCord, yCord, 'projectile');
  //       //able to collect coins
  //       this.projectiles.add(this.projectile);
  //       this.projectiles.tilePositionX -= 10;
  //       this.projectile.setInteractive();
  //     }
  //   this.physics  .add.collider(this.projectiles, this.player, function(projectile, player){
  //     player.destroy();
  // });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);    
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
    ////Generate random coins on map
    this.points = this.physics.add.group();
    setInterval( _ => {
      this.loadCoins();
  }, 2000);
    //this.physics.add.overlap(this.points, this.player, this.addScore, null, this);
      // this.score += 10;
      // var scoreFormatted = this.zeroPad(this.score, 6);
      // this.scoreLabel.text = "SCORE " + scoreFormatted;
      // player.destroy();
  
    //this.physics.add.collider(coin, player);
    this.cameras.main.setBounds(0, 0, this.width, 600, true, false, true, true);
    this.physics.world.setBounds(0, 0, this.width, 600, true, false, true, true);
    this.cameras.main.startFollow(this.player, true, 0.5, 0.5);

    // create gears
    let gearX = 1000;
    let gearY = Phaser.Math.Between(10, 600);
    this.gear = this.add.sprite(gearX, gearY, "gear");
    this.anims.create({
      key: "gear_animation",
      frames: this.anims.generateFrameNumbers("gear"),
      frameRate: 24,
      repeat: -1
    });
    this.gear.play("gear_animation");
    //gear collision
    this.gearPhysics = this.physics.add.group();
    this.gearPhysics.add(this.gear);

    this.physics.add.overlap(this.player, this.gearPhysics, this.gearCollide, null, this);
    this.physics.add.overlap(this.player, this.points, this.addScore, null, this);

    this.score = 0;
    var scoreFormatted = this.zeroPad(this.score, 6);
    this.scoreLabel = this.add.bitmapText(10, 5, 'pixelFont', 'SCORE ' + scoreFormatted, 24);
    this.scoreLabel.setScrollFactor(0, 0);
  }

  addScore(coin, player){
    this.score += 10;
    var scoreFormatted = this.zeroPad(this.score, 6);
    this.scoreLabel.text = 'SCORE ' + scoreFormatted;
    //coin.disableBody(true, true);
    player.destroy();
  }
  zeroPad(number, size){
    var stringNumber = String(number);
    while(stringNumber.length < (size || 2)){
      stringNumber = '0' + stringNumber;
    }
    return stringNumber;
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
    // gear movement
    this.gearProjectile(this.gear, 8);   
  }
  gearIteration = 1;
  
  


// gear reset
resetGear(gear){
  this.gearIteration++;
  gear.x = 1000*this.gearIteration;
  let randomY = Phaser.Math.Between(10, 600);
  gear.y = randomY;
}
  // gear functionality
  gearProjectile(gear, speed) {
    gear.x = gear.x - speed;
    
    if(gear.x === 0) {
      this.resetGear(gear);
    }
}
  // Player hits gear (on collision)
  gearCollide(player, gear){
    this.resetGear(gear);
    player.x = 300
    player.y = 300;
    this.score = 0;
  }
  loadCoins(){
  let coinsToSpawn = Phaser.Math.Between(5, 20);
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
