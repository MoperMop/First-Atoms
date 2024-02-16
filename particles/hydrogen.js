import Particle from "./particle.js";


export default class Hydrogen extends Particle {
  draw() {
    Particle.drawProton(this.x, this.y);
  }
}
