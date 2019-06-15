import 'phaser';

export default class Missiles extends Phaser.Physics.Arcade.Group {
 constructor (world, scene, children, spriteArray) {
   super(world, scene, children);
   this.scene = scene;

   // Groups have this method
   // will create objects and add to a group
   this.createMultiple({
     // number of objects
     frameQuantity: 5,
     // sprite texture string
     key: 'missile',
     active: false,
     visible: false,
   });
 }

 enemyCollision (missile, enemy) {
   // modify missile
   missile.active = false;
   missile.visible = false;
//    missile.body.disableBody();

   // modify enemy
//    enemy.loseHealth();
 }

 fireMissile (x, y) {
   const missile = this.getFirstDead(true, x, y, 'missile', null, true);
   if (missile) {
       if(!missile.body) {
           this.scene.physics.add.existing(missile)
       } 
       missile.setScale(0.2);
       missile.body.setEnable(true);
    //    missile.setPosition(x, y);
       missile.setVisible(true);
       missile.setActive(true) 
       missile.body.setVelocityY(-75);
    //    this.toggleVisible() 
       console.log(missile)

    //  this.scene.time.addEvent({
    //    delay: 3500,
    //    callback: () => {
    //      missile.body.setEnable(false);
    //      missile.active = false;
    //      missile.visible = false;
    //      missile.body.setVelocityX(0);
    //    },
    //  });
   }
 }

 disableMissile(missile) {
     console.log(missile)
     this.scene.missile.remove(missile)
    //  missile.setVisible(false);
    // missile.setActive(false)
 }
}