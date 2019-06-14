import 'phaser';


export default class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'ship')

        this.scene = scene;
        
        //enable physics
        this.scene.physics.world.enable(this);
        
        //add to scene
        this.scene.add.existing(this);
        
        this.setScale(0.5);

        // this.body.setCollideWorldBounds(true);


        
    }

    update(time, delta, cursors) {

        

        if (cursors.left.isDown) {
            console.log('left')
            this.body.setVelocityX(-100)
          }
          else if (cursors.right.isDown) {
            console.log('right')
            this.body.setVelocityX(100)
          }
          else if (cursors.up.isDown) {
              console.log('up')
              this.body.setVelocityY(-100)
          }
          else if (cursors.down.isDown) {
              console.log('down')
              this.body.setVelocityY(100)
          }
          else {
            this.body.setVelocityX(0)
            this.body.setVelocityY(0)
          }

        
    }
}