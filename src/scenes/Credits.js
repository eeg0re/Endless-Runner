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
            fontSize: '18px',
            backgroundColor: '#424e7a',
            color: '#f0f1f5',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        this.mountain = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains').setOrigin(0,0);

    }

    update(){
        if(this.cursors.space.isDown){
            this.sound.play('sfx-UI');
            this.scene.start('menuScene');
        }
    }
}