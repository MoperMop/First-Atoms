export default class Particle {
  static canvas = /** @type {HTMLCanvasElement} */
    (document.querySelector("canvas"));
  static ctx = /** @type {CanvasRenderingContext2D} */
    (Particle.canvas.getContext("2d"));

  static #lastTime = Date.now();
  static deltaTime = 0;


  /** @type {Particle[]} */
  static #particles = [];


  static render() {
    const render = () => {
      Particle.canvas.width = window.innerWidth;
      Particle.canvas.height = window.innerHeight;

      Particle.deltaTime = Math.min(Date.now() - Particle.#lastTime, 1000) / 1000;
      Particle.#lastTime = Date.now();


      for (const sprite of Particle.#particles) {
        sprite.render();
      }


      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }


  /**
   * @param {number} x 
   * @param {number} y 
   * @param {number} size
   * @param {string} color
   * @param {string} text
   */
  constructor(x, y, size, color = "gray", text = "") {
    this.x = x;
    this.y = y;

    this.velocityX = 0;
    this.velocityY = 0;


    this.size = size;


    this.color = color;

    this.text = text;


    Particle.#particles.push(this);
  }


  render() {
    this.physics();
    this.draw();
  }

  physics() {
    this.x += this.velocityX * Particle.deltaTime;
    this.y += this.velocityY * Particle.deltaTime;
  }
  draw() {
    ctx.save();

    ctx.translate(this.x, this.y);


    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.size, 0, 2 * Math.PI);
    ctx.fill();


    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${this.size * 2}px Arial`;

    const m = ctx.measureText(this.text);
    ctx.fillText(
      this.text,
      0,
      (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2,
      this.size * 2,
    );


    ctx.restore();
  }
}


const ctx = Particle.ctx;