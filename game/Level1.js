class Level1 extends Phaser.Scene {
  constructor() {
    super('playGameL1');
  }

  preload() {
    this.load.image('background', './assets/level1BG.jpg');
    // this.load.spritesheet('player', './assets/Jetpack_Man/spritesheets/_jet_pack_man_no_weapon_white_helmet_flying_die.png', {
    //   frameWidth:20,
    //   frameHeight: 20
    // });
    this.load.image('player', './assets/Jetpack_Man/spriter_file_png_body_parts/guide.png');
  }

  
  create() {
    // Add background image to canvas
    this.background = this.add.tileSprite(0, 0, 1920, 662, 'background');
    this.background.setOrigin (0, 0);
    
    //this.player = this.add.image(200, 200, 'player').setDisplaySize(80, 100);
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

  createPlayer() {
    var me = this;

    me.player = me.game.add.image(me.game.world.centerX / 2, me.game.world.centerY, 'player');

    me.player.anchor.setTo(0.5, 0.5);

    me.game.physics.arcade.enable(me.player);

    me.player.body.gravity.y = 2000;

    me.player.body.collideWorldBounds = true;

    me.player.body.immovable = true;
  }

}
