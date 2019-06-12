import 'phaser';

class ship extends Phaser.GameObjects.Sprite.Image {
    constructor(scene) {
        super(scene, x , y, 'ship')

        this.scene = scene;
        
        //enable physics
        this.scene.physics.world.enable(this);
        
        //add to scene
        this.scene.add.existing(this);
        
        this.setScale(2);
        
    }
}