class GameOver extends Phaser.Scene{
    constructor(){
        super("GameOverScene");
    }

    preload(){

    }

    create(){
        this.screen = this.add.tileSprite(0,0, game.config.width, game.config.height, 'gameOver').setOrigin(0,0);
        this.cursors = this.input.keyboard.createCursorKeys();  // redefine cursors one last time
        this.sound.play('sfx-GO');

        this.add.bitmapText(width/2, height/2, 'menu-font', 'GAME OVER').setOrigin(0.5).setScale(0.5);
        this.add.bitmapText(width/2, (height/2 + 60), 'menu-font', `You survived: ${player_time} sec.`).setOrigin(0.5).setScale(0.3);
        this.add.bitmapText(width/2, (height/2 + 100), 'menu-font', 'Press Space to Restart').setOrigin(0.5).setScale(0.3);
        this.add.bitmapText(width/2, (height/2 + 140), 'menu-font', 'Press up for the main menu').setOrigin(0.5).setScale(0.3);
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