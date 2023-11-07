class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }

    preload(){
        // loading bar code provided by Prof. Nathan Altice
        // code from Asset Bonanza repo on Github
        // set up loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loading = this.add.graphics();
        // see: https://photonstorm.github.io/phaser3-docs/Phaser.Loader.Events.html
        this.load.on('progress', (value)=> {
            loading.clear();                            // reset fill/line style
            loading.fillStyle(0x911C1C, 1);             // (color, alpha)
            loading.fillRect(30, 300, 900*value, 15);  // (x, y, width, height)
        });
        this.load.on('complete', ()=> {
            loading.destroy();
        });

        // load all other assets
        this.load.path = './assets/';           // set the load path
        this.load.image('mountains', 'mountains.png');
        this.load.image('gameOver', 'game-over.png');

        // load atlas
        this.load.atlas('sprites', 'atlas.png', 'atlas.json');

        // load spritesheets for animations 
        this.load.spritesheet('jumper', 'SammyJump.png', {
            frameWidth: 32,
            frameHeight: 16
        });

        this.load.spritesheet('death', 'SammyDeath.png', {
            frameWidth: 32,
            frameHeight: 16
        });

        // load sounds
        this.load.audio('gameMusic', '8-bit-surf.mp3');
        this.load.audio('sfx-UI', 'coin-collect-retro-8-bit-sound-effect-145251.mp3')
        this.load.audio('sfx-ded', 'ded.wav');
        this.load.audio('sfx-jump', 'jump.wav');
    }

    create(){
        this.anims.create({
            key: 'jump',
            frameRate: 6,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('jumper', {start: 0, end: 3}),
        });

        this.anims.create({
            key: 'dead',
            frameRate: 4,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('death', {start: 0, end: 3}),
        });

        this.scene.start('menuScene');
    }

}