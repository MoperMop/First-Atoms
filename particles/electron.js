import Particle from "./particle.js";


export default class Electron extends Particle {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    super(x, y, 10, "yellow", "-");
  }
}