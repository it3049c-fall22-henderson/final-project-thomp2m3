class bootscreen extends Phaser.Scene {
  constructor() {
    super('bootscreen');
  }

  preload() {
    // Load Assets
    this.load.image('title', './assets/title.png');

    this.load.image('play-btn', './assets/play-btn-panel.png');

    this.load.image('about-btn', './assets/about-btn-panel.png');
  }

  create() {
    // Define width & height
    const { width, height } = this.scale;

    // Change background and border color
    var bg = document.getElementById('gameContainer');

    bg.style.backgroundColor = '#EF971E';

    bg.style.border = '4px solid black';

    // Title
    const title = this.add.image(width * 0.5, height * 0.6, 'title');

    title.scale = 0.27;

    title.setY(275);

    // Play button
    const btnPlay = this.add.image(width * 0.5, height * 0.6, 'play-btn');

    btnPlay.setY(330);

    btnPlay.scale = 0.8;

    // Change Scene on 'Play' button click
    btnPlay
      .setInteractive(this.input.makePixelPerfect())
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('playGameL1');
      });

    // Change hover color(s) on 'Play' button
    btnPlay.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
      btnPlay.setTint(878695);
    });

    btnPlay.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
      btnPlay.setTint(0xffffff);
    });

    // About button
    const btnAbout = this.add.image(width * 0.5, height * 0.6, 'about-btn');

    btnAbout.setY(460);

    btnAbout.scale = 0.8;

    // Change Scene on 'About' button click
    btnAbout
      .setInteractive(this.input.makePixelPerfect())
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('aboutscreen');
      });

    // Change hover color(s) on 'About' button
    btnAbout.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
      btnAbout.setTint(878695);
    });

    btnAbout.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
      btnAbout.setTint(0xffffff);
    });
  }
}
