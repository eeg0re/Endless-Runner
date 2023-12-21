class Rock extends Phaser.GameObjects.Sprite{
    constructor(scene, velocity){
        super(scene, game.config.width-30, height-32, 'sprites', 'rock');
        this.parentScene = scene;

        // add object to existing scene
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setVelocityX(velocity);
        this.body.setImmovable();
        this.body.setAllowGravity(false);
        this.newRock = true;
    }

    update(){
        if(this.newRock && this.x < game.config.width/3 -40){
            this.parentScene.addRock();
            this.newRock = false;
        }
        // destroy the bird when it reaches past the edge of the screen
        if(this.x < -(this.width - 32)){
            this.destroy();
        }
    }
}