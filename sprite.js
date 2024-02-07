export default class Sprite {
  static canvas = /** @type {HTMLCanvasElement} */
    (document.querySelector("canvas"));
  static ctx = /** @type {CanvasRenderingContext2D} */
    (Sprite.canvas.getContext("2d"));

  static #lastTime = Date.now();
  static deltaTime = 0;


  static render() {
    const render = () => {
      Sprite.canvas.width = window.innerWidth;
      Sprite.canvas.height = window.innerHeight;

      Sprite.deltaTime = Math.min(Date.now() - Sprite.#lastTime, 1000) / 1000;
      Sprite.#lastTime = Date.now();


      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
}