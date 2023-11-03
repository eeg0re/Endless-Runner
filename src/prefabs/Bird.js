class Bird extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, velocity){
        super(scene, x, y, texture, frame);
        // code for bird class inspired by barrier.js in PaddleParkourP3 repo:
        // https://github.com/nathanaltice/PaddleParkourP3/blob/master/src/prefabs/Barrier.js#L7C1-L7C1
        this.parentScene = scene;
        // add object to existing scene
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.newBird = true;        
    }

    update(){
        if(this.newBird && this.x < this.getCenter.x){
            this.parentScene.addBird(this.parent, this.velocity);
            this.newBird = false;
        }
        
        // destroy the bird when it reaches past the edge of the screen
        if(this.x < -(this.width + 32)){
            this.destroy();
        }
    }
}