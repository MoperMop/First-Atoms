import Particle from "./particle.js";

export default class Neutron extends Particle {
  /**
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    super(x, y, 25, "blue");
  }
}