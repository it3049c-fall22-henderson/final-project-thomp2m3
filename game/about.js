class aboutscreen extends Phaser.Scene {
  constructor() {
    super('aboutscreen');
  }

  preload() {
    // Load Assets
    this.load.image('title', './assets/title.png');
    
    this.load.image('back-btn', './assets/return-btn-panel.png');
  }

  create() {
    // Define width & height
    const { width, height } = this.scale;

    // Title
    const title = this.add.image(width * 0.5, height * 0.6, 'title');

    title.scale = 0.2;

    title.setY(200);

    // Text
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;

    const courseText = this.add
      .text(screenCenterX, 240, 'IT3049C Final Project', {
        fontSize: '40px',
      })
      .setOrigin(0.5);

    const teamDetails = this.add.text(
      150,
      310,
      'Team members - Emma Brantley, Jackson Palcic,'
    );

    const teamDetailsContd = this.add.text(
      150,
      335,
      'Matthew Thompson, Samba Koita, Steele Shreve'
    );

    // Back button, return to boot screen
    const btnBack = this.add.image(width * .15, height * .15, 'back-btn');

    btnBack.setY(445);
    btnBack.setX(400);
    btnBack.setTint(0xEF971E);
    btnBack.scale = .25;

    // Return to boot on click, adjust color on hover
    btnBack
      .setInteractive(this.input.makePixelPerfect())
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('bootscreen');
      });
  }
}
