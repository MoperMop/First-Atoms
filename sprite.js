export default class Sprite {
  static canvas = /** @type {HTMLCanvasElement} */
    (document.querySelector("canvas"));
  static ctx = /** @type {CanvasRenderingContext2D} */
    (Sprite.canvas.getContext("2d"));

  static #lastTime = Date.now();
  static deltaTime = 0;


  /** @type {Sprite[]} */
  static #sprites = [];


  static render() {
    const render = () => {
      Sprite.canvas.width = window.innerWidth;
      Sprite.canvas.height = window.innerHeight;

      Sprite.deltaTime = Math.min(Date.now() - Sprite.#lastTime, 1000) / 1000;
      Sprite.#lastTime = Date.now();


      for (const sprite of Sprite.#sprites) {
        sprite.render();
      }


      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }


  /**
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.velocityX = 0;
    this.velocityY = 0;


    Sprite.#sprites.push(this);
  }


  render() {
    this.physics();
    this.draw();
  }

  physics() {
    this.x += this.velocityX * Sprite.deltaTime;
    this.y += this.velocityY * Sprite.deltaTime;
  }
  draw() {
    Sprite.ctx.save();

    Sprite.ctx.translate(this.x, this.y);
    Sprite.ctx.fillStyle = "gray";

    Sprite.ctx.fillRect(-50, -50, 100, 100);

    Sprite.ctx.restore();
  }
}