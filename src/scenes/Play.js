class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

    }

    create(){
        // add mountain background
        this.background1 = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains');
        this.background1.setOrigin(0,0);

    }

    update(){
        this.background1.tilePositionX += 0.5;
    }

}