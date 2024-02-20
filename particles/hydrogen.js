import Particle from "./particle.js";


export default class Hydrogen extends Particle {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) { super(x, y, 1); }



  draw() { Particle.drawProton(this.x, this.y); }
}
