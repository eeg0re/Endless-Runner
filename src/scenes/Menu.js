class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){

    }

    create(){

        this.mountain = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains').setOrigin(0,0);
        this.add.bitmapText(game.config.width/2, game.config.height/4, 'menu-font', 'Sammy Slug Forest Escape').setOrigin(0.5).setScale(0.5);
        this.add.bitmapText(game.config.width/2,(game.config.height/2), 'menu-font', 'Move with arrows, jump with SPACE').setOrigin(0.5).setScale(0.3);
        this.add.bitmapText(game.config.width/2, game.config.height/2 + 50, 'menu-font', 'Press UP for credits').setOrigin(0.5).setScale(0.3);
        this.add.bitmapText(game.config.width/2,(game.config.height/2)+100, 'menu-font', 'Press SPACE to start').setOrigin(0.5).setScale(0.5);

        //play menu song
        this.menuSong = this.sound.add('menuMusic');
        this.menuSong.loop = true;
        if(menuSongIsPlaying == false){
            menuSongIsPlaying = true;
            this.menuSong.play();
        }
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(){
        // press space to play the game
        if(this.cursors.space.isDown){
            menuSongIsPlaying = false;
            //this.sound.removeByKey('menuMusic');
            this.menuSong.stop();
            this.sound.play('sfx-UI');
            this.scene.start('playScene');
        }

        // press up to view credits
        if(this.cursors.up.isDown){
            menuSongIsPlaying = false;
            this.menuSong.stop(); 
            this.sound.play('sfx-UI');
            this.scene.start('creditScene');
        }

    }

}