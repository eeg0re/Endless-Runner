class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

    }

    create(){
        // add background with parallax scroling
        this.background1 = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains');
        this.background1.setOrigin(0,0);
        this.dirtTiles = this.add.tileSprite(0, 320, game.config.width*2, 48, 'sprites', 'dirt');
        
        // add player
        this.player = this.physics.add.sprite(20, 272, 'sprites', 'Sammy1');
        this.player.body.setCollideWorldBounds(true);
        this.player.setGravityY(200);
        

        // create sammy's wiggle animation
        this.anims.create({
            key: 'wiggle',
            frames: this.anims.generateFrameNames('sprites', {
                prefix: 'Sammy',
                //suffix: '.png',
                start: 1,
                end: 2,
                zeroPad: 0,
            }),
            frameRate: 8,
            repeat: -1,             // he will wiggle forever
        });

    }

    update(){
        this.background1.tilePositionX += 0.5;
        this.dirtTiles.tilePositionX += 3;

        this.player.anims.play('wiggle', true);
    }

}