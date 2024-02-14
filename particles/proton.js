import Particle from "./particle.js";


const ctx = Particle.ctx;
export default class Proton extends Particle {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    super(x, y, 30, "red", "+");
  }
}