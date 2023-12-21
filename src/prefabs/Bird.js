class Bird extends Phaser.GameObjects.Sprite{
    constructor(scene, velocity){
        super(scene, game.config.width+32, Phaser.Math.Between(150, game.config.height-32), 'sprites', 'bird1');
        // code for bird class inspired by barrier.js in PaddleParkourP3 repo:
        // https://github.com/nathanaltice/PaddleParkourP3/blob/master/src/prefabs/Barrier.js#L7C1-L7C1
        this.parentScene = scene;
        
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
        });

        // add object to existing scene
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setVelocityX(velocity);
        this.body.setImmovable();
        this.body.setAllowGravity(false);
        this.anims.play('flap', true);
        this.newBird = true;
    }

    update(){
        if(this.newBird && this.x < game.config.width/2){
            this.parentScene.addBird();
            this.newBird = false;
        }
        
        // destroy the bird when it reaches past the edge of the screen
        if(this.x < -(this.width - 32)){
            this.destroy();
        }
    }
}