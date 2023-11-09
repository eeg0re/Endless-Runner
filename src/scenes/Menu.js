class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){

    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#424e7a',
            color: '#f0f1f5',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        let controlConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#424e7a',
            color: '#f0f1f5',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        }
        this.mountain = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains').setOrigin(0,0);
        this.add.text(game.config.width/12, game.config.height/4, 'Sammy Slug Forest Escape', menuConfig);
        this.add.text(game.config.width/7, game.config.height/2, 'Press space to start', menuConfig);
        this.add.text(game.config.width/7, (game.config.height/2)+50, 'Press up for credits', menuConfig);
        this.add.text(game.config.width/7, (game.config.height/2) + 100, 'Move with <- and -> Jump with space', controlConfig);

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