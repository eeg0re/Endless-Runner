class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

    }

    create(){
        // reset game parameters 
        this.birdVelocity = -250; // start real easy
        this.birdMaxVelocity = -1000;
        this.timer = 0;
        
        // define constants
        this.DRAG = 0.1;
        this.JUMPVELOCITY = -700;
        this.MAXJUMPS = 1;
        this.physics.world.gravity.y = 2600;

        // define cursors again
        this.cursors = this.input.keyboard.createCursorKeys();

        // add background with parallax scroling
        this.background1 = this.add.tileSprite(0,0, game.config.width, game.config.height, 'mountains');
        this.background1.setOrigin(0,0);
        this.trees = this.add.tileSprite(0, 224, game.config.width*2, 64, 'sprites', 'tree');
        this.trees.scaleY = 3;
        this.sun = this.add.sprite(game.config.width/2, 20, 'sprites', 'sun');
        this.dirtTiles = this.add.tileSprite(0, 320, game.config.width*2, 48, 'sprites', 'dirt');
        this.physics.add.existing(this.dirtTiles);
        this.dirtTiles.body.setSize(game.config.width*2, 35);
        this.dirtTiles.body.setImmovable(true);
        this.dirtTiles.body.setAllowGravity(false);

        // display player's time
        let timeConfig = {
                fontFamily: 'Courier',
                fontSize: '18px',
                backgroundColor: '#36541d',
                color: '#cadeba',
                align: 'right',
                padding: {
                    top: 5,
                    bottom: 5,
                },
        }
        this.playerTime = this.add.text(10, 10, `TIME: ${this.timer}` , timeConfig);

        // play background music


        // add player
        this.player = this.physics.add.sprite(20, 272, 'sprites', 'Sammy1');
        // add physics to the player
        this.player.body.setCollideWorldBounds(true);
        this.player.setGravityY(200);
        this.playerVelocity = 250;
        this.player.setDamping(true);
        this.player.eaten = false;

        // create a bird group
        this.birdGroup = this.add.group({
            runChildUpdate: true
        });

        // delay the bird spawn
        this.time.delayedCall(4000, ()=> {
            this.addBird();
        });
        
        this.difficultyTimer = this.time.addEvent({
            delay: 1000,                            // every second
            callback: this.timeIncrease,
            callbackScope: this,
            loop: true
        });

        // add player/tile collision
        this.physics.add.collider(this.player, this.dirtTiles);

        // adjust world bounds
        this.physics.world.setBounds(0,0, this.background1.width, this.background1.height, false, true, true, true);

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
        
        // play sammy's wiggle
        this.player.anims.play('wiggle', true);

        // play the song only if it isn't already playing
        this.gameSong = this.sound.add('gameMusic');
        this.gameSong.loop = true;
        if(songIsPlaying == false){
            songIsPlaying = true;
            this.gameSong.play();
        }
    }

    // addBird code based off addBarrier code from Paddle Parkour P3
    addBird(){
        let speedVariance = Phaser.Math.Between(0, 50);
        let birb = new Bird(this, this.birdVelocity - speedVariance);
        this.birdGroup.add(birb);
    }

    update(){
        // scroll tiles for parallax effect
        this.background1.tilePositionX += 0.5;
        this.trees.tilePositionX += 2;
        this.dirtTiles.tilePositionX += 3;

        if(!this.player.eaten){     // only check for input if the player hasn't lost
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

            // handle jumping 
            // jumping code inspired/copied from Movement Studies repo: https://github.com/nathanaltice/MovementStudies/blob/master/scenes/VariableJump.js
            this.player.isGrounded = this.player.body.touching.down;
            if(this.player.isGrounded){
                //this.player.anims.play('wiggle');
                this.jumps = this.MAXJUMPS;
                this.jumping = false;
                //this.sound.play('sfx-jump');
            }
            else{ 
                //this.player.anims.play('wiggle');
            }
            if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(this.cursors.space, 150)){
                //this.player.anims.play('jump');
                this.player.body.velocity.y = this.JUMPVELOCITY;
                this.jumping = true;
                
            }
            if(this.jumping && Phaser.Input.Keyboard.UpDuration(this.cursors.space, 50)){
                //this.player.anims.play('jump');
                this.jumps--;
                this.jumping = false;
            }

            // check for slug/bird collisions
            this.physics.world.collide(this.player, this.birdGroup, this.playerDeath, null, this);

            if(this.player.x < -16){
                this.playerDeath();
            }
        }


        this.playerTime.text = `TIME: ${this.timer}`;
    }

    timeIncrease(){
        if(!this.player.eaten){
            this.timer++;

            if(this.timer % 5 == 0){ // every 5 seconds increase speed by 50 pixels 
                if(this.birdVelocity >= this.birdMaxVelocity){
                    this.birdVelocity -= 50;
                }
            }
        }
    }

    playerDeath(){
        this.player.anims.play('dead', true);
        this.player.eaten = true;
        this.difficultyTimer.destroy();
        // play a death/game over sound
        this.sound.play('sfx-ded');
        
        // play a death animation
        this.player.destroy();

        this.gameSong.stop();
        songIsPlaying = false;
        this.time.delayedCall(2000, ()=> { this.scene.start('GameOverScene');});
    }

}