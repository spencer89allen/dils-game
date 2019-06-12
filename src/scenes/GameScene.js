import "phaser";
import { SIGHUP } from "constants";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  init() {
    
  }

  preload() {
    this.load.image('ship', 'assets/SimplePixelSpaceships_4x_Size copy.png')
  }


  create() {
    this.background = this.add.tileSprite(0, 0, 700, 400, 'background').setOrigin(0)

    this.add.sprite(350, 340, 'ship')
    
  }

  createCursor() {
    
  }


  update(time, delta) {
   this.background.tilePositionY -= 1
  }
}
