import 'phaser';



export default class EnemyShips extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children, spriteArray) {
        super(world, scene, children);
        this.scene = scene;

        this.createEnemyShip(1)

        this.createEnemyShipLoop()

    

    }

    createEnemyShip(max) {
        for (let i = 0; i < max; i++) {
            let xCoord = Phaser.Math.RND.between(0, 700)
            let yCoord = Phaser.Math.RND.between(-30, -10)

            let enemyShip = this.create(xCoord, yCoord, 'enemyShip')

            this.scene.physics.add.existing(enemyShip)

            enemyShip.body.setSize(30, 30)

            enemyShip.body.setEnable(true);

            enemyShip.body.setVelocityY(Phaser.Math.RND.between(35, 50))
        }
    }

    createEnemyShipLoop() {
        let enemyShipGen = this.scene.time.addEvent({
            delay: 5000,
            callback: () => this.createEnemyShip(1),
            callbackScope: this,
            loop: true,
        })
        //note: time.addEvent can only be scenes => this.scene.afslsa
    }
}