import Particle from "./particle.js";


export default class Electron extends Particle {
  draw() {
    Particle.drawElectron(this.x, this.y);
  }
}
