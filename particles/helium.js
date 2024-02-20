import Particle from "./particle.js";


export default class Helium extends Particle {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} [rotation]
   */
  constructor(x, y, rotation = Math.random() * Math.PI * 2) {
    super(x, y, 2);


    this.rotation = rotation;
    this.velocityRotation = (Math.random() - 0.5) * Math.PI * 3;


    let neutrons = 0;

    while (this.#particles.length < 4) {
      if (
        this.#particles.length - neutrons < 2 &&
        (neutrons >= 2 || Math.random() < 0.5)
      ) {
        this.#particles.push("proton");

        continue;
      }
      neutrons++;
      this.#particles.push("neutron");
    }
  }
  /** @type {("proton" | "neutron")[]}*/
  #particles = [];


  draw() {
    for (let i = 0; i < 4; i++) {
      const pos = /** @type {const} */ ([
        Math.sin(i * Math.PI / 2 + this.rotation) * 10 + this.x,
        Math.cos(i * Math.PI / 2 + this.rotation) * 10 + this.y,
      ]);

      if (this.#particles[i] === "proton") Particle.drawProton(...pos);
      else Particle.drawNeutron(...pos);
    }
  }

  physics() {
    super.physics();

    this.rotation += this.velocityRotation * Particle.deltaTime;
  }
}
