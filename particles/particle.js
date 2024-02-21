export default class Particle {
  static canvas = /** @type {HTMLCanvasElement} */
    (document.querySelector("canvas"));
  static ctx = /** @type {CanvasRenderingContext2D} */
    (Particle.canvas.getContext("2d"));

  static #lastTime = Date.now();
  static deltaTime = 0;


  /** @type {Particle[]} */
  static #particles = [];


  /**
   * @param {() => void} [eachFrame]
   * @param {(particle: Particle) => void} [eachParticle]
   */
  static render(eachFrame, eachParticle) {
    const render = () => {
      if (
        Particle.canvas.width !== window.innerWidth ||
        Particle.canvas.height !== window.innerHeight
      ) {
        Particle.canvas.width = window.innerWidth;
        Particle.canvas.height = window.innerHeight;
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }

      Particle.deltaTime = Math.min(Date.now() - Particle.#lastTime, 1000) / 1000;
      Particle.#lastTime = Date.now();


      Particle.#particles.forEach((particle, index) => {
        particle.render();


        for (const other of Particle.#particles.slice(index + 1)) {
          const strength = Math.min(
            15000 * Particle.deltaTime *
              -particle.charge * other.charge *
              ((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2) ** -0.5,
            50,
          );

          const direction = [particle.x - other.x, particle.y - other.y]
            .map((value, _, arr) => value / (arr[0] ** 2 + arr[1] ** 2) ** 0.5);

          particle.velocityX -= strength / particle.mass * direction[0];
          other.velocityX += strength / other.mass * direction[0];
          particle.velocityY -= strength / particle.mass * direction[1];
          other.velocityY += strength / other.mass * direction[1];
        }


        eachParticle?.(particle);
      });


      eachFrame?.();


      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }


  /**
   * @param {number} x 
   * @param {number} y 
   * @param {number} [charge]
   * @param {number} [mass]
   */
  constructor(x, y, charge = 0, mass = 1) {
    this.x = x;
    this.y = y;

    this.velocityX = 0;
    this.velocityY = 0;


    this.charge = charge;
    this.mass = mass;


    Particle.#particles.push(this);
  }

  remove() {
    Particle.#particles.splice(
      Particle.#particles.findIndex(p => p === this),
      1,
    );
  }


  render() {
    this.physics();
    this.draw();
  }

  physics() {
    this.x += this.velocityX * Particle.deltaTime;
    this.y += this.velocityY * Particle.deltaTime;
  }
  draw() {}


  /**
   * @param {number} x
   * @param {number} y
   * @param {number} size
   * @param {string} color
   * @param {string} text
   */
  static #draw(x, y, size, color, text = "") {
    ctx.save();

    ctx.translate(x, y);


    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, 2 * Math.PI);
    ctx.fill();


    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${size * 2}px Arial`;

    const m = ctx.measureText(text);
    ctx.fillText(
      text,
      0,
      (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2,
      size * 2,
    );


    ctx.restore();
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  static drawProton(x, y) { this.#draw(x, y, 10, "red", "+"); }
  /**
   * @param {number} x
   * @param {number} y
   */
  static drawNeutron(x, y) { this.#draw(x, y, 10, "blue"); }
  /**
   * @param {number} x
   * @param {number} y
   */
  static drawElectron(x, y) { this.#draw(x, y, 5, "yellow", "-"); }
}


const ctx = Particle.ctx;
