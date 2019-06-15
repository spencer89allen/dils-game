import "phaser";
import Ship from '../sprites/Ship'
import Missiles from "../groups/Missiles";
import Astroids from "../groups/Astroids";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  init() {

  }

  preload() {
  }


  create() {

    this.background = this.add.tileSprite(0, 0, 700, 400, 'background').setOrigin(0)

    this.player = new Ship(this, 350, 340)

    this.cursors = this.input.keyboard.createCursorKeys();

    let { width, height } = this.sys.game.canvas;

    this.missile = new Missiles(this.physics.world, this, []);

    this.spaceKey = this.input.keyboard.addKey( Phaser.Input.Keyboard.KeyCodes.SPACE )
    
    this.astroid = new Astroids(this.physics.world, this, []);

    this.addColliders()
  }
  
  createCursor() {
    
  }
  
  
  update(time, delta) {
    this.physics.world.wrap(this.player, 5)

    this.background.tilePositionY -= 1;

    if (this.player.isAlive) {
      this.player.update(time, delta, this.cursors)
      

      let missile = this.missile.getFirstAlive()
      missile === null ? null : missile.body.y < 0 ? this.missile.disableMissile(missile) : null

    }
  }

  addColliders() {
    this.physics.add.collider(this.player, this.astroid.getChildren(), (player, astroid) => {
      player.isAlive = false;
      player.body.setEnable(false)
      player.destroy();

      this.physics.pause();
      this.add.text(180, 250, 'Game Over', { fontSize: '15px', fill: '#ffffff' });
      this.add.text(152, 270, 'Click to Restart', { fontSize: '15px', fill: '#ffffff' });
      this.input.on('pointerup', () =>{
        // gameState.score = 0;
      this.scene.restart();
      });

    })
  }

  stopTimerEvents() {

      // bugGenLoop.destroy();
     

  }
}
