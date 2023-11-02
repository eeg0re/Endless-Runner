class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

    }

    create(){
        this.DRAG = 0.3;
        // define cursors again
        this.cursors = this.input.keyboard.createCursorKeys();

        // add background with parallax scroling
        this.background1 = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains');
        this.background1.setOrigin(0,0);
        this.sun = this.add.sprite(game.config.width/2, 20, 'sprites', 'sun');
        this.dirtTiles = this.add.tileSprite(0, 320, game.config.width*2, 48, 'sprites', 'dirt');
        this.physics.add.existing(this.dirtTiles);
        this.dirtTiles.body.setSize(game.config.width*2, 35);
        this.dirtTiles.body.setImmovable(true);
        

        // add player
        this.player = this.physics.add.sprite(20, 272, 'sprites', 'Sammy1');
        // add physics to the player
        this.player.body.setCollideWorldBounds(true);
        this.player.setGravityY(200);
        this.playerVelocity = 250;
        //this.player.setDragX(0.05);
        this.player.setDamping(true);
        

        // add player/tile collision
        this.physics.add.collider(this.player, this.dirtTiles);
        

        // create sammy's wiggle animation
        this.anims.create({
            key: 'wiggle',
            frames: this.anims.generateFrameNames('sprites', {
                prefix: 'Sammy',
                start: 1,
                end: 2,
                zeroPad: 0,
            }),
            frameRate: 8,
            repeat: -1,               // he will wiggle forever
        });

        // create the bird's flapping animation
        this.anims.create({
            key: 'flap',
            frames: this.anims.generateFrameNames('sprites', {
                prefix: 'bird',
                start: 1,
                end: 2,
                zeroPad: 0
            }),
            frameRate: 6,
            repeat: -1,
        });1

    }

    update(){
        this.background1.tilePositionX += 0.5;
        //this.trees.tilePositionX += 2;
        this.dirtTiles.tilePositionX += 3;

        this.player.anims.play('wiggle', true);

        if(this.cursors.left.isDown){
            this.player.body.setAccelerationX(-this.playerVelocity);
        }
        else if(this.cursors.right.isDown){
            this.player.body.setAccelerationX(this.playerVelocity);
        }
        else{
            this.player.body.setAccelerationX(0);
            this.player.body.setDragX(this.DRAG);
        }

        if(this.cursors.down.isDown){
            debugBool = !debugBool;
        }
        
    }

}