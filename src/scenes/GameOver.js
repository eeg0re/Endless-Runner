class GameOver extends Phaser.Scene{
    constructor(){
        super("GameOverScene");
    }

    preload(){

    }

    create(){
        this.screen = this.add.tileSprite(0,0, game.config.width, game.config.height, 'gameOver').setOrigin(0,0);
        this.cursors = this.input.keyboard.createCursorKeys();  // redefine cursors one last time
        let goConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: '#424e7a',
            color: '#f0f1f5',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        }

        this.add.text(game.config.width/6, 60, 'GAME OVER', goConfig);
        this.add.text(game.config.width/4, 200, 'Press Space to Restart', goConfig);
        this.add.text(game.config.width/6, 250, 'Press \"up\" for the main menu', goConfig);
    }

    update(){
        if(this.cursors.space.isDown){
            this.sound.play('sfx-UI');
            this.scene.start('playScene');
        }
        if(this.cursors.up.isDown){
            this.sound.play('sfx-UI');
            this.scene.start('menuScene');
        }
    }

}