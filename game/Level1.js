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
    
    this.add.sprite(200, 200, 'player').setDisplaySize(80, 100);
    var me = this;
    me.cursors = me.game.input.keyboard.createCursorKeys();    
    me.tileSpeed = -450;
    me.tileWidth = me.game.cache.getImage('tile').width;
    me.tileHeight = me.game.cache.getImage('tile').height;
    me.game.physics.startSystem(Phaser.Physics.ARCADE);
    me.createPlayer();
    if (me.cursors.up.isDown) {
      me.player.body.velocity.y -= 80;
    }
  }

  update() {
    this.background.tilePositionX += 0.5;
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
