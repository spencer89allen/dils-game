import 'phaser';



export default class Astroids extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children, spriteArray) {
        super(world, scene, children);

        this.scene = scene;

        //enable physics
        this.scene.physics.world.enable(this);

        //add to scene
        this.scene.add.existing(this);

        // this.setScale(0.5);

        // this.body.setCollideWorldBounds(true);
    }






}