class Credits extends Phaser.Scene{
    constructor(){
        super("creditScene");
    }
    
    preload(){

    }

    create(){
        this.cursors = this.input.keyboard.createCursorKeys();

        let creditConfig = {
            fontFamily: 'Courier',
            fontSize: '12px',
            backgroundColor: '#424e7a',
            color: '#f0f1f5',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        this.mountain = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains').setOrigin(0,0);
        this.add.text(10, 20, 'Play scene music is "8 Bit Surf"\nby David Renda on Fesliyan Studios', creditConfig);
        this.add.text(10, 60, 'UI sound effect is by Lesiakower on Pixabay,\nhttps://pixabay.com/sound-effects/search/8-bit/', creditConfig);
        this.add.text(10, 100, 'Game Over sound effect is by Pixabay,\nhttps://pixabay.com/sound-effects/search/game-over/', creditConfig);
        this.add.text(10, 140, 'Jump sound effect by Pixabay,\nhttps://pixabay.com/sound-effects/search/8-bit%20jump/', creditConfig);
        this.add.text(10, 180, 'Menu scene music is "beam" by sinneschlösen on Pixabay,\nhttps://pixabay.com/music/search/8bit/', creditConfig);

    }

    update(){
        if(this.cursors.space.isDown){
            this.sound.play('sfx-UI');
            this.scene.start('menuScene');
        }
    }
}