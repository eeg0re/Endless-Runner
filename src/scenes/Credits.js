class Credits extends Phaser.Scene{
    constructor(){
        super("creditScene");
    }
    
    preload(){

    }

    create(){
        this.cursors = this.input.keyboard.createCursorKeys();

        this.mountain = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains').setOrigin(0,0);
        this.add.bitmapText(width/2, height-100, 'menu-font', 'Gameplay music by David Renda on Fesliyan Studios').setOrigin(0.5).setScale(0.2);
        this.add.bitmapText(width/2, height-60, 'menu-font', 'Menu music and sound effects by Pixabay').setOrigin(0.5).setScale(0.2);
        this.add.bitmapText(width/4, height-30, 'menu-font', 'Press Space to return').setOrigin(0.5).setScale(0.2);


    }

    update(){
        if(this.cursors.space.isDown){
            this.sound.play('sfx-UI');
            this.scene.start('menuScene');
        }
    }
}