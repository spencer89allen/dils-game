import 'phaser';



export default class Astroids extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children, spriteArray) {
        super(world, scene, children);
        this.scene = scene;

        this.createAstroid(25)

        this.createAstroidLoop()
    }

    createAstroid(max) {
        for (let i = 0; i < max; i++) {
            let xCoord = Phaser.Math.RND.between(0, 700)
            let yCoord = Phaser.Math.RND.between(-30, -10)

            let astroid = this.create(xCoord, yCoord, 'astroid')

            this.scene.physics.add.existing(astroid)

            astroid.body.setSize(30, 30)

            astroid.body.setEnable(true);

            astroid.body.setVelocityY(Phaser.Math.RND.between(15, 50))
        }
    }

    createAstroidLoop() {
        let astroidGen = this.scene.time.addEvent({
            delay: 5000,
            callback: () => this.createAstroid(5),
            callbackScope: this,
            loop: true,
        })
        //note: time.addEvent can only be scenes => this.scene.afslsa
    }
    





}