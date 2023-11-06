class GameOver extends Phaser.Scene{
    constructor(){
        super("GameOverScene");
    }

    preload(){

    }

    create(){
        this.screen = this.add.tileSprite(0,0, game.config.width, game.config.height, 'gameOver').setOrigin(0,0);
    }

    update(){
        
    }

}