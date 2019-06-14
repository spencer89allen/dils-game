import "phaser";
import Ship from '../sprites/Ship'

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
    
  }
  
  createCursor() {
    
  }
  
  
  update(time, delta) {
    this.physics.world.wrap(this.player, 5)

    this.background.tilePositionY -= 1;

    if (this.player) {
      this.player.update(time, delta, this.cursors)
      


    }


  }
}
